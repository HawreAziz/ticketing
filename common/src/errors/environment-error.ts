import { CustomError } from './custom-error';


export class EnvironmentError extends CustomError {
  statusCode = 500
  envVariable: string;
  constructor(envVariable: string) {
    super(`${envVariable} is not set`);
    Object.setPrototypeOf(this, EnvironmentError.prototype);
    this.envVariable = envVariable
  }

  serializeError() {
    return [
      { message: this.message }
    ];
  }
}
