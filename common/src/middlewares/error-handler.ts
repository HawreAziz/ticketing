import { Response, Request, NextFunction } from 'express';
import { CustomError } from '../errors';


const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).send({ errors: error.serializeError() });
  }
  res.status(400).send('Something went wrong');
}

export { errorHandler };
