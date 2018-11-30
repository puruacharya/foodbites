import React, { Component } from 'react';
import { Segment, Item, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
class PeopleListItem extends Component {
  render() {
    const {peoples, deletePeople } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              
              <Item.Content>
                <Item.Header as="a">{peoples.fname} {peoples.lname}</Item.Header>
                <Item.Description>
                  City <a>{peoples.city}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
 
        <Segment clearing>
        <span>{peoples.address}</span>
        <Button onClick={deletePeople(peoples.id)} as="a" color="red" floated="right" content="Delete" />
        <Button as={Link} to={`/people/${peoples.id}`}color="teal" floated="right" content="View" />
          </Segment>
      </Segment.Group>
    );
  }
}

export default PeopleListItem;