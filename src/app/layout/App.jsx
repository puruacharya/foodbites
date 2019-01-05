import React, { Component } from 'react';
import HomePage from '../../features/Home/HomePage';
import NavBar from '../../features/Nav/NavBar/NavBar';

//import ChefForm from '../../features/Chef/ChefForm/ChefForm';
import DishDashboard from '../../features/Dishes/DishDashboard/DishDashboard';
import SettingDashboard from '../../features/user/Setting/SettingDashboard';
import {Container} from 'semantic-ui-react';
import {Route , Switch} from 'react-router-dom';
import TestComponent from '../../features/testarea/TestComponent';
import PeopleDashboard from '../../features/People/PeopleDashboard/PeopleDashboard';
import DishDetailPage from '../../features/Dishes/DishDetail/DishDetailPage';
import PeopleDetailPage from '../../features/People/PeopleDetail/PeopleDetailPage';
import DishForm from '../../features/Dishes/DishForm/DishForm';
import WaiterFormnew from '../../features/Waiter/WaiterForm/WaiterFormnew';
import ChefDashboard from '../../features/Chef/ChefDashboard/ChefDashboard';
import ChefDetailPage from '../../features/Chef/ChefDetail/ChefDetailPage';
import ChefFormnew from '../../features/Chef/ChefForm/ChefFormnew';
import DeliveryboyDashboard from '../../features/Deliveryboy/DeliveryboyDashboard/DeliveryboyDashboard';
import DeliveryboyDetailPage from '../../features/Deliveryboy/DeliveryboyDetail/DeliveryboyDetailPage';
import ManagerDetailPage from '../../features/Manager/ManagerDetail/ManagerDetailPage';
import PeopleFormnew from '../../features/People/PeopleForm/PeopleFormnew';
import DeliveryboyFormnew from '../../features/Deliveryboy/DeliveryboyForm/DeliveryboyFormnew';
import ModalManager from '../../features/modals/ModalManager';
import WaiterDashboard from '../../features/Waiter/WaiterDashboard/WaiterDashboard';
import ManagerDashboard from '../../features/Manager/ManagerDashboard/ManagerDashboard';
import ManagerFormnew from '../../features/Manager/ManagerForm/ManagerFormnew';
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
                
                <Route path='/settings' component={SettingDashboard}/>
                <Route path='/testpage' component={TestComponent}/>
                
                <Route path='/peopledashboard' component = {PeopleDashboard} />
                <Route path='/chefdashboard' component = {ChefDashboard} />
                <Route path='/dboydashboard' component = {DeliveryboyDashboard} />
                <Route path='/dishdashboard' component={DishDashboard}/>
                <Route path='/waiterdashboard' component={WaiterDashboard}/>
                <Route path='/managerdashboard' component={ManagerDashboard}/>

                <Route path='/dish/:id' component = {DishDetailPage} />
                <Route path='/people/:id' component = {PeopleDetailPage} />
                <Route path='/chef/:id' component = {ChefDetailPage} />
                <Route path='/dboy/:id' component = {DeliveryboyDetailPage} />
                <Route path='/manager/:id' component = {ManagerDetailPage} />
                
                <Route path='/createdboy/:id' component = {DeliveryboyFormnew} />
                <Route path='/createdboy' component = {DeliveryboyFormnew} />
                <Route path="/createdish/:id" component={DishForm} />
                <Route path='/createdish' component={DishForm} />
                <Route path='/createchef/' component={ChefFormnew} />
                <Route path='/createchef/:id' component={ChefFormnew} />
                <Route path='/createpeople/:id' component={PeopleFormnew} />
                <Route path='/createpeople' component={PeopleFormnew}/> 
                <Route path='/createmanager/:id' component={ManagerFormnew} />
                <Route path='/createmanager' component={ManagerFormnew}/> 
                
                <Route path='/createwaiter/:id' component = {WaiterFormnew} />
                <Route path='/createwaiter' component = {WaiterFormnew} />

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




