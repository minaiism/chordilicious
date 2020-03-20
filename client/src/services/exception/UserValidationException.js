import { ErrorCodes } from '../../Constants';

export class UserValidationException extends Error {
  constructor(message) {
    super(`User validation failed. ${message}.`);
    this.code = ErrorCodes.userValidationError;
  }
}