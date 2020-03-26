import { ErrorCodes } from '../../../Constants';

export class GeniusServiceError extends Error {
  constructor(message) {
    super(message);
    this.code = ErrorCodes.SEARCH_GENIUS_SERVICE_ERROR;
  }
}