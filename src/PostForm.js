const PostForm = ({ post, save, cancel }) => {
  const [postData, setPostData] = useState({
    title: post.title,
    description: post.description,
    body: post.body
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setPostData(data => ({
      ...data,
      [name]: value
    }));
  }

  const handleSubmit = event => {
    event.preventDefault();
    save(postData);
  }

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="edit-title">Title:</label>
        <input onChange={handleChange}
          id="edit-title"
          name="title"
          className="form-control"
          value={postData.title}
        />
      </div>

      <div className="form-group">
        <label htmlFor="edit-description">Description:</label>
        <input onChange={handleChange}
          id="edit-description"
          name="description"
          className="form-control"
          value={postData.description}
        />
      </div>

      <div className="form-group">
        <label htmlFor="edit-body">Body:</label>
        <input onChange={handleChange}
          id="edit-body"
          name="body"
          className="form-control"
          rows={10}
          value={postData.body}
        />
      </div>

      <button className="btn btn-primary mr-2">Save</button>
      <button onClick={cancel} className="btn btn-secondary">Cancel</button>
    </form>
  );
}

PostForm.defaultProps = {
  post: { title: "", description: "", body: "" }
};

export default PostForm;