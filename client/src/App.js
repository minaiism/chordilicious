import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from "./components/Footer/Footer";
import FacebookProvider from "./components/Facebook/FacebookProvider";

const App = () => (
    <FacebookProvider>
            <NavBar/>
            <Footer/>
    </FacebookProvider>
);

export default App;
