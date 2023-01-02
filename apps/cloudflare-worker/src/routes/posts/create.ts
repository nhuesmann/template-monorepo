import type { IRequest } from 'itty-router';
import type { WorkerRequestBody } from 'types';

import { jsonHeaders } from '../../config';
import type { Env } from '../../types';

export async function createPost(request: IRequest, env: Env) {
  const bodyInput: WorkerRequestBody = await request.json();

  const jsonPlaceholderResponse = await fetch(env.API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyInput),
  }).then((response) => response.json());

  const data = JSON.stringify({ createdPost: jsonPlaceholderResponse });

  return new Response(data, { headers: jsonHeaders });
}
