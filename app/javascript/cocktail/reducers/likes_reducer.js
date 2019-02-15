import { SET_LIKES, CREATE_LIKE } from '../actions/like_actions';

export default function(state=[], action) {
  switch (action.type) {
    case SET_LIKES:
      return action.payload;
    case CREATE_LIKE: {
      return action.payload;
    }
    default:
      return state;
  }
}
