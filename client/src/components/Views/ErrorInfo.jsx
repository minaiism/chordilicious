import React from 'react';
import { TestIdsUtils } from '../../Constants';

/** *
 * Generic error consumer that takes 3 props as an input and produces information about the error
 * @param error {ChordiliciousError} - any error object.
 * @param content {object} - JSX to be rendered
 * @param errorContent {object} - JSX to be rendered when error
 * @returns {*}
 * @constructor
 */
const ErrorInfo = ({ error, content, errorContent }) => {
  return error === null
    ? content
    : errorContent || (
        <article data-testid={TestIdsUtils.getErrorArticleId(error.code)}>
          <p data-testid={TestIdsUtils.getErrorCodeId(error.code)}>
            {error.code}
          </p>
          <p data-testid={TestIdsUtils.getErrorMessageId(error.code)}>
            {error.message}
          </p>
        </article>
      );
};

export default ErrorInfo;
