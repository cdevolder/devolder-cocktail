export const SET_COCKTAILS = 'SET_COCKTAILS';
export const SELECT_COCKTAIL = 'SELECT_COCKTAIL';
export const SET_REVIEWS = 'SET_REVIEWS';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const SET_LIKES = 'SET_LIKES';
export const CREATE_LIKE = 'CREATE_LIKE';

const BASE_URL = '/api/v1';

export function setCocktails() {
  const url = `${BASE_URL}/cocktails`;
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());
  return {
    type: SET_COCKTAILS,
    payload: promise
  };
}

export function selectCocktail(cocktail) {
  const url = `${BASE_URL}/cocktails/${cocktail}`;
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());
  return {
    type: SELECT_COCKTAIL,
    payload: promise
  };
}


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

export function setLikes() {
  const url = `${BASE_URL}/likes`;
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());
  return {
    type: SET_LIKES,
    payload: promise
  };
}

export function likeCocktail(cocktail) {
  const url = `${BASE_URL}/likes`;
  const body = { cocktail };
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
    type: CREATE_LIKE,
    payload: promise
  };
}
