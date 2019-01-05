// import React from 'react';
// import { Segment, Comment, Header } from 'semantic-ui-react';
// import  DishDetailChatForm  from './DishDetailChatForm';
// import { Link } from 'react-router-dom';
// import { distanceInWords } from 'date-fns/distance_in_words';
// export const DishDetailChat = ({addDishComment, dishId, dishChat}) => {
//   return (
//     <div>
//       <Segment
//         textAlign="center"
//         attached="top"
//         inverted
//         color="teal"
//         style={{ border: 'none' }}
//       >
//         <Header>Chat about this event</Header>
//       </Segment>

//       <Segment attached>
//         <Comment.Group>
//           {dishChat && dishChat.map((comment) => (
//              <Comment key = {comment.id} >
//              <Comment.Avatar src={comment.photoURL ||"/assets/user.png" }/>
//              <Comment.Content>
//                <Comment.Author as={Link} to={`/profile/${comment.uid}`}  >{comment.displayName}</Comment.Author>
//                <Comment.Metadata>
//                  <div>{distanceInWords(comment.date, Date.now())} ago</div>
//                </Comment.Metadata>
//                <Comment.Text>{comment.text}</Comment.Text>
//                <Comment.Actions>
//                  <Comment.Action>Reply</Comment.Action>
//                </Comment.Actions>
//              </Comment.Content>
//            </Comment>
//           ))}
         
//         </Comment.Group>
//       <DishDetailChatForm addDishComment={addDishComment} dishId={dishId} />
        

//       </Segment>
//     </div>
//   );
// };
// //export default DishDetailChat;


import React, { Component } from 'react';
import { Segment, Header, Comment } from 'semantic-ui-react';
import DishDetailChatForm from './DishDetailChatForm';
import { Link } from 'react-router-dom';
import distanceInWords from 'date-fns/distance_in_words';

class DishDetailChat extends Component {
  state = {
    showReplyForm: false,
    selectedCommentId: null
  };

  handleOpenReplyForm = id => () => {
    this.setState({
      showReplyForm: true,
      selectedCommentId: id
    });
  };

  handleCloseReplyForm = () => {
    this.setState({
      selectedCommentId: null,
      showReplyForm: false
    });
  };

  render() {
    const { addDishComment, dishId, dishChat } = this.props;
    const { showReplyForm, selectedCommentId } = this.state;
    return (
      <div>
        <Segment textAlign="center" attached="top" inverted color="teal" style={{ border: 'none' }}>
          <Header>Chat about this dish</Header>
        </Segment>

        <Segment attached>
          <Comment.Group>
            {dishChat &&
              dishChat.map(comment => (
                <Comment key={comment.id}>
                  <Comment.Avatar src={comment.photoURL || '/assets/user.png'} />
                  <Comment.Content>
                    <Comment.Author as={Link} to={`/profile/${comment.uid}`}>
                      {comment.displayName}
                    </Comment.Author>
                    <Comment.Metadata>
                      <div>{distanceInWords(comment.date, Date.now())} ago</div>
                    </Comment.Metadata>
                    <Comment.Text>{comment.text}</Comment.Text>
                    <Comment.Actions>
                      <Comment.Action onClick={this.handleOpenReplyForm(comment.id)}>Reply</Comment.Action>
                      {showReplyForm &&
                        selectedCommentId === comment.id && (
                          <DishDetailChatForm
                            form={`reply_${comment.id}`}
                            addDishComment={addDishComment}
                            dishId={dishId}
                            closeForm={this.handleCloseReplyForm}
                            parentId={comment.id}
                          />
                        )}
                    </Comment.Actions>
                  </Comment.Content>

                  {comment.childNodes &&
                    comment.childNodes.map(child => (
                      <Comment.Group>
                        <Comment key={child.id}>
                          <Comment.Avatar src={child.photoURL || '/assets/user.png'} />
                          <Comment.Content>
                            <Comment.Author as={Link} to={`/profile/${child.uid}`}>
                              {child.displayName}
                            </Comment.Author>
                            <Comment.Metadata>
                              <div>{distanceInWords(child.date, Date.now())} ago</div>
                            </Comment.Metadata>
                            <Comment.Text>{child.text}</Comment.Text>
                            <Comment.Actions>
                              <Comment.Action onClick={this.handleOpenReplyForm(child.id)}>Reply</Comment.Action>
                              {showReplyForm &&
                                selectedCommentId === child.id && (
                                  <DishDetailChatForm
                                    form={`reply_${child.id}`}
                                    addDishComment={addDishComment}
                                    dishId={dishId}
                                    closeForm={this.handleCloseReplyForm}
                                    parentId={child.parentId}
                                  />
                                )}
                            </Comment.Actions>
                          </Comment.Content>
                        </Comment>
                      </Comment.Group>
                    ))}
                </Comment>
              ))}
          </Comment.Group>
          <DishDetailChatForm parentId={0} form={'newComment'} addDishComment={addDishComment} dishId={dishId} />
        </Segment>
      </div>
    );
  }
}

export default DishDetailChat;