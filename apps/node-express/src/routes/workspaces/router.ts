import express from 'express';

import { asyncErrorWrapper } from '../../config';
import { getAllWorkspaces } from './handlers';

export const workspacesRouter = express.Router();

workspacesRouter.get('/', asyncErrorWrapper(getAllWorkspaces));
