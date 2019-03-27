import { getInitialData } from '../../utils/api';
import { receivePosts } from './posts';
import { receiveCategories } from './categories';
import { receiveComments } from './comments';
import { showLoading, hideLoading } from 'react-redux-loading';

import { setAuthedUser } from '../actions/authedUser';

const AUTHED_ID = 'georgebezerra';

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ posts, comments, categories }) => {
      dispatch(receivePosts(posts));
      dispatch(receiveComments(comments));
      dispatch(receiveCategories(categories));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
