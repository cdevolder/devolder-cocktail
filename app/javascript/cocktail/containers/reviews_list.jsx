import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setReviews } from '../actions/review_actions';

import Review from '../containers/review';

class ReviewsList extends Component {

  componentWillMount() {
    this.props.setReviews(this.props.selectedCocktail.id);
  }

  render() {

    return (
      <div className="review-container">
        {this.props.reviews.map((review) => <Review review={review} key={review.id} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setReviews: setReviews },
    dispatch
  )
}

function mapStateToProps(state) {
  return {
    selectedCocktail: state.selectedCocktail,
    reviews: state.reviews
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
