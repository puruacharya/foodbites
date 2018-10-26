import React, { Component } from 'react';
import { Grid} from 'semantic-ui-react';
import DishesList from '../DishesList/DishesList';


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

  
//  super(props);
  state={
    dish: DishDash,
    isOpen: false,
    //selectedDish: 
  };
  //this.handleFormOpen = this.handleFormOpen.bind(this);
  //this.handleCancel = this.handleCancel.bind(this);

handleFormOpen = () =>{
  this.setState({
    isOpen:true
  });
}

handleCancel = () => {
  this.setState({
    isOpen: false
  });
};

handleCreateUser = (newUser) => {

}



  render() {
    return (
      <Grid>
        <Grid.Column width={14}>
          <DishesList dishes={DishDash} />
        </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>

      </Grid>
    );
  }
}

export default DishDashboard;