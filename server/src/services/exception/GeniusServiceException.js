import { ErrorCodes } from '../../../Constants';

export const GeniusServiceException = message => {
  const error = new Error(message);
  error.code = ErrorCodes.searchGeniusServiceError;
  return error;
};

GeniusServiceException.prototype = Object.create(Error.prototype);