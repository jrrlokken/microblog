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

        </div>
        <div className="PostDetail-votes">
          <b>[votes} votes:</b>


        </div>
      </div>
    </div>
  );
}

export default PostDetail;