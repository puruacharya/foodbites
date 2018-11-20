import React from 'react';
import { Segment, Image, Item, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const dishImageStyle = {
    filter: 'brightness(30%)'
};

const dishImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};
const DishDetailHeader = ({dish}) => {
    return (
           <Segment.Group>
              <Segment basic attached="top" style={{ padding: '0' }}>
                <Image src='{dish.hostPhotoURL}' alt="pic" fluid style={dishImageStyle}/>
        
                <Segment basic style={dishImageTextStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <Header
                          size="huge"
                          content={dish.title}
                          style={{ color: 'black' }}
                        />
                        <p>{dish.category}</p>
                        <p style={{color:'black'}}>
                          Quantity <strong>{dish.quantity}</strong>
                        </p>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Segment>
        
              <Segment attached="bottom">
                <Button>Add to Cart</Button>
                <Button color="teal">Add to Wishlist</Button>
        
                <Button as={Link} to={`/createdish/${dish.id}`}color="orange" floated="right">
                  Manage Dish
                </Button>
              </Segment>
            </Segment.Group>
    );
};

export default DishDetailHeader;
