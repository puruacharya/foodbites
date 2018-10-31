import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import PeopleList from '../PeopleList/PeopleList';
import PeopleForm from '../../Forms/Form/PeopleForm';
import cuid from 'cuid';


const People = [
  {
    id: '1',
    fname: 'Raj',
    lname: 'Singh',
    Nationality: 'Indian',
    dob: '05/20/1996',
    city: 'Indore', 
    address: 'I/147 l.i.g. colony',
    uname: 'puru',
    pass: '12345'

  }

];

class PeopleDashboard extends Component {



  state = {
    people: People,
    isOpen: false,
    selectedPeople : null
    //selectedDish: 
  };
  //this.handleFormOpen = this.handleFormOpen.bind(this);
  //this.handleCancel = this.handleCancel.bind(this);

  handleFormOpen = () => {
    this.setState({
      selectedPeople : null,
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
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
    const updatedPeople = [ ...this.state.people, newPeople];
    this.setState({
      people: updatedPeople,
      isOpen: false
    })
  }

  handleDeletePeople = (peopleId) => () => {
    const updatedPeople = this.state.people.filter(p => p.id !== peopleId);
    this.setState({
      people: updatedPeople
    })
  }


  render() {
    const {selectedPeople} = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <PeopleList deletePeople={this.handleDeletePeople} People={this.state.people} onPeopleOpen={this.handleOpenPeople }/>
        </Grid.Column>
        <Grid.Column width={6}>
          <Button positive content='Sign Up' onClick={this.handleFormOpen} /> 
          {this.state.isOpen && <PeopleForm createPeople={this.handleCreatePeople} selectedPeople={selectedPeople} handleCancel={this.handleCancel} updatePoeple={this.handleUpdatePeople}/>}
        </Grid.Column>

      </Grid>
    );
  }
}

export default PeopleDashboard;