// import React, { Component } from 'react';
// import { Segment, Form, Button } from 'semantic-ui-react';
// import { reduxForm, Field } from 'redux-form';
// import TextInput from '../../../app/common/Form/TextInput'
// //import SelectInput from '../../../app/common/Form/SelectInput';
// import DateInput from '../../../app/common/Form/DateInput';
// //import TextArea from '../../../app/common/Form/TextArea';


// const emptyForm = {
//   fname: '',
//   lname: '',
//   dob: '',
//   address: '',
//   uname: '',
//   pass: ''
// }


// class PeopleForm extends Component {
//   state = {
//     people: emptyForm
//   };






//   onFormSubmit = (ppl) => {
//     ppl.preventDefault();
//     if (this.state.people.id) {
//       this.props.updatePeople(this.state.people);

//     } else {
//       this.props.createPeople(this.state.people);
//     }
//   }

//   render() {
//     const { handleCancel } = this.props;
//     const { people } = this.state;
//     return (
//       <Segment>
//         <Form onSubmit={this.onFormSubmit}>



//           <Field name="fname" value={people.fname} component={TextInput} placeholder="First Name" />

//           <Field name="lname" value={people.lname} component={TextInput} placeholder="Last Name" />

//           <Field name="dob" component={DateInput} value={people.dob} />

//           <Field name="address" placeholder="Enter the Address" component={TextInput} value={people.address} />
//           <Field name="uname" placeholder="Enter the Username" component={TextInput} value={people.uname} />

//           <Field name="pass" placeholder="Enter the Password" value={people.pass} />

//           <Button positive type="submit" >
//             Submit
//           </Button>
//           <Button onClick={handleCancel} type="button" >Cancel</Button>
//         </Form>
//       </Segment>

//     );
//   }
// }

// export default (reduxForm({ form: 'peopleForm',enableReinitialize:'true' }))(PeopleForm);




/* global google */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import moment from 'moment';
import cuid from 'cuid';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate';
import { createPeople, updatePeople } from '../../People/peopleAction';
import TextInput from '../../../app/common/Form/TextInput';
//import TextArea from '../../../app/common/Form/TextArea';
//import SelectInput from '../../../app/common/Form/SelectInput';
import DateInput from '../../../app/common/Form/DateInput';
import PlaceInput from '../../../app/common/Form/PlaceInput';
import { geocodeByAddress,getLatLng } from 'react-places-autocomplete';
import Script from 'react-load-script'

const mapState = (state, ownProps) => {
   const peopleId = ownProps.match.params.id;

  let people = {};

  if (peopleId && state.people.length > 0) {
    people = state.people.filter(people => people.id === peopleId)[0];
  }


  return {
    initialValues: people
  };
};

const actions = {
  createPeople,
  updatePeople
};



const validate = combineValidators({
  fname: isRequired({ message: 'The first name is required' }),
  lname: isRequired({ message: 'The last name is required' }),
  //pass: isRequired('pass'),
  dob: isRequired('dob'),
  city: isRequired('city'),
  uname: isRequired('uname'),
  pass: composeValidators(
    isRequired({ message: 'Please enter a Password' }),
    hasLengthGreaterThan(8)({ message: 'Description needs to be at least 8 characters' })
  )(),
})

class PeopleForm extends Component {

  states = {
    scriptLoaded: false,
    addressLatLng : {},
    cityLatLng : {},
    

}
handleScriptLoad = () => this.setState({
    scriptLoaded: true
});

  handleCitySelect = ( selectedCity) => {
    geocodeByAddress(selectedCity)
    .then(results => getLatLng(results[0]))
    .then(latlng => {
      this.setState({
      cityLatLng : latlng
    })
  })
  .then(() =>{
      this.props.change('city',selectedCity)
  })
  }
  onFormSubmit = values => {
    values.date = moment(values.date).format()
    if (this.props.initialValues.id) {
      this.props.updatePeople(values);
      this.props.history.goBack();
    } else {
      const newPeople = {
        ...values,
        id: cuid(),
        photoURL: '/assets/user.png',

      };
      this.props.createPeople(newPeople);
      this.props.history.push('/peopledashboard');
    }
  };


  render() {
    const { invalid, submitting, pristine } = this.props;
    return (
      <Grid>
        <Script
      url='https://maps.googleapis.com/maps/api/js?key=AIzaSyAe7phYH4ilQgj1a2trtIs2_Np9f6gwtz0&libraries=places'
      onLoad={this.handleScriptLoad}
  />
        <Grid.Column width={10}>
          <Segment>
            <Header sub color='teal' content='People Details' />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="fname"
                type="text"
                component={TextInput}
                placeholder="Your first name"
              />
              <Field
                name="lname"
                type="text"
                component={TextInput}
                placeholder="Your last name"
              />
              <Field
                name="nationality"
                type="text"
                component={TextInput}
                //options={category}
                placeholder="What is category of your dish"
              />
              <Field
                name="dob"
                type="date"
                component = {DateInput}

                placeholder="Tell us your dob"
              />
              <Header sub color='teal' content='Event Location details' />
              <Field
                name="city"
                type="text"
                component={PlaceInput}
                options = {{ types : ['(cities)'] }}
                placeholder="City"
                onSelect = {this.handleCitySelect}
              />
              { this.state.scriptLoaded && <Field
                name="address"
                type="text"
                options = {{types: ['(establishments)']}}
                component={PlaceInput}
                options={{
                  location : new google.maps.LatLng(this.state.cityLatLng),
                  radius :1000,
                  types : ['establishment']
                }}
              
                placeholder="Address"
              />}
              <Field
                name="uname"
                type="text"
                component={TextInput}
                //dateFormat='YYYY-MM-DD HH:mm'
                //timeFormat='HH:mm'
                //showTimeSelect
                placeholder="Enter Username"
              />

              <Field
                name="pass"
                type="password"
                component={TextInput}
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
  reduxForm({ form: 'peopleForm', enableReinitialize: true, validate })(PeopleForm)
);