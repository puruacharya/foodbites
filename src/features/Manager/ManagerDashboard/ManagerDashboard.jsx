import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteManager } from '../managerAction';
import ManagerList  from '../ManagerList/ManagerList';
import { firestoreConnect } from 'react-redux-firebase'
const mapState = state => ({
  manager: state.firestore.ordered.manager
});

const actions = {
  deleteManager
};

class ManagerDashboard extends Component {
  handleDeleteManager = managerId => () => {
    this.props.deleteManager(managerId);
  };

  render() {
    const { manager } = this.props;
    return (
      <Grid>
        <Grid.Column width={3}>
          
        </Grid.Column>/>
        <Grid.Column width={10}>
          <ManagerList deleteManager={this.handleDeleteManager} manager={manager} />
        </Grid.Column>
        <Grid.Column width={3}>
          
        </Grid.Column>/>
      </Grid>
    );
  }
}


export default connect(mapState, actions)
(firestoreConnect([{ collection:'manager' }])(ManagerDashboard));