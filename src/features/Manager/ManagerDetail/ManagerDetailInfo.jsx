import React from 'react';
import { Segment,Grid, Icon, Button } from 'semantic-ui-react';
export const ManagerDetailInfo = ({manager}) => {
  return (
       <Segment.Group>
          <Segment attached>
            <Grid verticalAlign="middle">
              {manager.gender === 'Male' && <Grid.Column width={1}>
                <Icon name="male" size="large" color="teal" />
              </Grid.Column> }
              {manager.gender === 'Female' && <Grid.Column width={1}>
                <Icon name="female" size="large" color="teal" />
              </Grid.Column> }
              <Grid.Column width={15}>
                <p>{manager.mstatus}  {manager.gender}</p>
              </Grid.Column>
              
            </Grid>
          </Segment>
          <Segment attached>
            <Grid verticalAlign="middle">
              <Grid.Column width={1}>
                <Icon name="birthday" size="large" color="teal" />
              </Grid.Column>
              <Grid.Column width={15}>
              <p style={ {color: 'black'} }>{manager.DOB}</p>
              </Grid.Column>
              
            </Grid>
          </Segment>
          <Segment attached>
            <Grid>
              <Grid.Column width={1}>
                <Icon size="large" color="red" name="marker" />
              </Grid.Column>
              <Grid.Column width={15}>
                <p>{manager.address}, {manager.city}, {manager.state}, {manager.country}</p>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment attached>
            <Grid verticalAlign="middle">
              <Grid.Column width={1}>
                <Icon name="like" size="large" color="teal" />
              </Grid.Column>
              <Grid.Column width={15}>
              <p style={ {color: 'black'} }>{manager.likes}</p>
              </Grid.Column>
              
            </Grid>
          </Segment>
          
        </Segment.Group>
  );
};

//export default DishDetailInfo;
