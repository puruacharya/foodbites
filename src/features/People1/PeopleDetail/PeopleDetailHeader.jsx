import React from 'react';
import { Segment, Item, Header, Button} from 'semantic-ui-react';
// const chefImageStyle = {
//     filter: 'brightness(30%)'
// };
import { Link } from 'react-router-dom';

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
                
                <Segment basic style={peopleImageTextStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <Header
                          size="huge"
                          content=""

                          style={{ color: 'black' }}
                        />
                        <p>{people.dob}</p>
                        <p style={{color:'black'}}>
                          City <strong>{people.city}</strong>
                        </p>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Segment>
        
              <Segment attached="bottom">
                <Button>Give a like</Button>
                
        
                <Button as={Link} to={`/createpeople/${people.id}`}color="orange" floated="right">
                  Manage Dish
                </Button>
              </Segment>
            </Segment.Group>
    );
};

export default PeopleDetailHeader;
