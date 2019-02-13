import { SET_LIKES } from '../actions';
import { CREATE_LIKE } from '../actions';

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
