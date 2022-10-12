import createHttpError from 'http-errors';
import { NotFoundError } from '@errors';

export default function errorHandler(err) {
  if (err instanceof NotFoundError) {
    throw createHttpError(404, err.message);
  }
}
