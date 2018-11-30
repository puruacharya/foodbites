import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteChef } from '../chefAction';
import ChefList from '../ChefList/ChefList';

const mapState = state => ({
  chef: state.chef
});

const actions = {
  deleteChef
};

class ChefDashboard extends Component {
  handleDeleteChef = chefId => () => {
    this.props.deleteChef(chefId);
  };

  render() {
    const { chef } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <ChefList deleteChef={this.handleDeleteChef} chef={chef} />
        </Grid.Column>
        <Grid.Column width={6}>
          
        </Grid.Column>/>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(ChefDashboard);
