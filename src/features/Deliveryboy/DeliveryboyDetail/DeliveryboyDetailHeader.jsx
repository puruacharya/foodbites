import React from 'react';
import { Segment, Image, Item, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const dboyImageStyle = {
    filter: 'brightness(30%)'
};

const dboyImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};
const DeliverboyDetailHeader = ({dboy}) => {
    return (
           <Segment.Group>
              <Segment basic attached="top" style={{ padding: '0' }}>
                <Image src={dboy.photoURL} circular size='medium'  style={dboyImageStyle}/>
        
                <Segment basic style={dboyImageTextStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <Header
                          size="huge"
                          
                         
                        />
                        <h1 style={{ color: 'black' }}>{dboy.fname} {dboy.lname}</h1>
                        
                        </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Segment>
        
              <Segment attached="bottom">
                <Button>Message</Button>
                
        
                <Button as={Link} to={`/createdboy/${dboy.id}`}color="orange" floated="right">
                  Manage Delivery boy
                </Button>
              </Segment>
            </Segment.Group>
    );
};

export default DeliverboyDetailHeader;
