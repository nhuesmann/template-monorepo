// https://github.com/kwhitley/itty-router#typescript

import type { IRequest } from 'itty-router';

export interface Env {
  JWT_SECRET: string;
  API_URL: string;
}

export type Handler = (
  request: IRequest,
  env: Env,
  ctx: ExecutionContext
) => Promise<Response>;
