import { SET_REVIEWS, CREATE_REVIEW, DELETE_REVIEW } from '../actions';

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
    case DELETE_REVIEW: {
      const newState = Object.assign([], state);
      const indexOfReviewToDelete = state.findIndex(review => {
        return review.id == action.payload
      })
      newState.splice(indexOfReviewToDelete, 1);
      return newState;
    }
    default:
      return state;
  }
}
