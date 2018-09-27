import React, { Component } from 'react';
import {NavBar} from '../../features/Nav/NavBar/NavBar';
import {SearchBar} from '../../features/Search/SearchBar/SearchBar';


class App extends Component {
  render() {
    return (
        <div>
          <NavBar/>
        
       
          <SeachBar />
        </div>
     );
  }
}

export default App;
