import React, { Component } from 'react';
import NavBar from '../../features/Nav/NavBar/NavBar';
import SearchBar from '../../features/Search/SearchBar/SearchBar';
import DishDashboard from '../../features/Dishes/DishDashboard/DishDashboard';
import {Grid } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
        <div>
        
          <NavBar/>
          <Grid>
            <Grid.Column width={10}>
              <DishDashboard/>
            </Grid.Column>
             
            <Grid.Column width={6}>
              <SearchBar/> 

            </Grid.Column>
          </Grid>
        </div>
     );
  }
}

export default App;
