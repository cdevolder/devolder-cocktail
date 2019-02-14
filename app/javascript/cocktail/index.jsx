import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';

import App from './components/app'
import cocktailsReducer from './reducers/cocktails_reducer'
import selectedCocktailReducer from './reducers/selected_cocktail_reducer'
import reviewsReducer from './reducers/reviews_reducer'
import likesReducer from './reducers/likes_reducer'

const cocktailIndex = document.getElementById('cocktail-index');
const firstCocktail = JSON.parse(cocktailIndex.dataset.cocktail)
const currentUser = JSON.parse(cocktailIndex.dataset.user)
const identityReducer = (state = null) => state;

const initialState = {
  user: currentUser,
  cocktails: [],
  selectedCocktail: firstCocktail,
  reviews: [],
  likes: []
};

const reducers = combineReducers ({
  user: identityReducer,
  cocktails: cocktailsReducer,
  selectedCocktail: selectedCocktailReducer,
  reviews: reviewsReducer,
  likes: likesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));
const store = createStore(reducers, initialState, middlewares)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  cocktailIndex
);
