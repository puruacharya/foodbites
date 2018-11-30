import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { deletePeople } from '../peopleAction';
import PeopleList from '../../People/PeopleList/PeopleList';

const mapState = state => ({
  peoples: state.firestore.ordered.peoples
});

const actions = {
  deletePeople
};

class PeopleDashboard extends Component {
  handleDeletePeople = (peopleId) => () => {
    this.props.deletePeople(peopleId);
  };

  render() {
    const { peoples } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <PeopleList deletePeople={this.handleDeletePeople} people={peoples} />
        </Grid.Column>
        <Grid.Column width={6}>
          
        </Grid.Column>/>
      </Grid>
    );
  }
}

export default connect(mapState, actions)
(firestoreConnect([{ collection:'peoples' }])(PeopleDashboard));