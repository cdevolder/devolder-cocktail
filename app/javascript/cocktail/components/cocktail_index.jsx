import React, { Component } from 'react';
import CocktailsList from '../containers/cocktails_list'
import SelectedCocktail from '../containers/selected_cocktail'
import ReviewsList from '../containers/reviews_list'

const CocktailIndex = (props) => {
  return (
    <div>
      <CocktailsList />
      <div className="right-container">
        <SelectedCocktail />
        <ReviewsList />
      </div>
    </div>
  );
}

export default CocktailIndex;
