import React, { Component } from 'react';
import { Segment, Item, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { format } from 'date-fns';
class PeopleListItem extends Component {
  render() {
    const {people, deletePeople } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="small" circular src={people.photoURL} />
              <Item.Content>
                <Item.Header as="a">{people.fname} {people.lname}</Item.Header>
                <Item.Description>
                 <span>DOB : {format(people.DOB.toDate(), 'dddd Do MMMM')}</span>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
 
        <Segment clearing>
        <span>{people.address} {people.city} {people.state} {people.country} </span>
        <Button onClick={deletePeople(people.id)} as="a" color="red" floated="right" content="Delete" />
        <Button as={Link} to={`/people/${people.id}`}color="teal" floated="right" content="View" />
          </Segment>
      </Segment.Group>
    );
  }
}

export default PeopleListItem;