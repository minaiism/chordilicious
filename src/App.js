import React from 'react';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Footer from './components/Footer/Footer';
import './App.css';
import FBUserProfile from './components/FBUserProfile/FBUserProfile';

const App = () => (
  <div className={App}>
    <NavBar />
    {/*<SearchBar />*/}
    <FBUserProfile />
    {/*<Footer />*/}
  </div>
);

export default App;
