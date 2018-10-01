import React, { Component } from 'react';
import NavBar from '../../features/Nav/NavBar/NavBar';
import SearchBar from '../../features/Search/SearchBar/SearchBar'
import DishesList from '../../features/Dishes/DishesList/DishesList';

class App extends Component {
  render() {
    return (
        <div>
        
          <NavBar/>
          <SearchBar/>  
          <DishesList/>
        </div>
     );
  }
}

export default App;
