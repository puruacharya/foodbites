import React from 'react';
import { Segment,Grid, Icon, Button } from 'semantic-ui-react';
export const DishDetailInfo = ({dish}) => {
  return (
       <Segment.Group>
          <Segment attached="top">
            <Grid>
              <Grid.Column width={1}>
                <Icon size="large" color="teal" name="info" />
              </Grid.Column>
              <Grid.Column width={15}>
                 <p>{dish.Description}</p>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment attached>
            <Grid verticalAlign="middle">
              <Grid.Column width={1}>
                <Icon name="money" size="large" color="teal" />
              </Grid.Column>
              <Grid.Column width={15}>
                <span>{dish.cost}</span>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment attached>
            <Grid verticalAlign="middle">
              <Grid.Column width={1}>
              <a>Type</a>
              </Grid.Column>
              <Grid.Column width={5}>
                <span>{dish.type}</span>
              </Grid.Column>
              
            </Grid>
          </Segment>
        </Segment.Group>
  );
};

//export default DishDetailInfo;
