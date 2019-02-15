import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createReview } from '../actions/review_actions';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createReview(this.props.selectedCocktail.id, this.state.value);
    this.setState({ value: '' }); // Reset message input
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group review-form">
          <input
            ref={(input) => { this.messageBox = input; }}
            type="text"
            autoComplete="off"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Add new review"
            className="form-control review-input"
          />
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createReview },
    dispatch);
}

function mapStateToProps(state) {
  return {
    selectedCocktail: state.selectedCocktail
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
