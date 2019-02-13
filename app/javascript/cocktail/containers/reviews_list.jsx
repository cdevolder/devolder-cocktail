import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setReviews } from '../actions';

import Review from '../containers/review';
import ReviewForm from '../containers/review_form';

class ReviewsList extends Component {

  componentWillMount() {
    this.props.setReviews(this.props.selectedCocktail.id);
  }

  render() {

    return (
      <div className="review-container">
        <ReviewForm />
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
