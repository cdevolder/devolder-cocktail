import { SET_COCKTAILS, HANDLE_LIKE } from '../actions';

export default function(state=[], action) {
  switch (action.type) {
    case SET_COCKTAILS:
      return action.payload;
    case HANDLE_LIKE:
      return action.payload;
    default:
      return state;
  }
}
