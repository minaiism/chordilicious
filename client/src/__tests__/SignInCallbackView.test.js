import '@testing-library/jest-dom';
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Paths, TestIds } from '../Constants';
import userData from './apiMocks/user-data';
import * as UserService from '../services/UserService';
import { useUserContext } from '../components/Context';
import { navigate } from 'hookrouter';
import SignInCallbackView from '../components/Views/SignInCallbackView';

jest.mock('../services/UserService');
jest.mock('hookrouter');
jest.mock('../components/Context');

describe('SignInCallbackView', () => {
  it(`should render spinner icon by default`, async () => {
    // noinspection JSUnresolvedVariable
    UserService.getUser = jest.fn(async () =>
      new Promise(resolve => {
          setTimeout(() => {
            resolve(userData);
          }, 1000);
        }
      ));
    useUserContext.mockReturnValue({ user: null, error: '' });
    const { getByTestId } = render(<SignInCallbackView/>);
    await waitFor(() => expect(UserService.getUser).toHaveBeenCalled());
    const elem = getByTestId(TestIds.SIGN_IN_CALLBACK_ARTICLE_ID);
    expect(elem).toBeInTheDocument();
  });

  it(`should navigate to home page when user fetching successful`, async () => {
    let userServiceMock = UserService.getUser.mockResolvedValueOnce(userData);
    navigate.mockImplementationOnce(jest.fn());
    useUserContext.mockReturnValue({ user: null, setUser: jest.fn() });
    render(<SignInCallbackView/>);
    await waitFor(() => expect(userServiceMock).toHaveBeenCalled());
    await waitFor(() => expect(navigate).toHaveBeenCalled());
    await (() => expect(navigate).toHaveBeenCalledWith(Paths.HOME_PATH));
  });

  it(`should navigate to home page when user exists`, async () => {
    navigate.mockImplementationOnce(jest.fn());
    useUserContext.mockReturnValue({ user: {} });
    render(<SignInCallbackView/>);
    await waitFor(() => expect(navigate).toHaveBeenCalled());
    await (() => expect(navigate).toHaveBeenCalledWith(Paths.HOME_PATH));
  });

  it(`should render error when user fetching fails`, async () => {
    const errorMessage = 'Network Error';
    UserService.getUser.mockRejectedValue({ errorMessage });
    const setError = jest.fn();
    useUserContext.mockReturnValueOnce({ user: null, setUser: jest.fn(), error: '', setError });
    render(<SignInCallbackView/>);
    useUserContext.mockReturnValueOnce({ user: null, setUser: jest.fn(), error: errorMessage, setError });
    const { getByTestId } = render(<SignInCallbackView/>);
    await waitFor(() => expect(setError).toHaveBeenCalled());
    const elem = getByTestId(TestIds.SIGN_IN_CALLBACK_ERROR_ID);
    expect(elem).toBeInTheDocument();
  });
});