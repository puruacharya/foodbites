import React, { Component } from 'react';
import { Segment, Item, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
class ManagerListItem extends Component {
  render() {
    const {manager, deleteManager } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              
              <Item.Content>
                <Item.Header as="a">{manager.fname} {manager.lname}</Item.Header>
                <Item.Description>
                  City <a>{manager.city}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
 
        <Segment clearing>
        <span>{manager.address}</span>
        <Button onClick={deleteManager(manager.id)} as="a" color="red" floated="right" content="Delete" />
        <Button as={Link} to={`/manager/${manager.id}`}color="teal" floated="right" content="View" />
          </Segment>
      </Segment.Group>
    );
  }
}

export default ManagerListItem;