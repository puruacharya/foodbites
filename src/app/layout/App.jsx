import React, { Component } from 'react';
import HomePage from '../../features/Home/HomePage';
import NavBar from '../../features/Nav/NavBar/NavBar';
import PeopleForm from '../../features/Forms/Form/PeopleForm';
import DishDashboard from '../../features/Dishes/DishDashboard/DishDashboard';
import SettingDashboard from '../../features/user/Settings/SettingDashboard';
import {Container} from 'semantic-ui-react';
import {Route , Switch} from 'react-router-dom';
import TestComponent from '../../features/testarea/TestComponent';
import PeopleDashboard from '../../features/People/PeopleDashBoard/PeopleDashBoard';
import DishDetailPage from '../../features/Dishes/DishDetail/DishDetailPage';


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
                <Route path='/signup' component={PeopleForm}/> 
                <Route path='/settings' component={SettingDashboard}/>
                <Route path='/testpage' component={TestComponent}/>
                <Route path='/people' component = {PeopleDashboard} />
                <Route path='/dish/:id' component = {DishDetailPage} />

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
