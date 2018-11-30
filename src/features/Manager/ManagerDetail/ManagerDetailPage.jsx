import { ManagerDetailChat } from "./ManagerDetailChat";
import ManagerDetailHeader from "./ManagerDetailHeader";
import { ManagerDetailSidebar } from "./ManagerDetailSidebar";
import { ManagerDetailInfo } from "./ManagerDetailInfo";
import { Grid } from "semantic-ui-react";
import React from 'react';
import { connect } from 'react-redux';
 
const mapState = (state,ownProps) => {
    const managerId = ownProps.match.params.id;

    let manager = {

    };

    if(managerId && state.manager.length > 0){
        manager = state.manager.filter(manager => manager.id === managerId)[0];
    }

    return {manager};
};

const ManagerDetailPage = ({manager})  => {

    return (
        <Grid>
            <Grid.Column width={10}>
                <ManagerDetailHeader manager={manager} />
                <ManagerDetailInfo manager={manager} />
                <ManagerDetailChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <ManagerDetailSidebar address={manager.address} />
            </Grid.Column>
        </Grid>
    );
};


export default connect(mapState)(ManagerDetailPage);