import { PeopleDetailChat } from "./PeopleDetailChat";
import PeopleDetailHeader from "./PeopleDetailHeader";
import {PeopleDetailSidebar}  from "./PeopleDetailSidebar";
import { PeopleDetailInfo } from "./PeopleDetailInfo";
import { Grid } from "semantic-ui-react";
import React from 'react';
import { connect } from 'react-redux';
 
const mapState = (state,ownProps) => {
    const peopleId = ownProps.match.params.id;

    let people= {

    };

    if(peopleId && state.people.length > 0){
        people = state.people.filter(people => people.id === peopleId)[0];
    }

    return {people};
}

const PeopleDetailPage = ({people})  => {

    return (
        <Grid>
            <Grid.Column width={10}>
                <PeopleDetailHeader people={people} />
                <PeopleDetailInfo people={people} />
                <PeopleDetailChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <PeopleDetailSidebar address={people.address} />
            </Grid.Column>
        </Grid>
    )
};


export default connect(mapState)(PeopleDetailPage);