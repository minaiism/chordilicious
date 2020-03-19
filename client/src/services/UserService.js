import ApiClient from './ApiClient';
import { UserServiceException } from './exception/UserServiceException';
import { UserValidationException } from './exception/UserValidationException';

/**
 * Validate user response data structure
 **/
const validateUser = (user) => {
  if (!user.name) {
    throw new UserValidationException('Missing username');
  } else if (!user.email) {
    throw new UserValidationException('Missing email');
  } else if (!user.avatar) {
    throw new UserValidationException('Missing avatar');
  }
};
/**
 * Retrieve user
 * @returns {Promise<*>} - resolves with an object with user data
 */
export const getUser = async () => {
  try {
    let res = await ApiClient.get('/users/me');
    const results = res.data;
    validateUser(results);
    return results;
  } catch (e) {
    throw new UserServiceException(`User fetching failed, ${e.message}`);
  }
};