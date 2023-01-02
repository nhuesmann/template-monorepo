import type { IRequest } from 'itty-router';

import { jsonHeaders } from '../../config';
import type { Env } from '../../types';

export async function fetchPosts(_: IRequest, env: Env) {
  const jsonPlaceholderResponse = await fetch(env.API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());

  const data = JSON.stringify({ posts: jsonPlaceholderResponse });

  return new Response(data, { headers: jsonHeaders });
}
