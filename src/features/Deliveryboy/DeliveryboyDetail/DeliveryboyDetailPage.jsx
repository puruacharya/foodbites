// import DeliveryboyDetailHeader from "./DeliveryboyDetailHeader";
// import {DeliveryboyDetailSidebar}  from "./DeliveryboyDetailSidebar";
// import { DeliveryboyDetailInfo } from "./DeliveryboyDetailInfo";
// import { Grid } from "semantic-ui-react";
// import React ,{Component} from 'react';
// import { connect } from 'react-redux';
 
// const mapState = (state, ownProps ) => {


//     let dboy = {

//     };

//     if (state.firestore.ordered.deliveryboys && state.firestore.ordered.deliveryboys[0]) {
//         dboy = state.firestore.ordered.deliveryboys[0]}

    

//     return { 
//         dboy,
//         auth: state.firebase.auth,
        
   
//     };
// }


// class DeliveryboyDetailPage extends Component {

//     async componentDidMount() {
//         const {firestore, match} = this.props;
//         await firestore.get(`deliveryboys/${match.params.id}`);
//     }

//     async componentWillUnmount() {
//         const { firestore, match } = this.props;
//         await firestore.unsetListener(`deliveryboys/${match.params.id}`);
//       }
//     render() {
//         const {dboy} = this.props;
//         return (
//         <Grid>
//             <Grid.Column width={3}>
//             </Grid.Column>
//             <Grid.Column width={10}>
//                 <DeliveryboyDetailHeader dboy={dboy} />
//                 <DeliveryboyDetailInfo dboy={dboy} />
//             </Grid.Column>
//             <Grid.Column width={3}>
//             </Grid.Column>
            
//         </Grid>

//         )
//     }
// };


// export default connect(mapState)(DeliveryboyDetailPage);



import DeliveryboyDetailHeader from "./DeliveryboyDetailHeader";
import { DeliveryboyDetailInfo } from "./DeliveryboyDetailInfo";
import  DeliveryboyDetailSidebar  from "./DeliveryboyDetailSidebar";
import { Grid } from "semantic-ui-react";
import React, { Component } from 'react';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapState = (state, ownProps ) => {


    let dboy = {

    };

    if (state.firestore.ordered.deliveryboys && state.firestore.ordered.deliveryboys[0]) {
        dboy = state.firestore.ordered.deliveryboys[0]}

    

    return { 
        dboy,
        auth: state.firebase.auth,
        
   
    };
}


class DeliveryboyDetailPage extends Component {

    async componentDidMount() {
        const {firestore, match} = this.props;
        await firestore.get(`deliveryboys/${match.params.id}`);
    }
    async componentWillUnmount() {
        const { firestore, match } = this.props;
        await firestore.unsetListener(`deliveryboys/${match.params.id}`);
      }
    render() {
        const {dboy} = this.props;
        return (
            <Grid>
                <Grid.Column width ={1}>
                </Grid.Column>
                <Grid.Column width={10}>
                    <DeliveryboyDetailHeader dboy={dboy} />
                    <DeliveryboyDetailInfo dboy={dboy} />
                
                </Grid.Column>
                <Grid.Column width={4}>
                     <DeliveryboyDetailSidebar dboy={dboy} />
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
    )(DeliveryboyDetailPage);