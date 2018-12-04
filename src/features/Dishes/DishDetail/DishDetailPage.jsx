import { DishDetailChat } from "./DishDetailChat";
import DishDetailHeader from "./DishDetailHeader";
import { DishDetailSidebar } from "./DishDetailSidebar";
import { DishDetailInfo } from "./DishDetailInfo";
import { Grid } from "semantic-ui-react";
import React, { Component } from 'react';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { firebaseConnect, isEmpty } from 'react-redux-firebase';
import { objectToArray, createDataTree } from '../../../app/common/util/helper';

//import { updateManager } from "../../Manager/managerAction";

import { compose } from 'redux';
import { addDishComment } from '../dishAction';

const actions = {
    addDishComment
}
const mapState = (state, ownProps ) => {


    let dish = {

    };

    if (state.firestore.ordered.dishes && state.firestore.ordered.dishes[0]) {
        dish = state.firestore.ordered.dishes[0]}
         else {
            if (state.firestore.ordered.dishes && state.firestore.ordered.dishes[1])
                dish = state.firestore.ordered.dishes[1]
         }
    

    return { 
        dish,
        auth: state.firebase.auth,
        dishChat : !isEmpty(state.firebase.data.dish_chat) && objectToArray(state.firebase.data.dish_chat[ownProps.match.params.id])
   
    };
}


class DishDetailPage extends Component {

    async componentDidMount() {
        const {firestore, match} = this.props;
        let dish1 = await firestore.get(`dish/${match.params.id}`);
        console.log(dish1);
    }
    render() {
        const {dish, addDishComment, dishChat} = this.props;
        return (
            <Grid>
                <Grid.Column width={10}>
                    <DishDetailHeader dish={dish} />
                    <DishDetailInfo dish={dish} />
                    <DishDetailChat addDishComment={addDishComment} dishId={dish.id} dishChat={dishChat}/>
                </Grid.Column>
                <Grid.Column width={6}>
                    <DishDetailSidebar description={dish.description} />
                </Grid.Column>
            </Grid>
        );
    }
}



export default compose(
    withFirestore,
    connect(mapState, actions),
    firebaseConnect(props => [`dish_chat/${props.match.params.id}`])
  )(DishDetailPage);