import * as UserService from '../services/UserService';
import userPayload from './apiMocks/user-data';
import { UserServiceException } from '../services/exception/UserServiceException';
import ApiClient from '../services/ApiClient';
import { UserValidationException } from '../services/exception/UserValidationException';

jest.mock('../services/ApiClient');

describe('UserService', () => {
  it('getUser should resolve with user', async () => {
    ApiClient.get.mockResolvedValueOnce({ data: userPayload });

    await expect(UserService.getUser()).resolves.toBe(userPayload);
  });

  it('getUser should throw UserServiceException when fetching user fails', async () => {
    const errorMessage = 'Network Error';
    ApiClient.get.mockRejectedValueOnce(new Error(errorMessage));

    await expect(UserService.getUser()).rejects.toThrow(UserServiceException);
  });

  it('getUser should throw UserServiceException with correct message when fetching user fails', async () => {
    const errorMessage = 'Network Error';
    ApiClient.get.mockRejectedValueOnce(new Error(errorMessage));

    try {
      await UserService.getUser();
    } catch (e) {
      expect(e.message).toBe('Fetching user failed, ' + errorMessage);
    }
  });

  it('validateUser should not throw error when payload is correct', () => {
    const user = {
      name: 'test name',
      email: 'testemail@gmail.com',
      avatar: 'https://graph.facebook.com/2561664193890210/picture'
    };

    expect(() => UserService.validateUser(user)).not.toThrow(UserValidationException);
  });

  it('validateUser should throw error when user is missing name property', () => {
    const errorMessage = 'Missing name.';
    const user = {
      email: 'testemail@gmail.com',
      avatar: 'https://graph.facebook.com/2561664193890210/picture'
    };

    try {
      UserService.validateUser(user);
    } catch (e) {
      expect(e.message).toBe('User validation failed. ' + errorMessage);
    }
  });

  it('validateUser should throw error when user is missing email property', () => {
    const errorMessage = 'Missing email.';
    const user = {
      name: 'test name',
      avatar: 'https://graph.facebook.com/2561664193890210/picture'
    };

    try {
      UserService.validateUser(user);
    } catch (e) {
      expect(e.message).toBe('User validation failed. ' + errorMessage);
    }
  });

  it('validateUser should throw error when user is missing avatar property', () => {
    const errorMessage = 'Missing avatar.';
    const user = {
      name: 'test name',
      email: 'testemail@gmail.com'
    };

    try {
      UserService.validateUser(user);
    } catch (e) {
      expect(e.message).toBe('User validation failed. ' + errorMessage);
    }
  });
});