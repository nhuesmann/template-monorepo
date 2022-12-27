import { NextFunction, Request, Response } from 'express';

export type RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export type AsyncWrapper = (fn: RequestHandler) => RequestHandler;

export interface QueryParamObject {
  [key: string]: string | number;
}

export class HttpException extends Error {
  statusCode?: number;

  message: string;

  error: string | null;

  constructor(statusCode: number, message: string, error?: string) {
    super(message);

    this.statusCode = statusCode;
    this.message = message;
    this.error = error || null;
    Error.captureStackTrace(this);
  }
}
