import { ErrorCodes } from '../../Constants';

export const LyricServiceError = message => {
  const error = new Error(message);
  error.code = ErrorCodes.SEARCH_LYRICS_SERVICE_ERROR;
  return error;
};

LyricServiceError.prototype = Object.create(Error.prototype);