import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteWaiter } from '../waiterAction';
import WaiterList from '../WaiterList/WaiterList';

const mapState = state => ({
  waiter: state.waiter
});

const actions = {
  deleteWaiter
};

class WaiterDashboard extends Component {
  handleDeleteWaiter = (waiterId) => () => {
    this.props.deleteWaiter(waiterId);
  };

  render() {
    const { waiter } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <WaiterList deleteWaiter={this.handleDeleteWaiter} waiter={waiter} />
        </Grid.Column>
        <Grid.Column width={6}>
          
        </Grid.Column>/>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(WaiterDashboard);