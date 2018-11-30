import React from 'react';
import { Segment,Grid, Icon, Button } from 'semantic-ui-react'
export const PeopleDetailInfo = ({people}) => {
  return (
       <Segment.Group>
          <Segment attached>
            <Grid verticalAlign="middle">
              {people.gender === 'Male' && <Grid.Column width={1}>
                <Icon name="male" size="large" color="teal" />
              </Grid.Column> }
              {people.gender === 'Female' && <Grid.Column width={1}>
                <Icon name="female" size="large" color="teal" />
              </Grid.Column> }
              <Grid.Column width={15}>
                <p>{people.mstatus}  {people.gender}</p>
              </Grid.Column>
              
            </Grid>
          </Segment>
          <Segment attached>
            <Grid verticalAlign="middle">
              <Grid.Column width={1}>
                <Icon name="birthday" size="large" color="teal" />
              </Grid.Column>
              <Grid.Column width={15}>
              <p style={ {color: 'black'} }>{people.DOB}</p>
              </Grid.Column>
              
            </Grid>
          </Segment>
          <Segment attached>
            <Grid>
              <Grid.Column width={1}>
                <Icon size="large" color="red" name="marker" />
              </Grid.Column>
              <Grid.Column width={15}>
                <p>{people.address}, {people.city}, {people.state}, {people.country}</p>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment attached>
            <Grid verticalAlign="middle">
              <Grid.Column width={1}>
                <Icon name="like" size="large" color="teal" />
              </Grid.Column>
              <Grid.Column width={15}>
              <p style={ {color: 'black'} }>{people.likes}</p>
              </Grid.Column>
              
            </Grid>
          </Segment>
          
        </Segment.Group>
  );
};

//export default DishDetailInfo;
