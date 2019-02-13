export const SET_COCKTAILS = 'SET_COCKTAILS';
export const SELECT_COCKTAIL = 'SELECT_COCKTAIL';
export const SET_REVIEWS = 'SET_REVIEWS';
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
