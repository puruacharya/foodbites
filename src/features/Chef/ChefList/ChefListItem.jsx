import React, { Component } from 'react';
import { Segment, Item, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { format } from 'date-fns';
class ChefListItem extends Component {
  render() {
    const {chef, deleteChef } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="small" circular src={chef.photoURL} />
              <Item.Content>
                <Item.Header as="a">{chef.fname} {chef.lname}</Item.Header>

                <Item.Description>
                <span>DOB : {format(chef.DOB.toDate(), 'dddd Do MMMM YYYY')}</span>
<p>Salary: {chef.salary}</p>
<p>Category: {chef.category}</p>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
 
        <Segment clearing>
        <span>{chef.description}</span>
        <Button onClick={deleteChef(chef.id)} as="a" color="red" floated="right" content="Delete" />
        <Button as={Link} to={`/chef/${chef.id}`}color="teal" floated="right" content="View" />
          </Segment>
      </Segment.Group>
    );
  }
}

export default ChefListItem;
