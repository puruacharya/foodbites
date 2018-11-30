import { WaiterDetailChat } from "./WaiterDetailChat";
import WaiterDetailHeader from "./WaiterDetailHeader";
import {WaiterDetailSidebar}  from "./WaiterDetailSidebar";
import { WaiterDetailInfo } from "./WaiterDetailInfo";
import { Grid } from "semantic-ui-react";
import React from 'react';
import { connect } from 'react-redux';
 
const mapState = (state,ownProps) => {
    const waiterId = ownProps.match.params.id;

    let waiter = {

    };

    if(waiterId && state.waiter.length > 0){
        waiter = state.waiter.filter(waiter => waiter.id === waiterId)[0];
    }

    return {waiter};
}

const WaiterDetailPage = ({waiter})  => {

    return (
        <Grid>
            <Grid.Column width={10}>
                <WaiterDetailHeader waiter={waiter} />
                <WaiterDetailInfo waiter={waiter} />
                <WaiterDetailChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <WaiterDetailSidebar description={waiter.description} />
            </Grid.Column>
        </Grid>
    )
};


export default connect(mapState)(WaiterDetailPage);