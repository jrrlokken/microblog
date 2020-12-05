import './Comment.css';

const Comment = ({ deleteComment, text, id }) => {
  const handleDelete = event => {
    deleteComment(id);
  }

  return (
    <div>
      <p className="Comment">
        {deleteComment && (
          <i
            className="fa fa-times text-danger mr-2"
            onClick={handleDelete}
          />
        )}

        {text}
      </p>
    </div>
  );
}

export default Comment;