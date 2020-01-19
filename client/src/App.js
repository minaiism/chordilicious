import React from 'react';
import MainView from './components/Views/MainView';
import { useUserContext } from './components/Context/Context';


const App = () => (
  <useUserContext.Provider>
    <MainView/>
  </useUserContext.Provider>
);

export default App;
