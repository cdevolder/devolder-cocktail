import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCocktail } from '../actions/cocktail_actions';

import ReviewForm from '../containers/review_form';

class SelectedCocktail extends Component {

  render () {
    if (this.props.selectedCocktail) {
      const style = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.selectedCocktail.imageUrl}')`
      }
      return (
        <div>
          <div className='card' style={style}>
            <div className="card-description">
              <h2>{this.props.selectedCocktail.name}</h2>
              <p>{this.props.selectedCocktail.description}</p>
            </div>
          </div>
          <ReviewForm />
        </div>
      );
    }
    return (
      <div className='card'>
        <div className="card-description">
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCocktail: selectCocktail },
    dispatch
  )
}

function mapStateToProps(state) {
  return {
    selectedCocktail: state.selectedCocktail
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedCocktail);
