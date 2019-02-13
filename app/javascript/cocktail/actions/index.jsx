export const SET_COCKTAILS = 'SET_COCKTAILS';
export const SELECT_COCKTAIL = 'SELECT_COCKTAIL';
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
