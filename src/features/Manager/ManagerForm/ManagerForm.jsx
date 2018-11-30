import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import moment from 'moment';
import cuid from 'cuid';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate'
import { createManager, updateManager } from '../managerAction';
import TextInput from '../../../app/common/Form/TextInput';
import TextArea from '../../../app/common/Form/TextArea';
//import SelectInput from '../../../app/common/Form/SelectInput';
//import {DateInput} from '../../../app/common/form/DateInput';

const mapState = (state, ownProps) => {
  const managerId = ownProps.match.params.id;

  let manager = {};

  if (managerId && state.manager.length > 0) {
    manager = state.manager.filter(manager => manager.id === managerId)[0];
  }

  return {
    initialValues: {manager}
  };
};

const actions = {
  createManager,
  updateManager
};


const validate = combineValidators({
  fname: isRequired({message: 'The chef first name is required'}),
  lname: isRequired({message: 'The chef last name is required'}),
  
  dob: isRequired({message: 'Please provide Date of Birth'}),
  address: isRequired('address'),
  city: isRequired('city'),
  uname: isRequired('uname'),
  pass: composeValidators(
    isRequired({message: 'Please enter a address'}),
    hasLengthGreaterThan(4)({message: 'Address needs to be at least 5 characters'})
  )(),
  
})
class ManagerForm extends Component {
  
  onFormSubmit = values => {
    values.date = moment(values.date).format()
    if (this.props.initialValues.id) {
      this.props.updateManager(values);
      this.props.history.goBack();
    } else {
      const newManager = {
        ...values,
        id: cuid(),
        photoURL: '/assets/user.png',
        
      };
      this.props.createManager(newManager);
      this.props.history.push('/managerdashboard');
    }
  };
  render() {
    const {invalid, submitting, pristine} = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color='teal' content='Chef Details'/>
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="fname"
                type="text"
                component={TextInput}
                placeholder="Give chef first name"
              />
              <Field
                name="lname"
                type="text"
                component={TextInput}
                placeholder="Give chef last name"
              />
              
              <Field
                name="dob"
                type="date"
                //component={DateInput}
                
                placeholder="What is your dob"
              />

              <Header sub color='teal' content='Chef Location details'/>
              
              <Field
                name="address"
                type="text"
                component={TextArea}
                rows={3}
                placeholder="Tell us where do u live"
              />
              <Field
                name="city"
                type="text"
                component={TextInput}
                placeholder="City"
              />
              <Field
                name="uname"
                type="text"
                component={TextInput}
                placeholder="User Name"
              />
              <Field
                name="pass"
                type="password"
                //component={TextInput}
                //dateFormat='YYYY-MM-DD HH:mm'
                //timeFormat='HH:mm'
                //showTimeSelect
                placeholder="Enter Password"
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
      </Grid>
    );
  }
}

export default connect(mapState, actions)(
  reduxForm({ form: 'managerForm', enableReinitialize: true, validate })(ManagerForm)
);