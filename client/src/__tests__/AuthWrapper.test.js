import '@testing-library/jest-dom';
import React from 'react';
import { render, wait } from '@testing-library/react';
import { TestIds } from '../Constants';
import AuthWrapper from '../components/Layout/Auth/AuthWrapper';
import { UserInfoProvider } from '../components/Context';
import userData from './apiMocks/user-data';
import { ApiClient } from '../services/ApiClient';
import Favorites from '../components/Views/FavoritesView';

jest.mock('../services/ApiClient');

jest.useFakeTimers();

describe('AuthWrapper', () => {
  it(`should render spinner component by default`, () => {
    ApiClient.get = jest.fn(async () =>
      new Promise(resolve => {
          setTimeout(() => {
            resolve({ data: userData });
          }, 1000);
        }
      ));
    const { getByTestId } = render(<UserInfoProvider><AuthWrapper view={<Favorites/>}/></UserInfoProvider>);
    const elem = getByTestId(TestIds.authWrapperSpinnerArticleId);
    expect(elem).toBeInTheDocument();
  });

  it(`should render view`, async () => {
    let apiClientMock = ApiClient.get.mockResolvedValueOnce({ data: userData });
    const { getByTestId } = render(<UserInfoProvider><AuthWrapper view={<Favorites/>}/></UserInfoProvider>);
    await wait(() => expect(apiClientMock).toHaveBeenCalled());
    const elem = getByTestId(TestIds.favoritesViewArticleId);
    expect(elem).toBeInTheDocument();
  });

  it(`should render NoAccessSnackBar when cannot fetch user`, async () => {
    const errorMessage = 'Network Error';
    const apiClientMock = ApiClient.get.mockRejectedValueOnce({ errorMessage });
    const { getByTestId } = render(<UserInfoProvider><AuthWrapper view={<Favorites/>}/></UserInfoProvider>);
    await wait(() => expect(apiClientMock).toHaveBeenCalled());
    expect(getByTestId(TestIds.authWrapperSnackBarArticleId)).toBeInTheDocument();
  });
});