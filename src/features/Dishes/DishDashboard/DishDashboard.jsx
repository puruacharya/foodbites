import React, { Component } from 'react';
import { Grid , Button} from 'semantic-ui-react';
import { connect } from 'react-redux';
import DishesList from '../DishesList/DishesList';
import { createDish, deleteDish, updateDish } from '../dishAction';
import  DishForm from '../DishForm/DishForm';
import  cuid  from 'cuid';




// const DishDash = [
//   {
//     id: '1',
//     title: 'Paav Bhaaji',

//     category: 'Indian',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
//     city: 'London, UK',
//     venue: "Tower of London, St Katharine's & Wapping, London",
//     hostedBy: 'Bob',
//     hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',

//   },
//   {
//     id: '2',
//     title: 'noodles',    
//     category: 'Chineese',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
//     city: 'London, UK',
//     venue: 'Punch & Judy, Henrietta Street, London, UK',
//     hostedBy: 'Tom',
//     hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',

//   }
// ];

const mapState = (state) => ({
  dishes: state.dish
})
const actions = {
  createDish,
  updateDish,
  deleteDish
}

class DishDashboard extends Component {


  //  super(props);
  state = {

    isOpen: false,
    selectedDish: null 
  };
  //this.handleFormOpen = this.handleFormOpen.bind(this);
  //this.handleCancel = this.handleCancel.bind(this);

  handleFormOpen = () => {
    this.setState({
      isOpen: true
    });
  }

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleDeleteDish = (dishId) => ()=> {
    this.props.deleteDish(dishId);
  };
  handleOpenDish = (dishToOpen) => () => {
    this.setState({
      selectedDish: dishToOpen,
      isOpen: true
    })
  } 

  handleUpdateDish = updatedDish => {
    this.props.updatedDish(updatedDish)
    this.setState({
      isOpen:false,
      selectedDish:null
    }); 
  };
  handleCreateDish = (newDish)  =>{
    newDish.id = cuid();
    const updatedDish = [ ...this.state.dish, newDish];
    this.setState({
      isOpen:false,
      dish : updatedDish
    })
  }
  


  render() {
    const {dishes} = this.props;
    const {selectedDish }= this.state;
    return (

      <Grid>
        <Grid.Column width={10}>
          <DishesList dishes={dishes} deleteDish={this.handleDeleteDish} onDishOpen={this.handleOpenDish}/>
        </Grid.Column>
        <Grid.Column width={6}>
          <Button onClick ={this.handleFormOpen}>

          </Button>
          {this.state.isOpen && < DishForm dishes={dishes}createDish={this.handleCreateDish} selectedDish={selectedDish} handleCancel={this.handleCancel} updateDish={this.handleUpdateDish}/>}
        </Grid.Column>

      </Grid>
    );
  }
}

export default connect(mapState,actions)(DishDashboard);