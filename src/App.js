import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <SearchBar/>
            </div>
        );
    }
}

export default App;