import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCocktail } from '../actions';
import { setReviews } from '../actions';
import { likeCocktail } from '../actions';
import { handleLike } from '../actions';

class Cocktail extends Component {

  handleSelect = () => {
    this.props.selectCocktail(this.props.cocktail.id);
    this.props.setReviews(this.props.cocktail.id);
  }

  handleLike = (event) => {
    event.stopPropagation();
    this.props.likeCocktail(this.props.cocktail.id);
    this.props.handleLike(this.props.cocktail.id);
  }

  render () {
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.cocktail.imageUrl}')`
    }

    let cardClasses = "card";
    if (this.props.cocktail.id === this.props.selectedCocktail.id) {
      cardClasses += " active";
    }

    let iconClasses = "like-btn btn fas fa-heart"
    if (this.props.likes.includes(this.props.cocktail.id)) {
      iconClasses += " active";
    }

    const idButton = `like${this.props.cocktail.id}`

    return (
      <div className={cardClasses} style={style} onClick={this.handleSelect}>
        <div className="card-description">
          <h2>{this.props.cocktail.name}</h2>
          <p>{this.props.cocktail.amount_of_likes} likes</p>
        </div>
        <i id={idButton} className={iconClasses} onClick={this.handleLike}></i>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCocktail, setReviews, likeCocktail, handleLike },
    dispatch
  )
}

function mapStateToProps(state) {
  return {
    selectedCocktail: state.selectedCocktail,
    likes: state.likes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cocktail);
