import { AsyncWrapper } from '../types';

export const asyncErrorWrapper: AsyncWrapper = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
