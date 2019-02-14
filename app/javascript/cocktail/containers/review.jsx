import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteReview } from '../actions';

class Review extends Component {

  handleDelete = (event) => {
    event.stopPropagation();
    this.props.deleteReview(this.props.review.cocktail_id, this.props.review.id);
  }

  render () {

    const idTrash = `delete${this.props.review.id}`
    let trashClasses = "delete-btn btn fas fa-trash";
    if (this.props.review.user_id === this.props.user.id) {
      trashClasses += " visible";
    }

    return (
      <div className="review">
        <div className="review-name">
          <h3>{this.props.review.user_email}</h3>
          <p>{this.props.review.created_at}</p>
        </div>
        <div className="review-body">
          <p><strong>{this.props.review.title}</strong></p>
          <p>
            {this.props.review.content}
          </p>
        </div>
        <div className="review-status">
          <ul className="list-inline product-controls">
            <i id={idTrash} className={trashClasses} onClick={this.handleDelete}></i>
          </ul>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { deleteReview },
    dispatch
  )
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Review);
