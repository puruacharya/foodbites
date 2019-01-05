/* global google */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import moment from 'moment';

import cuid from 'cuid';
import { Segment, Form, Button, Grid, Header, Divider } from 'semantic-ui-react';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate'
import { createDboy , updateDboy} from '../dboyAction';
import TextInput from '../../../app/common/Form/TextInput';
import TextArea from '../../../app/common/Form/TextArea';
import SelectInput from '../../../app/common/Form/SelectInput';

import DateInput from '../../../app/common/Form/DateInput';
const mapState = (state, ownProps) => {
  

  let dboy = {};

  if (state.firestore.ordered.deliveryboys && state.firestore.ordered.deliveryboys[0]) {
    dboy = state.firestore.ordered.deliveryboys[0];
  }

  return {
    initialValues: dboy,
    dboy
  };
};
const actions = {
  createDboy,
  updateDboy
  
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


class DeliveryboyFormnew extends Component {

  onFormSubmit = values => {
    values.date = moment(values.date).format()
    if (this.props.initialValues.id) {
      this.props.updateDboy(values);
      this.props.history.goBack();
    } else {
      const newDboy = {
        ...values,
        id: cuid(),
        photoURL: '/assets/user.png',
        
      };
      this.props.createDboy(newDboy);
      this.props.history.push('/dboydashboard');
    }
  };
 
  render() {
    const {invalid, submitting, pristine} = this.props;
    return (
      <Grid>
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color='teal' content='Deliveryboy Details'floated='right' size='large'/>
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
  reduxForm({ form: 'dboyForm', enableReinitialize: true, validate })(DeliveryboyFormnew)
);
