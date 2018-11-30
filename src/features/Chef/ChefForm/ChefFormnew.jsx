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

import PlaceInput from '../../../app/common/Form/PlaceInput';
const mapState = (state, ownProps) => {
  const chefId = ownProps.match.params.id;

  let chef = {};

  if (chefId && state.chef.length > 0) {
    chef = state.chef.filter(chef => chef.id === chefId)[0];
  }

  return {
    initialValues: {chef}
  };
};

const actions = {
  createChef,
  updateChef
  
};
//import {PlaceInput} from '../../../app/common/form/PlaceInput';
const category = [
    {key: 'Indian', text: 'Indian', value: 'Indian'},
    {key: 'Chineese', text: 'Chineese', value: 'Chineese'},
    {key: 'Italian', text: 'Italian', value: 'Italian'},
    {key: 'Mexican', text: 'Mexican', value: 'Mexican'},
    {key: 'Continental', text: 'Continental', value: 'Continental'}
];

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

class ChefFormnew extends Component {

  states = {
    addressLatLng : {}
  }

  handleCitySelect = ( selectedCity) => {
    geocodeByAddress(selectedCity)
    .then(results => getLatLng(results[0]))
    .then(latlng => {
      this.setState({
      addressLatLng : latlng
    })
  })
  }
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
        <Grid.Column width={10}>
          <Segment>
            <Header sub color='teal' content='Dish Details'floated='right' size='large'/>
            <Divider />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="Give your dish a name"
                
              />
              <Field
                name="category"
                type="text"
                component={SelectInput}
                options={category}
                placeholder="What is category of your dish"
              />
              <Field
                name="description"
                type="text"
                component={TextArea}
                rows={3}
                placeholder="Tell us about your dish"
              />
              <Header sub color='teal' content='Dish details' floated='right' size='large'/>
              <Field
                name="price"
                type="text"
                component={TextInput}
                placeholder="Price"
              />
              <Field
                name="quantity"
                type="text"
                component={TextInput}
                placeholder="Quantity"
              />
              <Field
                name="photoURL"
                type="text"
                component={TextInput}
                //dateFormat='YYYY-MM-DD HH:mm'
                //timeFormat='HH:mm'
                //showTimeSelect
                placeholder="Enter URL of your photo"
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
  reduxForm({ form: 'chefForm', enableReinitialize: true, validate })(ChefFormnew)
);
