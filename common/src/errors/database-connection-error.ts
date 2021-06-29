import { CustomError } from './custom-error'


export class DatabaseConnectionError extends CustomError {
  statusCode = 500;

  constructor() {
    super("Database connection error");
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeError() {
    return [{ message: "Could not connect to the database" }];
  }
}
