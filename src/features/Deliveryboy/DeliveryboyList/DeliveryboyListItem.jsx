import React, { Component } from 'react';
import { Segment, Item, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { format } from 'date-fns';
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
                <Item.Header as="a">{dboy.fname} {dboy.lname} </Item.Header>
                <Item.Description>
                
                  <p><a> Salary </a>: {dboy.salary}</p>
                  <p><a> Address  </a>: <i>{dboy.address}, {dboy.city}, {dboy.state}, {dboy.country}</i></p>

                  <p><a> Phone </a>: {dboy.phone}</p>

                  <p><a> Gender </a>: {dboy.gender}</p>

                  <p><a> Nationality </a>: {dboy.nationality}</p>
                  <p> <a>DOB </a>: {format(dboy.DOB.toDate(), 'dddd Do MMMM')}</p>
                  
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