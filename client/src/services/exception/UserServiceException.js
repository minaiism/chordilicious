import { ErrorCodes } from '../../Constants';

export class UserServiceException extends Error {
  constructor(message) {
    super(message);
    this.code = ErrorCodes.USER_SERVICE_ERROR;
  }
}