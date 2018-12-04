import React, { Component } from 'react';
import { Segment, Item, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
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
                  Address <a>{waiter.address}</a>
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