import React from 'react';
import Comment from './Comment';
import './Comments.css';
import Posts from '../Posts/Posts';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
console.log(props)
  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
        {comments.map((item, index) => {
          return <Comment key={index} comment={item} />
        }

        )}
    </div>
  );
};

export default Comments;
