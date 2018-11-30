import React from 'react';
import { connect } from 'react-redux'
import { Form, Segment, Button , Label, Divider} from 'semantic-ui-react';
import { Field , reduxForm} from 'redux-form';
import SocialLogin from '../SocialLogin/SocialLogin'
import TextInput from '../../../app/common/Form/TextInput';
import { registerUser } from '../authActions';
import { combineValidators,isRequired  } from 'revalidate';
const actions ={
  registerUser
};
const validate = combineValidators({
  displayName : isRequired('displayName'),
  email : isRequired('email'),
  password : isRequired('password'),
});
const RegisterForm = ({handleSubmit, registerUser,error,invalid,submitting}) => {
  return (
    <div>
      <Form size="large" onSubmit= {handleSubmit(registerUser)}>
        <Segment>
          <Field
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Known As"
          />
          <Field
            name="email"
            type="text"
            component={TextInput}
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            component={TextInput}
            placeholder="Password"
          />
          {error && <Label basic color='red' > {error}</Label>}
          <Button disabled = {invalid || submitting} fluid size="large" color="teal">
            Register
          </Button>
          <Divider horizontal >Or</Divider>
        <SocialLogin />
        </Segment>
      </Form>
    </div>
  );
};

export default connect(null,actions)(reduxForm({form:'RegisterForm'},validate)(RegisterForm));