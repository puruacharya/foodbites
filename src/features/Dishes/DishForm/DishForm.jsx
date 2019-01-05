import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import moment from 'moment';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import cuid from 'cuid';
import { Segment, Form, Button, Grid, Header, Divider } from 'semantic-ui-react';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate'
import { createDish, updateDish } from '../dishAction';
import TextInput from '../../../app/common/Form/TextInput';
import TextArea from '../../../app/common/Form/TextArea';
import SelectInput from '../../../app/common/Form/SelectInput';
import PlaceInput from '../../../app/common/Form/PlaceInput';

const mapState = (state, ownProps) => {
  

  let dish = {};

  if (state.firestore.ordered.dishes && state.firestore.ordered.dishes[0]) {
    dish = state.firestore.ordered.dishes[0];
  }

  return {
    initialValues: dish,
    dish
  };
};

const actions = {
  createDish,
  updateDish
};

const category = [
    {key: 'Indian', text: 'Indian', value: 'Indian'},
    {key: 'Chineese', text: 'Chineese', value: 'Chineese'},
    {key: 'Italian', text: 'Italian', value: 'Italian'},
    {key: 'Mexican', text: 'Mexican', value: 'Mexican'},
    {key: 'Continental', text: 'Continental', value: 'Continental'}
];
  const seasonal = [
    {key: 'Winter', text: 'Winter', value: 'Winter'},
    {key: 'Summer', text: 'Summer', value: 'Summer'},
    {key: 'Spring', text: 'Spring', value: 'Spring'},
    {key: 'Autumn', text: 'Autumn', value: 'Autumn'},
    {key: 'All', text: 'All', value: 'All'}
    
];

const validate = combineValidators({
  title: isRequired({message: 'The event title is required'}),
  category: isRequired({message: 'Please provide a category'}),
  description: composeValidators(
    isRequired({message: 'Please enter a description'}),
    hasLengthGreaterThan(4)({message: 'Description needs to be at least 5 characters'})
  )(),
    cost: isRequired({message: 'Cost cannot be empty'}),
    seasoned: isRequired({message: 'Please provide a category'}),
    photoURL: isRequired('Please give amazing pic of dish')
})

class DishForm extends Component {

  onFormSubmit = values => {
    values.date = moment(values.date).format()
    if (this.props.initialValues.id) {
      this.props.updateDish(values);
      this.props.history.goBack();
    } else {
      this.props.createDish(values);
      this.props.history.push('/dishdashboard');
    }
  };

  render() {
    const {invalid, submitting, pristine} = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color='teal' content='Dish Details'floated='right' size='large'/>
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                type="text"
                component={TextInput}
                  placeholder="Give your Dish a title"
              />
              <Field
                name="type  "
                type="text"
                component={SelectInput}
                options={category}
                placeholder="What is category of your dish"
              />
              <Field
                name="Description"
                type="text"
                component={TextArea}
                rows={3}
                placeholder="Tell us about your dish"
              />
              <Header sub color='teal' content='Dish details'floated='right' size='large'/>
              <Field
                  name="cost"
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
                  name="seasonal"
                type="text"
                component={SelectInput}
                options={seasonal}
                placeholder="Season in which it is available"
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
    reduxForm({ form: 'dishForm', enableReinitialize: true, validate })(DishForm)
);