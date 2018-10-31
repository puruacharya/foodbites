import React, { Component } from 'react';
import { Segment, Item, Button } from 'semantic-ui-react';
class DishesListItem extends Component {
  render() {
    const {dishes,onDishOpen, deleteDish } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={dishes.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{dishes.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{dishes.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
 
        <Segment clearing>
        <span>{dishes.description}</span>
        <Button onClick={deleteDish(dishes.id)} as="a" color="red" floated="right" content="Delete" />
        <Button onClick={onDishOpen(dishes)} as="a" color="teal" floated="right" content="View" />
          </Segment>
      </Segment.Group>
    );
  }
}

export default DishesListItem;