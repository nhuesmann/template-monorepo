import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { Workspace } from 'types';

import { RequestHandler } from '../../../types';

export const getAllWorkspaces: RequestHandler = async (req, res) => {
  const appsDir = join(__dirname, '../../../../../../apps');
  const packagesDir = join(__dirname, '../../../../../../packages');

  const [appWorkspaceNames, packageWorkspaceNames] = await Promise.all([
    readdir(appsDir),
    readdir(packagesDir),
  ]);

  const appWorkspacesPromises: Promise<Workspace[]> = Promise.all(
    appWorkspaceNames.map((name) => getWorkspaces(appsDir, name))
  );
  const packageWorkspacesPromises: Promise<Workspace[]> = Promise.all(
    packageWorkspaceNames.map((name) => getWorkspaces(packagesDir, name))
  );

  const [appWorkspaces, packageWorkspaces] = await Promise.all([
    appWorkspacesPromises,
    packageWorkspacesPromises,
  ]);

  res.json({
    apps: appWorkspaces,
    packages: packageWorkspaces,
  });
};

async function getWorkspaces(
  root: string,
  workspace: string
): Promise<Workspace> {
  const fullPath = join(root, workspace, 'package.json');
  return readFile(fullPath, 'utf-8').then((data) => {
    const jsonData: Workspace = JSON.parse(data);
    return {
      name: jsonData.name,
      version: jsonData.version,
    };
  });
}
