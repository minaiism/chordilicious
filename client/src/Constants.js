export const TestIds = {
  ABOUT_VIEW_ARTICLE_ID: 'about-view-article-id',
  AUTH_WRAPPER_SPINNER_ARTICLE_ID: 'auth-wrapper-spinner-article-id',
  AUTH_WRAPPER_VIEW_ARTICLE_ID: 'auth-wrapper-view-article-id',
  AUTH_WRAPPER_SNACKBAR_ARTICLE_ID: 'auth-wrapper-snack-bar-article-id',
  FAVORITES_VIEW_ARTICLE_ID: 'favorites-view-article-id',
  FETCH_USER_ERROR_ARTICLE_ID: 'fetch-user-error-article-id',
  FETCH_USER_ERROR_CODE_ID: 'fetch-user-error-code-id',
  FETCH_USER_ERROR_MESSAGE_ID: 'fetch-user-error-message-id',
  GOALS_LIST_ARTICLE_ID: 'goals-list-article-id',
  HOME_VIEW_ARTICLE_ID: 'home-view-article-id',
  INTERNAL_SERVER_ERROR_ARTICLE_ID: 'internal-server-error-article-id',
  INTERNAL_SERVER_ERROR_CODE_ID: 'internal-server-error-code-id',
  INTERNAL_SERVER_ERROR_MESSAGE_ID: 'internal-server-error-message-id',
  LYRICS_VIEW_ARTICLE_ID: 'lyrics-view-article-id',
  MAIN_VIEW_ARTICLE_ID: 'main-view-article-id',
  SEARCH_LYRICS_BAR_FORM_ID: 'search-lyrics-bar-form-id',
  SEARCH_LYRICS_BUTTON_ID: 'search-lyrics-button-id',
  SEARCH_LYRICS_BUTTON_ARTICLE_ID: 'search-lyrics-article-id',
  SEARCH_LYRICS_ERROR_MESSAGE_ID: 'search-lyrics-error-message-id',
  SEARCH_LYRICS_INPUT_ID: 'search-lyrics-input-id',
  SEARCH_LYRICS_INPUT_ARTICLE_ID: 'search-lyrics-input-article-id',
  SEARCH_LYRICS_RESULTS_ARTICLE_ID: 'search-lyrics-results-article-id',
  SEARCH_LYRICS_RESULTS_LIST_ID: 'search-lyrics-results-list-id',
  SEARCH_LYRICS_RESULTS_LIST_ITEM_ID: 'search-lyrics-results-list-item-id',
  SEARCH_LYRICS_ERROR_ARTICLE_ID: 'search-lyrics-error-article-id',
  SEARCH_LYRICS_ERROR_CODE_ID: 'search-lyrics-error-code-id',
  SIGN_IN_CALLBACK_ARTICLE_ID: 'sign-in-callback-article-id',
  SKILLS_LIST_ARTICLE_ID: 'skills-list-article-id',
  TOP_VIEW_ARTICLE_ID: 'top-view-article-id',
  USER_ACCOUNT_VIEW_ARTICLE_ID: 'user-account-view-article-id'
};

export const TestIdsUtils = {
  getErrorArticleId: (name) => TestIds[name + "_ARTICLE_ID"],
  getErrorCodeId: (name) => TestIds[name + "_CODE_ID"],
  getErrorMessageId: (name) => TestIds[name + "_MESSAGE_ID"],
}

export const ErrorCodes = {
  SEARCH_LYRICS_ERROR: 'SEARCH_LYRICS_ERROR',
  FETCH_USER_ERROR: 'FETCH_USER_ERROR',
  API_VALIDATION_ERROR: 'API_VALIDATION_ERROR',
  USER_VALIDATION_ERROR: 'USER_VALIDATION_ERROR',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR'
};

export const Paths = {
  HOME_PATH: '/',
  ABOUT_PATH: '/about',
  FAVORITES_PATH: '/favorites',
  USER_PROFILE_PATH: '/user-profile',
  SIGN_IN_CALLBACK_PATH: '/sing-in-callback',
  LYRICS_PATH: '/lyrics',
  TOP_PATH: '/top'
};
