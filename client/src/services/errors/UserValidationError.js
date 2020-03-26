import { ErrorCodes } from '../../Constants';

export class UserValidationError extends Error {
  constructor(message) {
    super(`User validation failed. ${message}.`);
    this.code = ErrorCodes.USER_VALIDATION_ERROR;
  }
}