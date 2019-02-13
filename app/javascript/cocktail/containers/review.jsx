import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Review extends Component {

  render () {

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
            <li><a href=""><i className="fas fa-heart"></i></a></li>
            <li><a href=""><i className="fas fa-trash"></i></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {  },
    dispatch
  )
}


export default connect(null, mapDispatchToProps)(Review);
