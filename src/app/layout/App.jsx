import React, { Component } from 'react';
import HomePage from '../../features/Home/HomePage';
import NavBar from '../../features/Nav/NavBar/NavBar';
import SearchBar from '../../features/Search/SearchBar/SearchBar';
import DishDashboard from '../../features/Dishes/DishDashboard/DishDashboard';
import SettingDashboard from '../../features/user/Settings/SettingDashboard';
//import HomePage from '../../features/Home/HomePage';

//import {Grid } from 'semantic-ui-react';
import {Container} from 'semantic-ui-react';
import {Route , Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <div>
          <Switch>
           <Route exact path='/' component={HomePage}/>
          </Switch>
        
        <Route path="/(.+)" render={()=> (
          <div>   
            <NavBar/>
        
          
            <Container className="main">
              <Switch>
                
                <Route path='/dishdashboard' component={DishDashboard}/>
                <Route path='/signup' component={SearchBar}/> 
                <Route path='/settings' component={SettingDashboard}/>
                <Route path='/settings' component={SettingDashboard}/>

              </Switch>
            </Container>
          </div>
           )}
          />
        </div>  
     );
  }
}

export default App;
