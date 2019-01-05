import WaiterDetailHeader from "./WaiterDetailHeader";
import { WaiterDetailInfo } from "./WaiterDetailInfo";
import  WaiterDetailSidebar  from "./WaiterDetailSidebar";
import { Grid } from "semantic-ui-react";
import React, { Component } from 'react';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapState = (state, ownProps ) => {


    let waiter = {

    };

    if (state.firestore.ordered.waiters && state.firestore.ordered.waiters[0]) {
        waiter = state.firestore.ordered.waiters[0]}

    

    return { 
        waiter,
        auth: state.firebase.auth,
        
   
    };
}


class WaiterDetailPage extends Component {

    async componentDidMount() {
        const {firestore, match} = this.props;
        await firestore.get(`waiters/${match.params.id}`);
    }
    async componentWillUnmount() {
        const { firestore, match } = this.props;
        await firestore.unsetListener(`waiters/${match.params.id}`);
      }
    render() {
        const {waiter} = this.props;
        return (
            <Grid>
                <Grid.Column width ={1}>
                </Grid.Column>
                <Grid.Column width={10}>
                    <WaiterDetailHeader waiter={waiter} />
                    <WaiterDetailInfo waiter={waiter} />
                
                </Grid.Column>
                <Grid.Column width={4}>
                     <WaiterDetailSidebar waiter={waiter} />
                </Grid.Column>
                
                <Grid.Column width ={ 1}>
                </Grid.Column>
            </Grid>
        );
    }
}



export default compose(
    withFirestore,
    connect(mapState, null),
    )(WaiterDetailPage);