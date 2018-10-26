import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import PeopleList from '../PeopleList/PeopleList';
import PeopleForm from '../../Forms/Form/PeopleForm';
import cuid from 'cuid';


const People = [
  {
    id: '1',
    name: 'Raj Singh',

    Nationality: 'Indian',
    dob: '20/05/1996',
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
  }

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleUpdatePeople = (updatedPeople) => {
    this.setState({
      People: this.state.People.map(People => {
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

  handleOpenEvent = (peopleToOpen) => () => {
    this.setState({
      selectedPeople: peopleToOpen,
      isOpen: true
    })
  } 


  handleCreatePeople = (newPeople) =>{
    newPeople.id = cuid();
    //newPeople.PhotoURL = '../../../public/assets/logo.png';
    const updatedPeople = [ ...this.state.People, newPeople];
    this.setState({
      people: updatedPeople,
      isOpen: false
    })
  }

  handleDeletePeople = (peopleId) => () => {
    const updatedPeople = this.state.People.filter(p => p.id !== peopleId);
    this.setState({
      People: updatedPeople
    })
  }


  render() {
    const {selectedPeople} = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <PeopleList deletePeople={this.handleDeletePeople} People={this.state.People} onPeopleOpen={this.handleOpenPeople }/>
        </Grid.Column>
        <Grid.Column width={6}>
          <Button positive content='Sign Up' onClick={this.handleFormOpen} />
          {this.state.isOpen && <PeopleForm updatePeople={this.handleUpdatePeople} selectedPeople={selectedPeople} handleCancel={this.handleCancel} createPoeple={this.handleCreatePeople}/>}
        </Grid.Column>

      </Grid>
    );
  }
}

export default PeopleDashboard;