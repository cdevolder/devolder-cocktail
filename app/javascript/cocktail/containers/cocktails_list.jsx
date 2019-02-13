import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCocktails } from '../actions';
import { setLikes } from '../actions';

import Cocktail from '../containers/cocktail';

class CocktailsList extends Component {

  componentWillMount() {
    this.props.setCocktails();
    this.props.setLikes();
  }

  render () {
    return (
      <div className="cocktail-list">
        {this.props.cocktails.map((cocktail) => <Cocktail cocktail={cocktail} key={cocktail.id} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCocktails: setCocktails, setLikes },
    dispatch
  )
}

function mapStateToProps(state) {
  return {
    cocktails: state.cocktails,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CocktailsList);
