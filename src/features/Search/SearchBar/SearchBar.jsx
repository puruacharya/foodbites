import React, { Component } from 'react';
import {Segment, Form ,Button} from 'semantic-ui-react';

class SearchBar extends Component{
    render(){
        return(
                <Segment>
                  <Form>
                    <Form.Field>
                      <label>First Name</label>
                      <input placeholder="First Name" />
                    </Form.Field>
                    <Form.Field>
                      <label>Last Name</label>
                      <input placeholder="Last Name" />
                    </Form.Field>
                    <Form.Field>
                      <label>DOB</label>
                      <input type="date" />
                    </Form.Field>
                    <Form.Field>
                      <label>Address</label>
                      <input placeholder="Enter the Address" />
                    </Form.Field>
                    <Form.Field>
                      <label>Username</label>
                      <input placeholder="Enter the Username" />
                    </Form.Field>
                    <Form.Field>
                      <label>Password</label>
                      <input placeholder="Enter the Password" />
                    </Form.Field>
                    <Button positive type="submit">
                      Submit
                    </Button>
                    <Button type="button">Cancel</Button>
                  </Form>
                </Segment>

        )
    }
}

export default SearchBar;