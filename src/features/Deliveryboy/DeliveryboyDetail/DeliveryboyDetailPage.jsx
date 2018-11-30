import { DeliveryboyDetailChat } from "./DeliveryboyDetailChat";
import DeliveryboyDetailHeader from "./DeliveryboyDetailHeader";
import {DeliveryboyDetailSidebar}  from "./DeliveryboyDetailSidebar";
import { DeliveryboyDetailInfo } from "./DeliveryboyDetailInfo";
import { Grid } from "semantic-ui-react";
import React from 'react';
import { connect } from 'react-redux';
 
const mapState = (state,ownProps) => {
    const dboyId = ownProps.match.params.id;

    let dboy = {

    };

    if(dboyId && state.dboy.length > 0){
        dboy = state.dboy.filter(dboy => dboy.id === dboyId)[0];
    }

    return {dboy};
}

const DeliverboyDetailPage = ({dboy})  => {

    return (
        <Grid>
            <Grid.Column width={10}>
                <DeliveryboyDetailHeader dboy={dboy} />
                <DeliveryboyDetailInfo dboy={dboy} />
                <DeliveryboyDetailChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <DeliveryboyDetailSidebar description={dboy.description} />
            </Grid.Column>
        </Grid>
    )
};


export default connect(mapState)(DeliverboyDetailPage);