import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deletePeople } from '../peopleAction';
import { firestoreConnect } from 'react-redux-firebase'
import  PeopleList  from '../PeopleList/PeopleList'
const mapState = state => ({
  people : state.firestore.ordered.peoples
});

const actions = {
  deletePeople
};

class PeopleDashboard extends Component {
  handleDeletePeople = peopleId => () => {
    this.props.deletePeople(peopleId)
  };

  render() {
    const { people } = this.props;
    return (
      <Grid>
        <Grid.Column width={3}>
          
          </Grid.Column>/>
  
        <Grid.Column width={10}>
          <PeopleList deletePeople={this.handleDeletePeople} people={people} />
        </Grid.Column>
        <Grid.Column width={3}>
          
        </Grid.Column>/>
      </Grid>
    );
  }
}

export default connect(mapState, actions)
(firestoreConnect([{ collection:'peoples' }])(PeopleDashboard));
