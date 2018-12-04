import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteDboy } from '../dboyAction';
import DeliveryboyList from '../DeliveryboyList/DeliveryboyList';
import { firestoreConnect } from 'react-redux-firebase'
const mapState = state => ({
  dboy: state.firestore.ordered.deliveryboys
});


const actions = {
  deleteDboy
};

class DeliveryboyDashboard extends Component {
  handleDeleteDboy = (dboyId) => () => {
    this.props.deleteDboy(dboyId);
  };

  render() {
    const { dboy } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <DeliveryboyList deleteDboy={this.handleDeleteDboy} dboy={dboy} />
        </Grid.Column>
        <Grid.Column width={6}>
          
        </Grid.Column>/>
      </Grid>
    );
  }
}

export default connect(mapState, actions)
(firestoreConnect([{ collection:'deliveryboys' }])(DeliveryboyDashboard));