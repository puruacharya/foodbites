import { ChefDetailChat } from "./ChefDetailChat";
import ChefDetailHeader from "./ChefDetailHeader";
import { ChefDetailSidebar } from "./ChefDetailSidebar";
import { ChefDetailInfo } from "./ChefDetailInfo";
import { Grid } from "semantic-ui-react";
import React from 'react';
import { connect } from 'react-redux';
 
const mapState = (state,ownProps) => {
    const chefId = ownProps.match.params.id;

    let chef = {

    };

    if(chefId && state.chef.length > 0){
        chef = state.chef.filter(chef => chef.id === chefId)[0];
    }

    return {chef};
};

const ChefDetailPage = ({chef})  => {

    return (
        <Grid>
            <Grid.Column width={10}>
                <ChefDetailHeader chef={chef} />
                <ChefDetailInfo chef={chef} />
                <ChefDetailChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <ChefDetailSidebar description={chef.address} />
            </Grid.Column>
        </Grid>
    );
};


export default connect(mapState)(ChefDetailPage);