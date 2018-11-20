import React from 'react';
import {Link} from 'react-router-dom'
import { Segment, Item, Header, Button }   from 'semantic-ui-react';
// const chefImageStyle = {
//     filter: 'brightness(30%)'
// };

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
                
                <Segment basic style={chefImageTextStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <Header
                          size="huge"
                          content=""

                          style={{ color: 'black' }}
                        />
                        <p>{chef.dob}</p>
                        <p style={{color:'black'}}>
                          City <strong>{chef.city}</strong>
                        </p>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Segment>
        
              <Segment attached="bottom">
                <Button>Give a like</Button>
                
        
                <Button color="orange" floated="right" as={Link} to={`/createchef/${chef.id}`}>
                  Manage Chef
                </Button>
              </Segment>
            </Segment.Group>
    );
};

export default ChefDetailHeader;
