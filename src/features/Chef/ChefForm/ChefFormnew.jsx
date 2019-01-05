/* global google */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import moment from 'moment';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import cuid from 'cuid';
import { Segment, Form, Button, Grid, Header, Divider } from 'semantic-ui-react';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate'
import { createChef , updateChef} from '../chefAction';
import TextInput from '../../../app/common/Form/TextInput';
import TextArea from '../../../app/common/Form/TextArea';
import SelectInput from '../../../app/common/Form/SelectInput';

import DateInput from '../../../app/common/Form/DateInput';
const mapState = (state, ownProps) => {
  

  let chef = {};

  if (state.firestore.ordered.chefs && state.firestore.ordered.chefs[0]) {
    chef = state.firestore.ordered.chefs[0];
  }

  return {
    initialValues: chef,
    chef
  };
};
const actions = {
  createChef,
  updateChef
  
};


const validate = combineValidators({
  title: isRequired({message: 'The event title is required'}),
  category: isRequired({message: 'Please provide a category'}),
  description: composeValidators(
    isRequired({message: 'Please enter a description'}),
    hasLengthGreaterThan(4)({message: 'Description needs to be at least 5 characters'})
  )(),//import {PlaceInput} from '../../../app/common/form/PlaceInput';
  price: isRequired('city'),
  quantity: isRequired('venue'),
  photoURL: isRequired('date')
})
const gen = [
  {key: 'Male', text: 'Male', value: 'Male'},
  {key: 'Female', text: 'Female', value: 'Female'},
  {key: "Don't specify", text: "Don't specify", value: "Don't specify"}
];


class ChefFormnew extends Component {

  onFormSubmit = values => {
    values.date = moment(values.date).format()
    if (this.props.initialValues.id) {
      this.props.updateChef(values);
      this.props.history.goBack();
    } else {
      const newChef = {
        ...values,
        id: cuid(),
        photoURL: '/assets/user.png',
        
      };
      this.props.createChef(newChef);
      this.props.history.push('/chefdashboard');
    }
  };
 
  render() {
    const {invalid, submitting, pristine} = this.props;
    return (
      <Grid>
        <Grid.Column width={3}></Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color='teal' content='Chef Details'floated='right' size='large'/>
            <Divider />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="fname"
                type="text"
                component={TextInput}
                placeholder="Whats your first name"
              />
                     <Field
                name="lname"
                type="text"
                component={TextInput}
                placeholder="Whats your last name"
              /> 
              <Header sub color='teal' content='Personal details'floated='right' size='large'/>
              <Field
                name="gender"
                type="text"
                component={SelectInput}
                options={gen}
                placeholder="Your Gender please"
              />
              <Field
                name="dob"
                type="date"
                component={DateInput}
                placeholder="Date of Birth"
              />
              <Field
                name="photoURL"
                type="text"
                component={TextInput}
                //dateFormat='YYYY-MM-DD HH:mm'
                //timeFormat='HH:mm'
                //showTimeSelect
                placeholder="Photo URL" />
                <Field
                name="nationality"
                type="text"
                component={TextInput}
                //dateFormat='YYYY-MM-DD HH:mm'
                //timeFormat='HH:mm'
                //showTimeSelect
                placeholder="Enter your nationality"
              />
  
                <Field
                name="address"
                type="text"
                component={TextArea}
                //dateFormat='YYYY-MM-DD HH:mm'
                //timeFormat='HH:mm'
                //showTimeSelect
                placeholder="Enter your address"
              />
              <Field
              name="city"
              type="text"
              component={TextInput}
              //dateFormat='YYYY-MM-DD HH:mm'
              //timeFormat='HH:mm'
              //showTimeSelect
              placeholder="Enter your City"
            />

              <Field
              name="state"
              type="text"
              component={TextInput}
              //dateFormat='YYYY-MM-DD HH:mm'
              //timeFormat='HH:mm'
              //showTimeSelect
              placeholder="Enter your State"
            />

              <Field
              name="country"
              type="text"
              component={TextInput}
              //dateFormat='YYYY-MM-DD HH:mm'
              //timeFormat='HH:mm'
              //showTimeSelect
              placehollikeder="Enter your Country"
            />

              <Field
              name="nationality"
              type="text"
              component={TextInput}
              //dateFormat='YYYY-MM-DD HH:mm'
              //timeFormat='HH:mm'
              //showTimeSelect
              placeholder="Enter your nationality"
            />
              
              <Header sub color='teal' content='Personal details'floated='right' size='large'/>
              <Field
              name="phone"
              type="text"
              component={TextInput}
              //dateFormat='YYYY-MM-DD HH:mm'
              //timeFormat='HH:mm'
              //showTimeSelect
              placeholder="Enter your phone"
            /><Field
            name="email"
            type="text"
            component={TextInput}
            //dateFormat='YYYY-MM-DD HH:mm'
            //timeFormat='HH:mm'
            //showTimeSelect
            placeholder="Enter your email address"
          />

              <Button disabled={invalid || submitting || pristine} positive type="submit">
                Submit
              </Button>
              <Button onClick={this.props.history.goBack} type="button">
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column width={3}></Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(
  reduxForm({ form: 'chefForm', enableReinitialize: true, validate })(ChefFormnew)
);
