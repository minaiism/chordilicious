import React from 'react';
import MainView from './components/Layout/MainView';
import { UserInfoProvider } from './components/Context';

const App = () => (
  <UserInfoProvider>
    <MainView/>
  </UserInfoProvider>
);

export default App;
