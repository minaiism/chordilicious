import { ErrorCodes } from '../../Constants';

export const LyricServiceException = message => {
  const error = new Error(message);
  error.code = ErrorCodes.SEARCH_LYRICS_SERVICE_ERROR;
  return error;
};

LyricServiceException.prototype = Object.create(Error.prototype);