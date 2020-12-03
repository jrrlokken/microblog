import axios from 'axios';
import {
  FETCH_POST,
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  VOTE,
  ADD_COMMENT,
  REMOVE_COMMENT
} from './actionTypes';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api/posts";

export const getPostFromAPI = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`${API_URL}/${id}`);
    return dispatch(getPost(response.data));
  };
}

const getPost = (post) => {
  return {
    type: FETCH_POST,
    post
  };
}

export const sendPostToAPI = (title, description, body) {
  return async function (dispatch) {
    const response = await axios.post(`${API_URL}`, {
      title,
      description,
      body
    });
    return dispatch(addPost(response.data));
  }
}

const addPost = (post) => {
  return {
    type: ADD_POST,
    post
  };
}

export const removePostFromAPI = (id) {
  return async function (dispatch) {
    const response = await axios.delete(`${API_URL}/${id}`);
    return dispatch(removePost(response.data));
  };
}

const removePost = (postId) => {
  return {
    type: REMOVE_POST,
    postId
  };
}

export const updatePostInAPI = (id, title, description, body) {
  return async function (dispatch) {
    const response = await axios.put(`${API_URL}/${id}`, {
      title,
      description,
      body
    });
    return dispatch(updatePost(response.data));
  };
}

const updatePost = (post) => {
  return {
    type: UPDATE_POST,
    post
  };
}

export const sendVoteToAPI = (id, direction) {
  return async function (dispatch) {
    const response = await axios.post(`${API_URL}/${id}/vote/${direction}`);
    return dispatch(vote(id, response.data.votes));
  };
}

const vote = (postId, votes) => {
  return {
    type: VOTE,
    postId: postId,
    votes: votes
  };
}

export const sendCommentToAPI = (postId, text) {
  return async function (dispatch) {
    const response = await axios.post(`${API_URL}/${postId}/comments/`, { text });
    return dispatch(addComment(postId, response.data));
  };
}

const addComment = (postId, comment) => {
  return {
    type: ADD_COMMENT,
    postId,
    comment
  }
}

export const removeCommentFromAPI = (postId, commentId) {
  return async function (dispatch) {
    await axios.post(`${API_URL}/${postId}/comments/${commentId}`);
    return dispatch(removeComment(postId, commentId));
  };
}

const removeComment = (postId, commentId) => {
  return {
    type: REMOVE_COMMENT,
    postId,
    commentId
  };
}