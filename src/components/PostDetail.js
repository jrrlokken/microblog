import './PostDetail.css';

const PostDetail = ({ doVote, toggleEdit, deletePost, post}) => {
  const { title, description, body, votes } = post;

  return (
    <div className="PostDetail">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>{body}</div>
      </div>

      <div className="PostDetail-right">
        <div className="PostDetail-edit">
          <i className="fas fa-edit text-primary"
                    onClick={toggleEdit} />
          <i className="fas fa-times text-danger"
              onClick={deletePost} />
        </div>
        <div className="PostDetail-votes">
          <b>{votes} votes:</b>

          <i className="fas fa-thumbs-up text-success"
                  onClick={event => doVote("up", title.id)} />
          <i className="fas fa-thumbs-down text-danger"
              onClick={event => doVote("down", title.id)} />
        </div>
      </div>
    </div>
  );
}

export default PostDetail;