import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { getBasepath } from 'hookrouter';
import { Paths, TestIds } from '../Constants';
import MainView from '../components/Layout/MainView';
import { UserInfoProvider } from '../components/Context';

jest.mock('hookrouter');

describe('MainView', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly with home path', async () => {
    getBasepath.mockReturnValue(Paths.HOME_PATH);
    const { getByTestId } = render(
      <UserInfoProvider>
        <MainView />
      </UserInfoProvider>
    );
    await (() =>
      expect(getByTestId(TestIds.HOME_VIEW_ARTICLE_ID)).toBeInTheDocument());
  });

  it('should render correctly with favorites path', async () => {
    getBasepath.mockReturnValue(Paths.FAVORITES_PATH);
    const { getByTestId } = render(
      <UserInfoProvider>
        <MainView />
      </UserInfoProvider>
    );
    await (() =>
      expect(
        getByTestId(TestIds.FAVORITES_VIEW_ARTICLE_ID)
      ).toBeInTheDocument());
  });

  it('should render correctly with about path', async () => {
    getBasepath.mockReturnValue(Paths.ABOUT_PATH);
    const { getByTestId } = render(
      <UserInfoProvider>
        <MainView />
      </UserInfoProvider>
    );
    await (() =>
      expect(getByTestId(TestIds.ABOUT_VIEW_ARTICLE_ID)).toBeInTheDocument());
  });

  it('should render correctly with userProfile path', async () => {
    render(
      <UserInfoProvider>
        <MainView />
      </UserInfoProvider>
    );
    const { getByTestId } = render(
      <UserInfoProvider>
        <MainView />
      </UserInfoProvider>
    );
    await (() =>
      expect(
        getByTestId(TestIds.USER_ACCOUNT_VIEW_ARTICLE_ID)
      ).toBeInTheDocument());
  });

  it('should render correctly with top path', async () => {
    getBasepath.mockReturnValue(Paths.TOP_PATH);
    const { getByTestId } = render(
      <UserInfoProvider>
        <MainView />
      </UserInfoProvider>
    );
    await (() =>
      expect(getByTestId(TestIds.TOP_VIEW_ARTICLE_ID)).toBeInTheDocument());
  });

  it('should render correctly with signInCallback path', async () => {
    getBasepath.mockReturnValue(Paths.SIGN_IN_CALLBACK_PATH);
    const { getByTestId } = render(
      <UserInfoProvider>
        <MainView />
      </UserInfoProvider>
    );
    await (() =>
      expect(
        getByTestId(TestIds.SIGN_IN_CALLBACK_ARTICLE_ID)
      ).toBeInTheDocument());
  });

  it('should render correctly with lyrics path', async () => {
    getBasepath.mockReturnValue(Paths.LYRICS_PATH);
    const { getByTestId } = render(
      <UserInfoProvider>
        <MainView />
      </UserInfoProvider>
    );
    await (() =>
      expect(getByTestId(TestIds.LYRICS_VIEW_ARTICLE_ID)).toBeInTheDocument());
  });
});
