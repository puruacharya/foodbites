import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

const emptyForm = {
  fname: '',
  lname: '',
  dob: '',
  address: '',
  uname: '',
  pass: ''
}

class PeopleForm extends Component {
  state = {
    people: emptyForm
  };

  

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedPeople !== this.props.selectedPeople) {
      this.setState({
        people: nextProps.selectedPeople || emptyForm
      })
    }
  }
  componentDidMount() {
    if (this.props.selectedPeople !== null) {
      this.setState({
        people: this.props.selectedPeople
      })
    }
  }

  
  onFormSubmit = (ppl) => {
    ppl.preventDefault();
    if (this.state.people.id) {
      this.props.updatePeople(this.state.people);

    } else {
      this.props.createPeople(this.state.people);
    }
  }
  onInputChange = (ppl) => {
    const newPeople = this.state.people;
    newPeople[ppl.target.name] = ppl.target.value;
    this.setState({
      people: newPeople
    })
  }
  render() {
    const { handleCancel } = this.props;
    const { people } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>First Name</label>
            <input name="fname" onChange={this.onInputChange} value={people.fname} placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input name="lname" onChange={this.onInputChange} value={people.lname} placeholder="Last Name" />
          </Form.Field>
          <Form.Field>
            <label>DOB</label>
            <input name="dob" type="date" onChange={this.onInputChange} value={people.dob} />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <input name="address" placeholder="Enter the Address" onChange={this.onInputChange} value={people.address} />
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <input name="uname" placeholder="Enter the Username" onChange={this.onInputChange} value={people.uname} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input name="pass"placeholder="Enter the Password" onChange={this.onInputChange} value={people.pass} />
          </Form.Field>
          <Button positive type="submit" >
            Submit
                </Button>
          <Button onClick={handleCancel} type="button" >Cancel</Button>
        </Form>
      </Segment>

    );
  }
}

export default PeopleForm;