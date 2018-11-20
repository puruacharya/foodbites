import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteDeliveryboy } from '../deliveryboyAction';
import DeliveryboyList  from '../DeliveryboyList/DeliveryboyList';

const mapState = state => ({
  dboys: state.dboy
});

const actions = {
  deleteDeliveryboy
};

class DeliveryboyDashboard extends Component {
  handleDeleteDeliveryboy = dboyId => () => {
    this.props.deleteDeliveryboy(dboyId);
  };

  render() {
    const { dboys} = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <DeliveryboyList deleteDeliveryboy={this.handleDeleteDeliveryboy} dboys={dboys} />
        </Grid.Column>
        <Grid.Column width={6}>
          
        </Grid.Column>/>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(DeliveryboyDashboard);