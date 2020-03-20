import '@testing-library/jest-dom';
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { TestIds } from '../Constants';
import AuthWrapper from '../components/Layout/Auth/AuthWrapper';
import { UserInfoProvider } from '../components/Context';
import userData from './apiMocks/user-data';
import * as UserService from '../services/UserService';
import Favorites from '../components/Views/FavoritesView';

jest.mock('../services/UserService');

describe('AuthWrapper', () => {
  it(`should render spinner component by default`, () => {
    // noinspection JSUnresolvedVariable
    UserService.getUser = jest.fn(async () =>
      new Promise(resolve => {
          setTimeout(() => {
            resolve(userData);
          }, 1000);
        }
      ));
    const { getByTestId } = render(<UserInfoProvider><AuthWrapper view={<Favorites/>}/></UserInfoProvider>);
    const elem = getByTestId(TestIds.authWrapperSpinnerArticleId);
    expect(elem).toBeInTheDocument();
  });

  it(`should render view`, async () => {
    let userServiceMock = UserService.getUser.mockResolvedValueOnce(userData);
    const { getByTestId } = render(<UserInfoProvider><AuthWrapper view={<Favorites/>}/></UserInfoProvider>);
    await waitFor(() => expect(userServiceMock).toHaveBeenCalled());
    const elem = getByTestId(TestIds.favoritesViewArticleId);
    expect(elem).toBeInTheDocument();
  });

  it(`should render NoAccessSnackBar when cannot fetch user`, async () => {
    const errorMessage = 'Network Error';
    const userServiceMock = UserService.getUser.mockRejectedValueOnce({ errorMessage });
    const { getByTestId } = render(<UserInfoProvider><AuthWrapper view={<Favorites/>}/></UserInfoProvider>);
    await waitFor(() => expect(userServiceMock).toHaveBeenCalled());
    expect(getByTestId(TestIds.authWrapperSnackBarArticleId)).toBeInTheDocument();
  });
});