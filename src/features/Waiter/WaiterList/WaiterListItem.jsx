import React, { Component } from 'react';
import { Segment, Item, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { format } from 'date-fns';
class WaiterListItem extends Component {
  render() {
    const {waiter, deleteWaiter } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="small" circular src={waiter.photoURL} />
              <Item.Content>
                <Item.Header as="a">{waiter.fname} {waiter.lname}</Item.Header>
                <Item.Description>
                
                  <p><a> Salary </a>: {waiter.salary}</p>
                  <p><a> Address  </a>: <i>{waiter.address}, {waiter.city}, {waiter.state}, {waiter.country}</i></p>
                                             <p><a> Gender </a>: {waiter.gender}</p>

                  <p><a> Nationality </a>: {waiter.nationality}</p>
                  <p> <a>DOB </a>: {format(waiter.DOB.toDate(), 'dddd Do MMMM')}</p>
                  <p><a> Gender </a>: {waiter.gender}</p>
                  
                  
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
 
        <Segment clearing>
        <span>{waiter.description}</span>
        <Button onClick={deleteWaiter(waiter.id)} as="a" color="red" floated="right" content="Delete" />
        <Button as={Link} to={`/waiter/${waiter.id}`}color="teal" floated="right" content="View" />
          </Segment>
      </Segment.Group>
    );
  }
}

export default WaiterListItem;