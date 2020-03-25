import '@testing-library/jest-dom';
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Paths, TestIds } from '../Constants';
import userData from './apiMocks/user-data';
import * as UserService from '../services/UserService';
import SignInCallbackView from '../components/Views/SignInCallbackView';
import { UserInfoProvider } from '../components/Context';
import * as hookrouter from 'hookrouter';

jest.mock('../services/UserService');
jest.mock('hookrouter');

describe('SignInCallbackView', () => {
  it(`should render spinner icon by default`, () => {
    // noinspection JSUnresolvedVariable
    UserService.getUser = jest.fn(async () =>
      new Promise(resolve => {
          setTimeout(() => {
            resolve(userData);
          }, 1000);
        }
      ));
    const { getByTestId } = render(<UserInfoProvider><SignInCallbackView/></UserInfoProvider>);
    const elem = getByTestId(TestIds.SIGN_IN_CALLBACK_ARTICLE_ID);
    expect(elem).toBeInTheDocument();
  });

  it(`should navigate to home page when fetching successful`, async () => {
    let userServiceMock = UserService.getUser.mockResolvedValueOnce(userData);
    hookrouter.navigate = jest.fn();
    render(<UserInfoProvider><SignInCallbackView/></UserInfoProvider>);
    await waitFor(() => expect(userServiceMock).toHaveBeenCalled());
    await (() => expect(hookrouter.navigate).toHaveBeenCalledWith(Paths.HOME_PATH));
  });
});