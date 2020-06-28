import { ApiClient } from './ApiClient';
import { FetchUserError } from './errors/FetchUserError';
import { UserValidationError } from './errors/UserValidationError';

/**
 * Validate user response data structure
 * */
export const validateUser = (user) => {
  if (!user.name) {
    throw new UserValidationError('Missing name');
  } else if (!user.email) {
    throw new UserValidationError('Missing email');
  } else if (!user.avatar) {
    throw new UserValidationError('Missing avatar');
  }
};
/**
 * Retrieve user
 * @returns {Promise<*>} - resolves with an object with user data
 */
export const getUser = async () => {
  try {
    const res = await ApiClient.get('/users/me');
    const user = res.data;
    validateUser(user);
    return user;
  } catch (e) {
    throw new FetchUserError(
      e.response.status,
      `Fetching user failed, ${e.message}`
    );
  }
};
