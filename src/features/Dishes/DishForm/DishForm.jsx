// import React, { Component } from 'react';
// import { Segment, Form, Button } from 'semantic-ui-react';
// import { reduxForm, Field } from 'redux-form';
// import TextInput from '../../../app/common/Form/TextInput'
// import SelectInput from '../../../app/common/Form/SelectInput';
// //import DateInput from '../../../app/common/Form/DateInput';
// import TextArea from '../../../app/common/Form/TextArea';
// import { createDish, deleteDish, updateDish } from '../dishAction';
// import { connect } from 'react-redux';

// const mapState = (state, ownProps) => {
//   const dishId = ownProps.match.params.id;
//   let dishes = {};
//   if (dishId && state.dishes.length > 0) {
//     dishes = state.dishes.filter(dish => dish.id === dishId)[0];
//   }
//   return {
//     initialValues: dishes
//   };
// };
// const actions = {
//   createDish,
//   updateDish,
//   deleteDish
// }
// class DishForm extends Component {


//   onFormSubmit = (value) => {
//     value.preventDefault();
//     if (this.state.dishes.id) {
//       this.props.updateDish(this.state.dishes);

//     } else {
//       this.props.createDish(this.state.dishes);
//     }
//   }


//   render() {

//     return (
//       <Segment>
//         <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
//           <Field name='title' type='text' component={TextInput} placeholder='Title' value={dishes.title} />
//           <Field name='category' type='text' component={SelectInput} placeholder='Category' value={dishes.category} />
//           <Field name='description' type='text' component={TextArea} placeholder='Description' value={dishes.description} />
//           <Field name='price' type='text' component={TextInput} placeholder='Price' value={dishes.price} />
//           <Field name='course' type='text' component={SelectInput} placeholder='Course' value={dishes.course} />
//           <Field name='quantity' type='text' component={TextInput} placeholder='Quantity' value={dishes.quantity} />
//           <Field name='photoURL' type='text' component={TextInput} placeholder='Photo URL' value={dishes.photoURL} />
//           <Button positive type="submit" >
//             Submit
//                 </Button>
//           <Button onClick={handleCancel} type="button" >Cancel</Button>
//         </Form>
//       </Segment>

//     );
//   }
// }

// export default connect(mapState,actions) (reduxForm({ form: 'dishForm', enableReinitialize: 'true' }))(DishForm);




import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import moment from 'moment';
import cuid from 'cuid';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate'
import { createDish, updateDish } from '../dishAction';
import TextInput from '../../../app/common/Form/TextInput';
import TextArea from '../../../app/common/Form/TextArea';
import SelectInput from '../../../app/common/Form/SelectInput';
//import DateInput from '../../../app/common/form/DateInput';

const mapState = (state, ownProps) => {
  const dishId = ownProps.match.params.id;

  let dish = {};

  if (dishId && state.dish.length > 0) {
    dish = state.dish.filter(dish => dish.id === dishId)[0];
  }

  return {
    initialValues: dish
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

const validate = combineValidators({
  title: isRequired({message: 'The event title is required'}),
  category: isRequired({message: 'Please provide a category'}),
  description: composeValidators(
    isRequired({message: 'Please enter a description'}),
    hasLengthGreaterThan(4)({message: 'Description needs to be at least 5 characters'})
  )(),
  price: isRequired('city'),
  quantity: isRequired('venue'),
  photoURL: isRequired('date')
})

class DishForm extends Component {

  onFormSubmit = values => {
    values.date = moment(values.date).format()
    if (this.props.initialValues.id) {
      this.props.updateDish(values);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        photoURL: '/assets/user.png',
        
      };
      this.props.createDish(newEvent);
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
              <Header sub color='teal' content='Dish details'floated='right' size='large'/>
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
  reduxForm({ form: 'eventForm', enableReinitialize: true, validate })(DishForm)
);