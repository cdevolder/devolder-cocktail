import React, { Component } from 'react';
import CocktailList from '../containers/cocktail_list'
import Map from '../containers/map'
import SelectedCocktail from '../containers/selected_cocktail'

const App = (props) => {
  return (
    <div>
      <CocktailList />
      <div className="cocktail-container">
        <SelectedCocktail />
      </div>
    </div>
  );
}

export default App;
