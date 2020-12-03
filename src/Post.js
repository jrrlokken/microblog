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
}