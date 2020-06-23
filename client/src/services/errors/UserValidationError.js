import {ErrorCodes} from '../../Constants';
import {ChordiliciousError} from "./ChordiliciousError";

export class UserValidationError extends ChordiliciousError {
  constructor(message) {
    super(ErrorCodes.USER_VALIDATION_ERROR, `User validation failed. ${message}.`);
  }
}
