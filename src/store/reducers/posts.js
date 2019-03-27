import { RECEIVE_POSTS, ADD_POST } from '../actions/posts';

export default function posts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      // console.log('REDUCE RECEIVE TOOLS', action.tools);
      return {
        ...state,
        ...action.posts.reduce((newPost, i) => {
          newPost[i.id] = i;
          return newPost;
        }, {})
      };
    case ADD_POST:
      // console.log('REDUCE RECEIVE TOOLS', state);
      return {
        ...state,
        ...action.post
      };
    default:
      return state;
  }
}
