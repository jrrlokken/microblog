import { useState } from 'react';

const CommentForm = ({ submitCommentForm }) => {
  const [text, setText] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    submitCommentForm(text);
    setText("");
  }

  const handleChange = event => {
    setText(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            onChange={handleChange}
            id="commentform-text"
            name="text"
            size="50"
            placeholder="New Comment"
            className="form-control"
            value={text}
          />
        </div>
        <button className="btn btn-primary">Add Comment</button>
      </form>
    </div>
  );
}

export default CommentForm;