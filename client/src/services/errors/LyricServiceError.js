import { ErrorCodes } from '../../Constants';

export class LyricServiceError extends Error {
  constructor(message) {
    super(message);
    this.code = ErrorCodes.SEARCH_LYRICS_SERVICE_ERROR;
  }
}