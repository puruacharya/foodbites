// import React, { Component } from 'react'
// import { Form, Button } from 'semantic-ui-react'
// import { Field, reduxForm } from 'redux-form'
// import TextArea  from '../../../app/common/Form/TextArea';
// class DishDetailChatForm extends Component {
//   handleCommentSubmit = values => {
//     const {addDishComment ,reset , dishId }= this.props;
//     addDishComment (dishId, values);
//     reset();
//   }
//   render() {

//     return (
//       <Form onSubmit={this.props.handleSubmit(this.handleCommentSubmit)}>
//             <Field name = 'comment' 
//             type ='text' 
//             component={TextArea}
//             rows ={2}
//             />
//             <Button
//               content="Add Reply"
//               labelPosition="left"
//               icon="edit"
//               primary
//             />
//           </Form>
//     )
//   }
// }
// export default reduxForm ({form: 'dishchat'})(DishDetailChatForm);



import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextArea from '../../../app/common/Form/TextArea';

class DishDetailChatForm extends Component {
  handleCommentSubmit = values => {
    const { addDishComment, reset, eventId, closeForm, parentId } = this.props;
    addDishComment(eventId, values, parentId);
    reset();
    if (parentId !== 0) {
        closeForm();
    }
  };

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.handleCommentSubmit)}>
        <Field name="comment" type="text" component={TextArea} rows={2} />
        <Button content="Add Reply" labelPosition="left" icon="edit" primary />
      </Form>
    );
  }
}

export default reduxForm({ Fields: 'comment' })(DishDetailChatForm);