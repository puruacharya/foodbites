import React from 'react';
import { Segment, Comment, Header } from 'semantic-ui-react';
import  DishDetailChatForm  from './DishDetailChatForm';
import { Link } from 'react-router-dom';
import { distanceInWords } from 'date-fns/distance_in_words';
export const DishDetailChat = ({addDishComment, dishId, dishChat}) => {
  return (
    <div>
      <Segment
        textAlign="center"
        attached="top"
        inverted
        color="teal"
        style={{ border: 'none' }}
      >
        <Header>Chat about this event</Header>
      </Segment>

      <Segment attached>
        <Comment.Group>
          {dishChat && dishChat.map((comment) => (
             <Comment key = {comment.id} >
             <Comment.Avatar src={comment.photoURL ||"/assets/user.png" }/>
             <Comment.Content>
               <Comment.Author as={Link} to={`/profile/${comment.uid}`}  >{comment.displayName}</Comment.Author>
               <Comment.Metadata>
                 <div>{distanceInWords(comment.date, Date.now())} ago</div>
               </Comment.Metadata>
               <Comment.Text>{comment.text}</Comment.Text>
               <Comment.Actions>
                 <Comment.Action>Reply</Comment.Action>
               </Comment.Actions>
             </Comment.Content>
           </Comment>
          ))}
         
        </Comment.Group>
      <DishDetailChatForm addDishComment={addDishComment} dishId={dishId} />
        

      </Segment>
    </div>
  );
};
//export default DishDetailChat;
