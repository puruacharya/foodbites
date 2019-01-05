import React from 'react';
import { Segment,Grid, Icon } from 'semantic-ui-react';
export const ChefDetailInfo = ({chef}) => {
  return (
       <Segment.Group>
          <Segment attached>
            <Grid verticalAlign="middle">
              <Grid.Column width={1}>
                <Icon size="large" color="teal" name="info" />
              </Grid.Column>
              <Grid.Column width={15}>
                <span>{chef.category}</span>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment attached>
            <Grid verticalAlign="middle">
              <Grid.Column width={1}>
                <Icon name="flag" size="large" color="teal" />
              </Grid.Column>
              <Grid.Column width={15}>
                <span>{chef.nationality}</span>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment attached>
            <Grid verticalAlign="middle">
              <Grid.Column width={1}>
                <Icon name="marker" size="large" color="teal" />
              </Grid.Column>
              <Grid.Column width={15}>
                <span>{chef.address}, {chef.city}, {chef.state}, {chef.country}</span>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment attached>
            <Grid verticalAlign="bottom">
              <Grid.Column width={1}>
                <Icon name="money" size="large" color="teal" />
              </Grid.Column>
              <Grid.Column width={15}>
                <span>{chef.salary}</span>
              </Grid.Column>
            </Grid>
          </Segment>
        </Segment.Group>
  );
};

