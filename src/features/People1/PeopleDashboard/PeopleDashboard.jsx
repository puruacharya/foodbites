import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deletePeople } from '../peopleAction';
//import DishForm from '../DishForm/DishForm';
import PeopleList  from '../PeopleList/PeopleList';

const mapState = state => ({
  peoples: state.people
});

const actions = {
  deletePeople
};

class PeopleDashboard extends Component {
  handleDeletePeople = peopleId => () => {
    this.props.deletePeople(peopleId);
  };

  render() {
    const { peoples } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <PeopleList deletePeople={this.handleDeletePeople} peoples={peoples} />
        </Grid.Column>
        <Grid.Column width={6}>
          
        </Grid.Column>/>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(PeopleDashboard);