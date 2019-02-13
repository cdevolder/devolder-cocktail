import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCocktail } from '../actions';
import { setReviews } from '../actions';

class Cocktail extends Component {

  handleClick = () => {
    this.props.selectCocktail(this.props.cocktail.id);
    this.props.setReviews(this.props.cocktail.id);
  }

  render () {
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.cocktail.imageUrl}')`
    }

    let classes = "card";
    if (this.props.cocktail.id === this.props.selectedCocktail.id) {
      classes += " selected";
    }

    return (
      <div className={classes} style={style} onClick={this.handleClick}>
        <div className="card-description">
          <h2>{this.props.cocktail.name}</h2>
        </div>
        <a className="card-user"><i className="fas fa-heart"></i></a>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCocktail, setReviews },
    dispatch
  )
}

function mapStateToProps(state) {
  return {
    selectedCocktail: state.selectedCocktail
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cocktail);
