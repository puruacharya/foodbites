import React from 'react';
import { Segment,Grid, Icon, Button } from 'semantic-ui-react'
export const DeliveryboyDetailInfo = ({dboy}) => {
  return (
    <Segment.Group>
    <Segment attached>
      <Grid verticalAlign="middle">
        <Grid.Column width={1}>
          <Icon size="large" color="teal" name="info" />
        </Grid.Column>
        <Grid.Column width={15}>
          <span>{dboy.free}</span>
        </Grid.Column>
      </Grid>
    </Segment>
    <Segment attached>
      <Grid verticalAlign="middle">
        <Grid.Column width={1}>
          <Icon name="flag" size="large" color="teal" />
        </Grid.Column>
        <Grid.Column width={15}>
          <span>{dboy.nationality}</span>
        </Grid.Column>
      </Grid>
    </Segment>
    <Segment attached>
      <Grid verticalAlign="middle">
        <Grid.Column width={1}>
          <Icon name="marker" size="large" color="teal" />
        </Grid.Column>
        <Grid.Column width={15}>
          <span>{dboy.address}, {dboy.city}, {dboy.state}, {dboy.country}</span>
        </Grid.Column>
      </Grid>
    </Segment>
    <Segment attached>
      <Grid verticalAlign="bottom">
        <Grid.Column width={1}>
          <Icon name="money" size="large" color="teal" />
        </Grid.Column>
        <Grid.Column width={15}>
          <span>{dboy.salary}</span>
        </Grid.Column>
      </Grid>
    </Segment>
  </Segment.Group>
  );
};

//export default DishDetailInfo;
