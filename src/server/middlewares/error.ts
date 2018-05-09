import { ErrorWrapper } from 'models/error';

// #TODO - need to add type
export const notFoundHandler = (_req, _res, next) => {
  const err = new ErrorWrapper('Not Found', 404, 'Not Found');
  next(err);
};
