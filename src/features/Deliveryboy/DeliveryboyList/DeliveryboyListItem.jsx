import React, { Component } from 'react';
import { Segment, Item, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class DeliveryboyListItem extends Component {
  render() {
    const { dboys, deleteDeliveryboy } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              {/* <Item.Image size="tiny" circular src={people.photoURL} /> */}
              <Item.Content>
                <Item.Header as="a">{dboys.fname} {dboys.lname}</Item.Header>
                <Item.Description>
                  Nationality <a>{dboys.nationality}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>

        <Segment clearing>
          <span>{dboys.dob}</span>
          <Button onClick={deleteDeliveryboy(dboys.id)} as="a" color="red" floated="right" content="Delete" />
          <Button as={Link} to={`/dboy/${dboys.id}`} color="teal" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    );
  }
}

export default DeliveryboyListItem;