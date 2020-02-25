import React from 'react';
import MainView from './components/Views/MainView';
import { UserInfoProvider } from './components/Context/Context';

const App = () => (
  <UserInfoProvider>
    <MainView/>
  </UserInfoProvider>
);

export default App;
