import React from 'react';
import { Segment, Image, Item, Header, Button } from 'semantic-ui-react';
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
export const DishDetailHeader = () => {
    return (
           <Segment.Group>
              <Segment basic attached="top" style={{ padding: '0' }}>
                <Image src="/assets/categoryImages/drinks.jpg" fluid style={dishImageStyle}/>
        
                <Segment basic style={dishImageTextStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <Header
                          size="huge"
                          content="Event Title"
                          style={{ color: 'white' }}
                        />
                        <p>Event Date</p>
                        <p>
                          Hosted by <strong>Hosted by</strong>
                        </p>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Segment>
        
              <Segment attached="bottom">
                <Button>Cancel My Place</Button>
                <Button color="teal">JOIN THIS EVENT</Button>
        
                <Button color="orange" floated="right">
                  Manage Event
                </Button>
              </Segment>
            </Segment.Group>
    );
};

//export default DishDetailHeader;
