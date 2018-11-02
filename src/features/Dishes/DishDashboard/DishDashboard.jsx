import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import DishesList from '../DishesList/DishesList';
import { createDish, deleteDish, updateDish } from '../dishAction';
import DishForm from '../DishForm/DishForm';
import cuid from 'cuid';




const mapState = (state) => ({
  dishes: state.dish
})
const actions = {
  createDish,
  updateDish,
  deleteDish
}

class DishDashboard extends Component {

  state = {

    isOpen: false,
    selectedDish: null
  };


  handleFormOpen = () => {

    if (this.state.isOpen === false) {

      this.setState({
        isOpen: true
      })
    }
    else {
      this.setState({
        isOpen : false,
        selectedDish : null
      })

    }
  };


handleCancel = () => {
  this.setState({
    isOpen: false,
    selectedDish:null
  });
};

handleDeleteDish = (dishId) => () => {
  this.props.deleteDish(dishId);
};
handleOpenDish = (dishToOpen) => () => {
  this.setState({
    selectedDish: dishToOpen,
    isOpen: true
  })
}

handleUpdateDish = (updatedDish) => {
  this.props.updateDish(updatedDish)
  this.setState({
    isOpen: false,
    selectedDish: null
  });
};
handleCreateDish = (newDish) => {
  newDish.id = cuid();
 // const updatedDish = [...this.state.dish, newDish];
 this.props.createDish(newDish)
 this.setState({
    isOpen: false,
    selectedDish:null
   
  })
}



render() {
  const { dishes } = this.props;
  const { selectedDish } = this.state;
  return (

    <Grid>
      <Grid.Column width={10}>
        <DishesList dishes={dishes} deleteDish={this.handleDeleteDish} onDishOpen={this.handleOpenDish} />
      </Grid.Column>
      <Grid.Column width={6}>
        <Button positive content="Add New Dish" onClick={this.handleFormOpen}>

        </Button>
        {this.state.isOpen && < DishForm dishes={dishes} createDish={this.handleCreateDish} selectedDish={selectedDish} handleCancel={this.handleCancel} updateDish={this.handleUpdateDish} />}
      </Grid.Column>

    </Grid>
  );
}
}

export default connect(mapState, actions)(DishDashboard);