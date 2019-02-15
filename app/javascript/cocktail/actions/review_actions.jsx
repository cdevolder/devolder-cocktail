export const SET_REVIEWS = 'SET_REVIEWS';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';

const BASE_URL = '/api/v1';

export function setReviews(cocktail) {
  const url = `${BASE_URL}/cocktails/${cocktail}/reviews`;
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());
  return {
    type: SET_REVIEWS,
    payload: promise
  };
}

export function createReview(cocktail, content) {
  const url = `${BASE_URL}/cocktails/${cocktail}/reviews`;
  const body = { content };
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json());
  console.log(promise);

  return {
    type: CREATE_REVIEW,
    payload: promise
  };
}

export function deleteReview(cocktail, review) {
  const url = `${BASE_URL}/cocktails/${cocktail}/reviews/${review}`;
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch(url, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
  }).then(r => r.json());
  return {
    type: DELETE_REVIEW,
    payload: promise
  };
}
