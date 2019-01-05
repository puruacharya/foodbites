import React, { Component } from 'react';
import { Segment, Item, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
class DishesListItem extends Component {
  render() {
    const {dishes, deleteDish } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="small" circular src={dishes.photoURL} />
              <Item.Content>
                <Item.Header as="a">{dishes.title}</Item.Header>
                <Item.Description>
                  <p><a> Type </a>: {dishes.type}</p>
                  <p><a> Cost </a>: {dishes.cost}</p>
                  <p><a>Description  </a>: <i>{dishes.Description}</i></p>
                                             <p><a> Seasonal </a>: {dishes.seasonal}</p>
                  
                  
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
 
        <Segment clearing>
        <span>{dishes.description}</span>
        <Button onClick={deleteDish(dishes.id)} as="a" color="red" floated="right" content="Delete" />
        <Button as={Link} to={`/dish/${dishes.id}`}color="teal" floated="right" content="View" />
          </Segment>
      </Segment.Group>
    );
  }
}

export default DishesListItem;