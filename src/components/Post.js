import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import {
  getPostFromAPI,
  updatePostInAPI,
  sendVoteToAPI,
  sendCommentToAPI,
  removeCommentFromAPI,
  removePostFromAPI
} from '../actions/postsActions';

import PostForm from './PostForm';
import PostDetail from './PostDetail';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const Post = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const postId = Number(useParams().postId);
  const history = useHistory();
  const post = useSelector(st => st.posts[postId]);
  const dispatch = useDispatch();

  useEffect(function loadPost() {
    async function getPost() {
      dispatch(getPostFromAPI(postId));
    }
    if (!post) {
      getPost();
    }
  }, [dispatch, postId, post]);

  const toggleEdit = () => {
    setIsEditing(edit => !edit);
  }

  const edit = ({ title, description, body }) => {
    dispatch(updatePostInAPI(
      postId,
      title,
      description,
      body
    ));

    toggleEdit();
  }

  const deletePost = () => {
    dispatch(removePostFromAPI(postId));
    history.push('/');
  }

  const vote = (direction) => {
    dispatch(sendVoteToAPI(postId, direction));
  }


  const addComment = (text) => {
    dispatch(sendCommentToAPI(postId, text));
  }

  const deleteComment = (commentId) => {
    dispatch(removeCommentFromAPI(postId, commentId));
  }

  if (!post) return <p>Loading...</p>;

  return (
    <div className="Post">
      {isEditing
        ? <PostForm post={post} save={edit} cancel={toggleEdit} />
        : <PostDetail 
            post={post}
            toggleEdit={toggleEdit} 
            deletePost={deletePost} 
            doVote={vote}
          />  
      }

      <section className="Post-comments mb-4">
        <h4>Comments</h4>
        <CommentList comments={post.comments} deleteComment={deleteComment} />
        <CommentForm submitCommentForm={addComment} />
      </section>
    </div>
  );
}

export default Post;