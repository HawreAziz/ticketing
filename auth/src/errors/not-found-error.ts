import { CustomError } from '../errors';


export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super("Resource not found");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeError() {
    return [{ message: "Page not found" }];
  }
}
