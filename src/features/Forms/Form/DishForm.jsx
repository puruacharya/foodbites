import React, { Component } from 'react';
import {Segment, Form ,Button} from 'semantic-ui-react';



class DishForm extends Component{
    render() {
      const {handleCancel} = this.props;
      //const {event} = this.state;
        return(
            <Segment>
              <Form onSubmit={this.onFormSubmit}>
                <Form.Field>
                  <label>First Name</label>
                  <input name="fname" placeholder="First Name" />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input name="lname" placeholder="Last Name" />
                </Form.Field>
                <Form.Field>
                  <label>DOB</label>
                  <input name="dob"type="date" />
                </Form.Field>
                <Form.Field>
                  <label>Address</label>
                  <input name="address" placeholder="Enter the Address" />
                </Form.Field>
                <Form.Field>
                  <label>Username</label>
                  <input name="uname"placeholder="Enter the Username" />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input name="pass"placeholder="Enter the Password" />
                </Form.Field>
                <Button positive type="submit">
                  Submit
                </Button>
                <Button onClick={handleCancel} type="button" >Cancel</Button>
              </Form>
            </Segment>

        );
    }
}

export default DishForm;