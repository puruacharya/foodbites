import { DishDetailChat } from "./DishDetailChat";
import DishDetailHeader from "./DishDetailHeader";
import { DishDetailSidebar } from "./DishDetailSidebar";
import { DishDetailInfo } from "./DishDetailInfo";
import { Grid } from "semantic-ui-react";
import React from 'react';
import { connect } from 'react-redux';
 
const mapState = (state,ownProps) => {
    const dishId = ownProps.match.params.id;

    let dish = {

    };

    if(dishId && state.dish.length > 0){
        dish = state.dish.filter(dish => dish.id === dishId)[0];
    }

    return {dish};
}

const DishDetailPage = ({dish})  => {

    return (
        <Grid>
            <Grid.Column width={10}>
                <DishDetailHeader dish={dish} />
                <DishDetailInfo dish={dish} />
                <DishDetailChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <DishDetailSidebar description={dish.description} />
            </Grid.Column>
        </Grid>
    )
};


export default connect(mapState)(DishDetailPage);