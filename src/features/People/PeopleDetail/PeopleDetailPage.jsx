import { PeopleDetailChat } from "./PeopleDetailChat";
import PeopleDetailHeader from "./PeopleDetailHeader";
import {PeopleDetailSidebar}  from "./PeopleDetailSidebar";
import { PeopleDetailInfo } from "./PeopleDetailInfo";
import { Grid } from "semantic-ui-react";
import React ,{Component} from 'react';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';
 
const mapState = (state) => {


    let people = {

    };

    if (state.firestore.ordered.peoples && state.firestore.ordered.peoples[0]) {
        people = state.firestore.ordered.peoples[0]
    }

    return { people };
}


class PeopleDetailPage extends Component {

    async componentDidMount() {
        const {firestore, match} = this.props;
        let people = await firestore.get(`people/${match.params.id}`);
        console.log(people);
    }
    render(){
        const {people} = this.props;
    return (
        <Grid>
            <Grid.Column width={10}>
                <PeopleDetailHeader people={people} />
                <PeopleDetailInfo people={people} />
                <PeopleDetailChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <PeopleDetailSidebar  />
            </Grid.Column>
        </Grid>
    )
    }
};


export default withFirestore(connect(mapState)(PeopleDetailPage));