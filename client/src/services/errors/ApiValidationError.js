import { ErrorCodes } from '../../Constants';
import { ChordiliciousError } from './ChordiliciousError';

export class ApiValidationError extends ChordiliciousError {
  constructor(message) {
    super(ErrorCodes.API_VALIDATION_ERROR, `API validation error. ${message}.`);
  }
}
