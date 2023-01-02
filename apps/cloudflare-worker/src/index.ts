import { IRequest, Router } from 'itty-router';

import { withCorsPreflight } from './middleware';
import { createPost, fetchPosts, health } from './routes';
import type { Env, Handler } from './types';

const router = Router();

router.all('*', withCorsPreflight);
router.get('/', health);
router.post('/api/posts', createPost);
router.get('/api/posts', fetchPosts);

router.all('*', () => new Response('Not Found.', { status: 404 }));

const handleRequest: Handler = router.handle;

export default {
  async fetch(
    request: IRequest,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    return handleRequest(request, env, ctx);
  },
};
