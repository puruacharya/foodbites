import React from 'react';
import { Segment, Image, Item, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const waiterImageStyle = {
    filter: 'brightness(30%)'
};

const waiterImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};
const WaiterDetailHeader = ({waiter}) => {
    return (
           <Segment.Group>
              <Segment basic attached="top" style={{ padding: '0' }}>
                <Image src='{waiter.hostPhotoURL}' alt="pic" fluid style={waiterImageStyle}/>
        
                <Segment basic style={waiterImageTextStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <Header
                          size="huge"
                          content={waiter.title}
                          style={{ color: 'black' }}
                        />
                        <p>{waiter.category}</p>
                        <p style={{color:'black'}}>
                          Quantity <strong>{waiter.quantity}</strong>
                        </p>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Segment>
        
              <Segment attached="bottom">
                <Button>Add to Cart</Button>
                <Button color="teal">Add to Wishlist</Button>
        
                <Button as={Link} to={`/createwaiter/${waiter.id}`}color="orange" floated="right">
                  Manage Waiter
                </Button>
              </Segment>
            </Segment.Group>
    );
};

export default WaiterDetailHeader;
