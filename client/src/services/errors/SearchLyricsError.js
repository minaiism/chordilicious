import {ErrorCodes} from '../../Constants';
import {ChordiliciousError} from "./ChordiliciousError";

export class SearchLyricsError extends ChordiliciousError {
  constructor(message) {
    super(ErrorCodes.SEARCH_LYRICS_ERROR, message);
  }
}
