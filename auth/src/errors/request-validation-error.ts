import { ValidationError } from 'express-validator';
import { CustomError } from './';


export class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(private errors: ValidationError[]) {
    super('Request validation error');
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeError() {
    return this.errors.map(error => {
      return { message: error.msg, field: error.param }
    })
  }
}
