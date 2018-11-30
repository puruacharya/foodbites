import React, { Component } from 'react';
import { Segment, Item, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
class DeliveryboyListItem extends Component {
  render() {
    const {dboy, deleteDboy } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="small" circular src={dboy.photoURL} />
              <Item.Content>
                <Item.Header as="a">{dboy.title}</Item.Header>
                <Item.Description>
                  Quantity <a>{dboy.quantity}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
 
        <Segment clearing>
        <span>{dboy.description}</span>
        <Button onClick={deleteDboy(dboy.id)} as="a" color="red" floated="right" content="Delete" />
        <Button as={Link} to={`/dboy/${dboy.id}`}color="teal" floated="right" content="View" />
          </Segment>
      </Segment.Group>
    );
  }
}

export default DeliveryboyListItem;