import Comment from './Comment';

const CommentList = ({ comments = [], deleteComment }) => {
  return (
    comments.map(c => (
      <Comment
        key={c.id}
        id={c.id}
        text={c.text}
        deleteComment={deleteComment}
      />
    ))
  );
}

export default CommentList;