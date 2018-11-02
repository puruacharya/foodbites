import {DishDetailChat} from "./DishDetailChat";
import { DishDetailHeader } from "./DishDetailHeader";
import { DishDetailSidebar } from "./DishDetailSidebar";
import { DishDetailInfo } from "./DishDetailInfo";
import { Grid } from "semantic-ui-react";
import React, {Component} from 'react';

class DishDetailPage extends Component {
    render(){
        return (
            <Grid>
                <Grid.Column width={10}>
                    <DishDetailHeader />
                    <DishDetailInfo />
                    <DishDetailChat />
                </Grid.Column>
                <Grid.Column width={6}>
                    <DishDetailSidebar />
                </Grid.Column>
            </Grid>
        )
    };
}

export default DishDetailPage;