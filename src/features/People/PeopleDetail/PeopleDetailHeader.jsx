import React from 'react';
import { Segment, Image, Item, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const peopleImageStyle = {
    filter: 'brightness(30%)'
};

const peopleImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};
const PeopleDetailHeader = ({people}) => {
    return (
           <Segment.Group>
              <Segment basic attached="top" style={{ padding: '0' }}>
                <Image src={people.photoURL} circular size='medium'  style={peopleImageStyle}/>
        
                <Segment basic style={peopleImageTextStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <Header
                          size="huge"
                          
                         
                        />
                        <h1 style={{ color: 'black' }}>{people.fname} {people.lname}</h1>
                        
                        </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Segment>
        
              <Segment attached="bottom">
                <Button>Message</Button>
                
        
                <Button as={Link} to={`/createpeople/${people.id}`}color="orange" floated="right">
                  Manage People
                </Button>
              </Segment>
            </Segment.Group>
    );
};

export default PeopleDetailHeader;
