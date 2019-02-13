import { SET_REVIEWS } from '../actions';

export default function(state=[], action) {
  switch (action.type) {
    case SET_REVIEWS:
      return action.payload;
    default:
      return state;
  }
}
