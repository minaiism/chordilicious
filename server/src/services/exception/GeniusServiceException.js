import { ErrorCodes } from '../../../Constants';

export class GeniusServiceException extends Error {
  constructor(message) {
    super(message);
    this.code = ErrorCodes.searchGeniusServiceError;
  }
}