export const SET_LIKES = 'SET_LIKES';
export const CREATE_LIKE = 'CREATE_LIKE';

const BASE_URL = '/api/v1';

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

  return {
    type: CREATE_LIKE,
    payload: promise
  };
}
