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

const cocktailIndex = document.getElementById('cocktail-index');
const firstCocktail = JSON.parse(cocktailIndex.dataset.cocktail)
const initialState = {
  cocktails: [],
  selectedCocktail: firstCocktail,
  reviews: []
};

const reducers = combineReducers ({
  cocktails: cocktailsReducer,
  selectedCocktail: selectedCocktailReducer,
  reviews: reviewsReducer
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