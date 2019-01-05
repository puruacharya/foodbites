import React from 'react';
import { Button, Divider, Form, Header, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import RadioInput from '../../../app/common/Form/RadioInput';
import TextInput from '../../../app/common/Form/TextInput';
import TextArea from '../../../app/common/Form/TextArea';
import PlaceInput from '../../../app/common/Form/PlaceInput';
import SelectInput from '../../../app/common/Form/SelectInput';


const AboutPage = ({ pristine, submitting,handleSubmit,updateProfile }) => {
  return (
    <Segment>
      <Header dividing size="large" content="About Me" />
      <p>Complete your profile to get the most out of site</p>
      <Form onSubmit= {handleSubmit(updateProfile)}>

        <Form.Group inline>
          <label>Tell us your status: </label>
          <Field name="status" component={RadioInput} type="radio" value="single" label="Single" />
          <Field
            name="status"
            component={RadioInput}
            type="radio"
            value="relationship"
            label="Relationship"
          />
          <Field
            name="status"
            component={RadioInput}
            type="radio"
            value="married"
            label="Married"
          />
        </Form.Group>
        <Divider />
        <label>Tell us about yourself</label>
        <Field name="about" component={TextArea} placeholder="About Me" />
        
        <Field
                name="address"
                type="text"
                component={TextArea}
                rows={3}
                placeholder="Tell us where do u live"
              />
        <Field
          width={8}
          name="origin"
          options={{ types: ['(regions)'] }}
          component={PlaceInput}
          placeholder="Country of Origin"
        />
        <Divider />
        <Button disabled={pristine || submitting} size="large" positive content="Update Profile" />
      </Form>
    </Segment>
  );
};

export default reduxForm({ form: 'userProfile', enableReinitialize: true })(AboutPage);