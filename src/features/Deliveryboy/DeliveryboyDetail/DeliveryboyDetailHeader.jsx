  import React from 'react';
import { Segment, Image, Item, Header, Button } from 'semantic-ui-react';
const deliveryboyImageStyle = {
    filter: 'brightness(30%)'
};

const deliveryboyImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};
const DeliveryboyDetailHeader = ({dboy}) => {
    return (
           <Segment.Group>
              <Segment basic attached="top" style={{ padding: '0' }}>
                <Button ><Image src='{}' alt="pic" fluid style={deliveryboyImageStyle}/>
       </Button>
                <Segment basic style={deliveryboyImageTextStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <Header
                          size="huge"
                          content={dboy.fname  + dboy.lname}
                          style={{ color: 'black' }}
                        />
                        <p>{dboy.dob}</p>
                        <p style={{color:'black'}}>
                          nationality <strong>{dboy.nationality}</strong>
                        </p>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Segment>
        
                        </Segment.Group>
    );
};

export default DeliveryboyDetailHeader;
