import ChefDetailHeader from "./ChefDetailHeader";
import { ChefDetailInfo } from "./ChefDetailInfo";
import  ChefDetailSidebar  from "./ChefDetailSidebar";
import { Grid } from "semantic-ui-react";
import React, { Component } from 'react';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapState = (state, ownProps ) => {


    let chef = {

    };

    if (state.firestore.ordered.chefs && state.firestore.ordered.chefs[0]) {
        chef = state.firestore.ordered.chefs[0]}

    

    return { 
        chef,
        auth: state.firebase.auth,
        
   
    };
}


class ChefDetailPage extends Component {

    async componentDidMount() {
        const {firestore, match} = this.props;
        await firestore.get(`chefs/${match.params.id}`);
    }
    async componentWillUnmount() {
        const { firestore, match } = this.props;
        await firestore.unsetListener(`chefs/${match.params.id}`);
      }
    render() {
        const {chef} = this.props;
        return (
            <Grid>
                <Grid.Column width ={1}>
                </Grid.Column>
                <Grid.Column width={10}>
                    <ChefDetailHeader chef={chef} />
                    <ChefDetailInfo chef={chef} />
                
                </Grid.Column>
                <Grid.Column width={4}>
                     <ChefDetailSidebar chef={chef} />
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
    )(ChefDetailPage);