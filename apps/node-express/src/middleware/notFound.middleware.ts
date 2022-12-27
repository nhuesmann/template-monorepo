import { NextFunction, Request, Response } from 'express';

export const notFoundHandler = (
  _: Request,
  response: Response,
  __: NextFunction
) => {
  const message = 'Path not found';

  response.status(404).json({ error: message });
};
