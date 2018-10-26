import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

const emptyForm = {
  fname:'',
  lname:'',
  dob:'',
  address:'',
  uname:'',
  pass:''
}

class PeopleForm extends Component {
 state = {
    People: emptyForm
 }
 componentDidMount() {
   if(this.props.selectedPeople !== null){
     this.setState({
       People:this.props.selectedPeople
     })
   }
 }
 componentWillReceiveProps(nextProps){
   if(nextProps.selectedPeople !== this.props.selectedPeople){
     this.setState({
       People : nextProps.selectedPeople || emptyForm
     })
   }
 }
  onFormSubmit = (ppl) => {
    ppl.preventDefault();
    if(this.state.People.id){
      this.props.updatePeople(this.state.People);

    }else{
    this.props.createPeople(this.state.People);
    }
  }
  onInputChage = (ppl) => {
    const People = this.state.People;
    People[ppl.target.name] = ppl.target.value;
    this.setState({
      People : People
    })
  }
  render() {
    const { handleCancel } = this.props;
    const {People} = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>First Name</label>
            <input name="fname" onChange={this.onInputChange} value={People.fname} placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input name="lname" onChange={this.onInputChange} value={People.lname}placeholder="Last Name" />
          </Form.Field>
          <Form.Field>
            <label>DOB</label>
            <input name="dob" type="date" onChange={this.onInputChange} value={People.dob}/>
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <input name="address" placeholder="Enter the Address" onChange={this.onInputChange} value={People.address}/>
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <input name="uname" placeholder="Enter the Username" onChange={this.onInputChange} value={People.uname}/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input name="pass" placeholder="Enter the Password" onChange={this.onInputChange} value={People.pass}/>
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