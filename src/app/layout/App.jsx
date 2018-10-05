import React, { Component } from 'react';
import NavBar from '../../features/Nav/NavBar/NavBar';
import SearchBar from '../../features/Search/SearchBar/SearchBar';
import DishDashboard from '../../features/Dishes/DishDashboard/DishDashboard';

class App extends Component {
  render() {
    return (
        <div>
        
          <NavBar/>
          <SearchBar/>  
          <DishDashboard/>
        </div>
     );
  }
}

export default App;
