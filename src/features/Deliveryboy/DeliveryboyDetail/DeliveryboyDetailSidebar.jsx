import React from 'react';
import { Segment, Grid, Icon, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const DeliveryboyDetailSidebar = ({dboy}) => {
    return (
           <Segment.Group>
              
            

             <Segment attached="top">
                  <Grid>
                      <Grid.Column width={1}>
                          <Icon size="large" color="teal" name="mail" />
                      </Grid.Column>
                      <Grid.Column width={15}>
                          <a>{dboy.email}</a>
                      </Grid.Column>
                  </Grid>
              </Segment>
              <Segment attached="bottom">
                  <Grid>
                      <Grid.Column width={1}>
                          <Icon size="large" color="teal" name="phone" />
                      </Grid.Column>
                      <Grid.Column width={15}>
                          <a>{dboy.phone}</a>
                      </Grid.Column>
                  </Grid>
              </Segment>
          
            </Segment.Group>
    );
};

export default DeliveryboyDetailSidebar;
