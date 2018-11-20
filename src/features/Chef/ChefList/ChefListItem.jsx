import React, { Component } from 'react';
import { Segment, Item, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
class ChefListItem extends Component {
  render() {
    const {chefs, deleteChef } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              
              <Item.Content>
                <Item.Header as="a">{chefs.fname} {chefs.lname}</Item.Header>
                <Item.Description>
                  City <a>{chefs.city}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
 
        <Segment clearing>
        <span>{chefs.address}</span>
        <Button onClick={deleteChef(chefs.id)} as="a" color="red" floated="right" content="Delete" />
        <Button as={Link} to={`/chef/${chefs.id}`}color="teal" floated="right" content="View" />
          </Segment>
      </Segment.Group>
    );
  }
}

export default ChefListItem;