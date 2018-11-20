import React, { Component } from 'react';
import HomePage from '../../features/Home/HomePage';
import NavBar from '../../features/Nav/NavBar/NavBar';
import ChefForm from '../../features/Chef/ChefForm/ChefForm';
import DishDashboard from '../../features/Dishes/DishDashboard/DishDashboard';
import SettingDashboard from '../../features/user/Settings/SettingDashboard';
import {Container} from 'semantic-ui-react';
import {Route , Switch} from 'react-router-dom';
import TestComponent from '../../features/testarea/TestComponent';
import PeopleDashboard from '../../features/People/PeopleDashboard/PeopleDashboard';
import DishDetailPage from '../../features/Dishes/DishDetail/DishDetailPage';
import PeopleDetailPage from '../../features/People/PeopleDetail/PeopleDetailPage';
import DishForm from '../../features/Dishes/DishForm/DishForm';
import ChefDashboard from '../../features/Chef/ChefDashboard/ChefDashboard';
import ChefDetailPage from '../../features/Chef/ChefDetail/ChefDetailPage';
import DeliveryboyDashboard from '../../features/Deliveryboy/DeliveryboyDashBoard/DeliveryboyDashBoard';
import DeliveryboyDetailPage from '../../features/Deliveryboy/DeliveryboyDetail/DeliveryboyDetailPage';
import DishFormnew from '../../features/Dishes/DishForm/DishFormnew';
//import ChefForm from '../../features/Chef/ChefForm/ChefForm';
import ModalManager from '../../features/modals/ModalManager';
class App extends Component {
  render() {
    return (
        <div>
          <ModalManager />
          <Switch>
           <Route exact path='/' component={HomePage}/>
          </Switch>
        
        <Route path="/(.+)" render={()=> (
          <div>   
            <NavBar/>
        
          
            <Container className="main">
              <Switch>
                
                <Route path='/dishdashboard' component={DishDashboard}/>
                <Route path='/createchef' component={ChefForm}/> 
                <Route path='/settings' component={SettingDashboard}/>
                <Route path='/testpage' component={TestComponent}/>
                <Route path='/people' component = {PeopleDashboard} />
                <Route path='/dish/:id' component = {DishDetailPage} />
                <Route path="/createdish/:id" component={DishForm} />
                <Route path='/people/:id' component = {PeopleDetailPage} />
                <Route path='/chefdashboard' component = {ChefDashboard} />
                <Route path='/chef/:id' component = {ChefDetailPage} />
                <Route path='/dboydashboard' component = {DeliveryboyDashboard} />
                <Route path='/dboy/:id' component = {DeliveryboyDetailPage} />
                <Route path='/createdish' component={DishFormnew} />
                <Route path='/createchef' component={ChefForm} />
                {/* <Route path = "/createpeople" component={PeopleFormNew} /> */}
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




