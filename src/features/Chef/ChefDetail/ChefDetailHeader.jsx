import React from 'react';
import { Segment, Image, Item, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const chefImageStyle = {
    filter: 'brightness(30%)'
};

const chefImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};
const ChefDetailHeader = ({chef}) => {
    return (
           <Segment.Group>
              <Segment basic attached="top" style={{ padding: '0' }}>
                <Image src='{chef.hostPhotoURL}' alt="pic" fluid style={chefImageStyle}/>
        
                <Segment basic style={chefImageTextStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <Header
                          size="huge"
                          content={chef.title}
                          style={{ color: 'black' }}
                        />
                        <p>{chef.category}</p>
                        <p style={{color:'black'}}>
                          Quantity <strong>{chef.quantity}</strong>
                        </p>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Segment>
        
              <Segment attached="bottom">
                <Button>Add to Cart</Button>
                <Button color="teal">Add to Wishlist</Button>
        
                <Button as={Link} to={`/createchef/${chef.id}`}color="orange" floated="right">
                  Manage Dish
                </Button>
              </Segment>
            </Segment.Group>
    );
};

export default ChefDetailHeader;
