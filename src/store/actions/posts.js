import { generateUID } from '../../utils/helpers';
import { createPost, deletePost as deletePostAPI } from '../../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

function deletePost(postId) {
  return {
    type: DELETE_POST,
    postId
  };
}

export function handleDeletePost(postId) {
  return dispatch => {
    return deletePostAPI(postId)
      .then(postId => dispatch(deletePost(postId)))
      .catch(error => console.warn(error));
  };
}

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  };
}

function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}
export function handleAddPost(post) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return createPost({
      ...post,
      id: generateUID(),
      author: authedUser,
      timestamp: Date.now()
    })
      .then(post => dispatch(addPost(post)))
      .then(() => dispatch(hideLoading()));
  };
}
