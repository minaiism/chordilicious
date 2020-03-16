import { ErrorCodes } from '../../Constants';

export const LyricServiceException = message => {
  const error = new Error(message);
  error.code = ErrorCodes.searchLyricsServiceError;
  return error;
};

LyricServiceException.prototype = Object.create(Error.prototype);