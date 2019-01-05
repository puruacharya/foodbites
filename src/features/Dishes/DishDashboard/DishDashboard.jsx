import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getDishForDashboard } from '../dishAction';
import DishesList from '../DishesList/DishesList';
import { firestoreConnect } from 'react-redux-firebase';

const mapState = state => ({
  dishes: state.firestore.ordered.dishes
});



class DishDashboard extends Component {
  handleDeleteDish = dishId => () => {
    this.props.deleteDish(dishId);
  };

  render() {
    const { dishes } = this.props;
    return (
      <Grid>
        <Grid.Column width ={3}>

        </Grid.Column>
        <Grid.Column width={10}>
          <DishesList deleteDish={this.handleDeleteDish} dishes={dishes} />
        </Grid.Column>
        <Grid.Column width={3}>
          
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, null)
(firestoreConnect([{ collection:'dishes' }])(DishDashboard));