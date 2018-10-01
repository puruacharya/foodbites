import React, { Component } from 'react';
import {Segment,Item} from 'semantic-ui-react';
class DishesListItem extends Component {
  render() {
      const {dishes} = this.props;
    return (
        //<h1>dishes go here</h1>
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image circular src={dishes.photoURL} />
                        <Item.Content>
                            <Item.Header as='a'>{dishes.title} </Item.Header>

                            
                        </Item.Content>                       

                    </Item>
                </Item.Group>
            </Segment>
        </Segment.Group>
      
    )
  }
}
export default DishesListItem;