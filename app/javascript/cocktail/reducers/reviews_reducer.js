import { SET_REVIEWS, CREATE_REVIEW } from '../actions';

export default function(state=[], action) {
  switch (action.type) {
    case SET_REVIEWS:
      return action.payload;
    case CREATE_REVIEW: {
      if (state.map(review => review.id).includes(action.payload.id)) {
        return state;
      } else {
        const copiedState = state.slice(0);
        copiedState.unshift(action.payload);
        return copiedState;
      }
    }
    default:
      return state;
  }
}
