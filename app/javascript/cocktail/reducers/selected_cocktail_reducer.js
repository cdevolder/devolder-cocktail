import { SELECT_COCKTAIL } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SELECT_COCKTAIL: {
      return action.payload;
    }
    default:
      return state;
  }
}
