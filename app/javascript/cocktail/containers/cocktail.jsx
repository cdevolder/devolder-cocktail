import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCocktail } from '../actions';
import { setReviews } from '../actions';
import { likeCocktail } from '../actions';

class Cocktail extends Component {

  handleSelect = () => {
    this.props.selectCocktail(this.props.cocktail.id);
    this.props.setReviews(this.props.cocktail.id);
  }

  handleLike = (event) => {
    event.stopPropagation();
    this.props.likeCocktail(this.props.cocktail.id);
  }

  render () {
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.cocktail.imageUrl}')`
    }

    let card_classes = "card";
    if (this.props.cocktail.id === this.props.selectedCocktail.id) {
      card_classes += " active";
    }

    let icon_classes = "like-btn btn fas fa-heart"
    if (this.props.likes.includes(this.props.cocktail.id)) {
      icon_classes += " active";
    }

    const id_button = `like${this.props.cocktail.id}`

    return (
      <div className={card_classes} style={style} onClick={this.handleSelect}>
        <div className="card-description">
          <h2>{this.props.cocktail.name}</h2>
          <h2>{this.props.likes}</h2>
        </div>
        <i id={id_button} className={icon_classes} onClick={this.handleLike}></i>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCocktail, setReviews, likeCocktail },
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
