export const LyricServiceException = message => {
  const error = new Error(message);
  error.code = 'LYRICS_SERVICE_EXCEPTION';
  return error;
};

LyricServiceException.prototype = Object.create(Error.prototype);