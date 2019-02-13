import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Review extends Component {

  render () {

    return (
      <div>
        <h4>{this.props.review.title}</h4>
        <p>{this.props.review.description}</p>
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
