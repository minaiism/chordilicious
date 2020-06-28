import '@testing-library/jest-dom';
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { ErrorCodes, TestIds } from '../Constants';
import AuthWrapper from '../components/Layout/Auth/AuthWrapper';
import { UserInfoProvider } from '../components/Context';
import userData from './apiMocks/user-data.json';
import * as UserService from '../services/UserService';
import Favorites from '../components/Views/FavoritesView';

jest.mock('../services/UserService');

describe('AuthWrapper', () => {
  it(`should render spinner component by default`, () => {
    // noinspection JSConstantReassignment
    UserService.getUser = jest.fn(
      async () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(userData);
          }, 1000);
        })
    );
    const { getByTestId } = render(
      <UserInfoProvider>
        <AuthWrapper view={<Favorites />} />
      </UserInfoProvider>
    );
    const elem = getByTestId(TestIds.AUTH_WRAPPER_SPINNER_ARTICLE_ID);
    expect(elem).toBeInTheDocument();
  });

  it(`should render view`, async () => {
    const userServiceMock = UserService.getUser.mockResolvedValueOnce(userData);
    const { getByTestId } = render(
      <UserInfoProvider>
        <AuthWrapper view={<Favorites />} />
      </UserInfoProvider>
    );
    await waitFor(() => expect(userServiceMock).toHaveBeenCalled());
    const elem = getByTestId(TestIds.FAVORITES_VIEW_ARTICLE_ID);
    expect(elem).toBeInTheDocument();
  });

  it(`should render NoAccessSnackBar when cannot fetch user`, async () => {
    const errorMessage = 'Network Error';
    const userServiceMock = UserService.getUser.mockRejectedValueOnce({
      errorMessage,
      code: ErrorCodes.FETCH_USER_ERROR,
    });
    const { getByTestId } = render(
      <UserInfoProvider>
        <AuthWrapper view={<Favorites />} />
      </UserInfoProvider>
    );
    await waitFor(() => expect(userServiceMock).toHaveBeenCalled());
    expect(
      getByTestId(TestIds.AUTH_WRAPPER_SNACKBAR_ARTICLE_ID)
    ).toBeInTheDocument();
  });

  it(`should not render NoAccessSnackBar when cannot fetch user because of the internal issue`, async () => {
    const errorMessage = 'Network Error';
    const userServiceMock = UserService.getUser.mockRejectedValueOnce({
      errorMessage,
      code: ErrorCodes.INTERNAL_SERVER_ERROR,
    });
    const { getByTestId } = render(
      <UserInfoProvider>
        <AuthWrapper view={<Favorites />} />
      </UserInfoProvider>
    );
    await waitFor(() => expect(userServiceMock).toHaveBeenCalled());
    expect(() =>
      getByTestId(TestIds.AUTH_WRAPPER_SNACKBAR_ARTICLE_ID)
    ).toThrowError();
  });

  it(`should render generic error when cannot fetch user because of the internal issue`, async () => {
    const errorMessage = 'Network Error';
    const userServiceMock = UserService.getUser.mockRejectedValueOnce({
      errorMessage,
      code: ErrorCodes.INTERNAL_SERVER_ERROR,
    });
    const { getByTestId } = render(
      <UserInfoProvider>
        <AuthWrapper view={<Favorites />} />
      </UserInfoProvider>
    );
    await waitFor(() => expect(userServiceMock).toHaveBeenCalled());
    expect(
      getByTestId(TestIds.INTERNAL_SERVER_ERROR_ARTICLE_ID)
    ).toBeInTheDocument();
  });
});
