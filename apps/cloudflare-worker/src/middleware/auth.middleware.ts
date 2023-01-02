/*
Here's how to use middleware with itty-router
https://github.com/kwhitley/itty-router#middleware
*/

import type { IRequest } from 'itty-router';

import { corsHeaders } from '../config';

export const withCorsPreflight = (request: IRequest) => {
  if (request.method.toLowerCase() === 'options') {
    return new Response('ok', {
      headers: corsHeaders,
    });
  }
};
