import React from 'react';
import { Segment,Grid, Icon, Button } from 'semantic-ui-react';
export const PeopleDetailInfo = ({people}) => {
  return (
       <Segment.Group>
          <Segment attached="top">
            <Grid>
              <Grid.Column width={1}>
                <Icon size="large" color="teal" name="info" />
              </Grid.Column>
              <Grid.Column width={15}>
                <p>{people.city}</p>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment attached>
            <Grid verticalAlign="middle">
              <Grid.Column width={1}>
                <Icon name="money" size="large" color="teal" />
              </Grid.Column>
              <Grid.Column width={15}>
                <span>{people.dob}</span>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment attached>
            <Grid verticalAlign="middle">
              <Grid.Column width={1}>
                <Icon name="marker" size="large" color="teal" />
              </Grid.Column>
              <Grid.Column width={11}>
                <span>{people.uname}</span>
              </Grid.Column>
              <Grid.Column width={4}>
                <Button color="teal" size="tiny" content="Show Map" />
              </Grid.Column>
            </Grid>
          </Segment>
        </Segment.Group>
  );
};
