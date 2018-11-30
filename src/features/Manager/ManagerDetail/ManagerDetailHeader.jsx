import React from 'react';
import {Link} from 'react-router-dom';
import { Segment, Item, Header, Button , Image}   from 'semantic-ui-react';
const managerImageStyle = {
    filter: 'brightness(30%)'
};

const managerImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};
const ManagerDetailHeader = ({manager}) => {
    return (
      <Segment.Group>
      <Segment basic attached="top" style={{ padding: '0' }}>
        <Image src={manager.photoURL} circular size='medium'  style={managerImageStyle}/>

        <Segment basic style={managerImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  
                 
                />
                <h1 style={{ color: 'black' }}>{manager.fname} {manager.lname}</h1>
                
                </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button>Message</Button>
        

        <Button as={Link} to={`/createmanager/${manager.id}`}color="orange" floated="right">
          Manage Manager
        </Button>
      </Segment>
    </Segment.Group>

    );
};

export default ManagerDetailHeader;
