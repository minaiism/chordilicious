import React from 'react';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className={App}>
        <NavBar />
        <SearchBar />
        <Footer />
      </div>
    );
  }
}

export default App;
