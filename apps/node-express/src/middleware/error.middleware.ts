import { NextFunction, Request, Response } from 'express';

import { HttpException } from '../types';

export const errorHandler = (
  error: HttpException,
  _: Request,
  response: Response,
  __: NextFunction
) => {
  const status = error.statusCode || 500;
  const message = error.message;

  response.status(status).json({ error: message });
};
