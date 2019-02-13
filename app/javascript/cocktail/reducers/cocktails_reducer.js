import { SET_COCKTAILS } from '../actions';

export default function(state=[], action) {
  switch (action.type) {
    case SET_COCKTAILS:
      return action.payload;
    default:
      return state;
  }
}
