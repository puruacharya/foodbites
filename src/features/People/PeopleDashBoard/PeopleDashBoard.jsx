import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import PeopleList from '../PeopleList/PeopleList';
import PeopleForm from '../../Forms/Form/PeopleForm';
import { createPeople, deletePeople, updatePeople } from '../peopleAction';
import cuid from 'cuid';
import { connect } from "react-redux";


const mapState = (state) => ({
  people: state.people
});
const actions = {
  createPeople,
  updatePeople,
  deletePeople
};


class PeopleDashboard extends Component {



  state = {
   
    isOpen: false,
    selectedPeople : null
     
  };

  handleFormOpen = () => {
    this.setState({
      selectedPeople : null,
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false,
      selectedPeople : null
    });
  };

  handleUpdatePeople = (updatedPeople) => {
    this.setState({
      people: this.state.people.map(People => {
        if (People.id === updatedPeople.id) {
          return Object.assign({}, updatedPeople)
        } else {
          return People
        }
      }),
      isOpen: false,
      selectedPeople: null
    })
  }

  handleOpenPeople = (peopleToOpen) => () => {
    this.setState({
      selectedPeople: peopleToOpen,
      isOpen: true
    })
  } 


  handleCreatePeople = (newPeople) => {
    newPeople.id = cuid();
    
    //newPeople.PhotoURL = '../../../public/assets/logo.png';
   this.props.createPeople(newPeople);
    this.setState({
   //   people: updatedPeople,
      isOpen: false
    })
  }

  handleDeletePeople = (PeopleId) => () => {
    this.props.deletePeople(PeopleId);
  };


  render() {
    const {selectedPeople} = this.state;
    const {people} = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <PeopleList deletePeople={this.handleDeletePeople} people={people} onPeopleOpen={this.handleOpenPeople }/>
        </Grid.Column>
        <Grid.Column width={6}>
          <Button positive content='Sign Up' onClick={this.handleFormOpen} /> 
          {this.state.isOpen && <PeopleForm createPeople={this.handleCreatePeople} selectedPeople={selectedPeople} handleCancel={this.handleCancel} updatePoeple={this.handleUpdatePeople}/>}
        </Grid.Column>         

      </Grid>
    );
  }
}

export default connect(mapState,actions)(PeopleDashboard);