import { ErrorCodes } from '../../Constants';
import { ChordiliciousError } from './ChordiliciousError';

export class FetchUserError extends ChordiliciousError {
  constructor(status, message) {
    super(
      status === 401
        ? ErrorCodes.FETCH_USER_ERROR
        : ErrorCodes.INTERNAL_SERVER_ERROR,
      message
    );
  }
}
