import React from 'react';
import MainView from './components/Views/MainView';
import ContextProvider from './components/Context/ContextProvider';

const App = () => (
    <ContextProvider>
            <MainView/>
    </ContextProvider>
);

export default App;
