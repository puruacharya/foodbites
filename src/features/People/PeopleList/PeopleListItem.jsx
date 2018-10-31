import React, { Component } from 'react';
import { Segment, Item, Button } from 'semantic-ui-react';
class PeopleListItem extends Component {
  render() {
    const { people, onPeopleOpen, deletePeople } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>

              <Item.Content>
                <Item.Header as="a">{people.fname} {people.lname}</Item.Header>

              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>

        <Segment clearing>
          <span>{people.dob}</span>
        </Segment>
        <Button onClick={deletePeople(people.id)} as="a" color="red" floated="right" content="Delete" />
        <Button onClick={onPeopleOpen(people)} as="a" color="teal" floated="right" content="View" />
      </Segment.Group>

    );
  }
}

export default PeopleListItem;