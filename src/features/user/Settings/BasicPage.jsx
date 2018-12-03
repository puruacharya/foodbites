import React, {Component} from 'react';
import {Segment, Form, Header, Divider, Button} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import DateInput from "../../../app/common/Form/DateInput";
import PlaceInput from "../../../app/common/Form/PlaceInput";
import TextInput from "../../../app/common/Form/TextInput";
import RadioInput from "../../../app/common/Form/RadioInput";
import  moment from 'moment';
class BasicPage extends Component {

    render() {
        const {pristine, submitting, updateProfile, handleSubmit} = this.props;
        return (
            <Segment>
                <Header dividing size='large' content='Basics' />
                <Form onSubmit={handleSubmit(updateProfile)} >
                    <Field
                        width={8}
                        name='displayName'
                        type='text'
                        component={TextInput}
                        placeholder='Known as'
                        
                    />
                    <Form.Group inline>
                    <Field name='gender' type='radio' value='male' label='male'
                      component={RadioInput} / >
                      <Field name='gender' type='radio' value='female' label='female'
                      component={RadioInput} / >    
                    </Form.Group>
                    <Field
                        width={8}
                        name='DOB'
                        component={DateInput}
                        placeholder='Date of Birth'
                        dateFormat='YYYY-MM--DD'
                        showYearDropdown = {true}
                        showMonthDropdown = {true}
                        dropdownMode = 'select'
                        maxDate= {moment().subtract(3,'years')}
                    />
                    <Field
                        name='city'
                        placeholder='Home Town'
                        options={{types: ['(cities)']}}
                        label='Female'
                        component={PlaceInput}
                        width={8}
                    />
                    <Divider/>
                    <Button disabled={pristine || submitting} size='large' positive content='Update Profile'/>
                </Form>
            </Segment>
        );
    }
}

export default reduxForm({form: 'userProfile',enableReinitialize: true})(BasicPage);