import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteDish } from '../dishAction';
import DishesList from '../DishesList/DishesList';

const mapState = state => ({
  dishes: state.dish
});

const actions = {
  deleteDish
};

class DishDashboard extends Component {
  handleDeleteDish = dishId => () => {
    this.props.deleteDish(dishId);
  };

  render() {
    const { dishes } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <DishesList deleteDish={this.handleDeleteDish} dishes={dishes} />
        </Grid.Column>
        <Grid.Column width={6}>
          
        </Grid.Column>/>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(DishDashboard);