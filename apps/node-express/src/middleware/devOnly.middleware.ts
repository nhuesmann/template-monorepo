import { NextFunction, Request, Response } from 'express';

export const devOnlyHandler = (
  _: Request,
  response: Response,
  next: NextFunction
) => {
  if (process.env.NODE_ENV === 'development') {
    next();
  } else {
    response.status(400).json({ error: 'Not available' });
  }
};
