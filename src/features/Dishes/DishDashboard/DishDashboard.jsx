import React, { Component } from 'react';
import { Grid, Button} from 'semantic-ui-react';
import DishesList from '../DishesList/DishesList';
import DishForm from '../../Forms/Form/DishForm';

const DishDash = [
  {
    id: '1',
    title: 'Paav Bhaaji',
    
    category: 'Indian',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',

  },
  {
    id: '2',
    title: 'noodles',    
    category: 'Chineese',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    
  }
];

class DishDashboard extends Component {
constructor(props){
  
  super(props);
  this.state={
    dish: DishDash,
    isOpen: false
  };
  this.handleFormOpen = this.handleFormOpen.bind(this);
}
handleFormOpen(){
  this.setState({
    isOpen:true
  });
}

handleCancel = () => {
  this.setState({
    isOpen: false
  });
};



  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <DishesList dishes={DishDash} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button positive content='Sign Up'onClick={this.handleFormOpen}/>
          {this.state.isOpen && <DishForm handleCancel={this.handleCancel}/>} 
        </Grid.Column>

      </Grid>
    );
  }
}

export default DishDashboard;