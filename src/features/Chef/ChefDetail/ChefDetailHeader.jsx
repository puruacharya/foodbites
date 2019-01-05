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
                <Image src={chef.photoURL} alt="pic" fluid style={chefImageStyle} size="medium" centered/>
        
                <Segment basic style={chefImageTextStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <Header
                          size="medium"
                        
                          style={{ color: 'black' }}
                        />
                        <h1 style={{color:'black'}}>{chef.fname} {chef.lname}</h1>
                   
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Segment>
        
              <Segment attached="bottom">
                <Button as={Link} to={`/createchef/${chef.id}`}color="orange" floated="right">
                  Manage Chef
                </Button>
              </Segment>
            </Segment.Group>
    );
};

export default ChefDetailHeader;
