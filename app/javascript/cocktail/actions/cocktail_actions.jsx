export const SET_COCKTAILS = 'SET_COCKTAILS';
export const SELECT_COCKTAIL = 'SELECT_COCKTAIL';
export const HANDLE_LIKE = 'HANDLE_LIKE';

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

export function handleLike(cocktail) {
  const url = `${BASE_URL}/cocktails/${cocktail}`;
  const body = { cocktail };
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch(url, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: HANDLE_LIKE,
    payload: promise
  };
}
