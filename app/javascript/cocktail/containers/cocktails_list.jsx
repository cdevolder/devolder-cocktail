import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCocktails } from '../actions/cocktail_actions';
import { setLikes } from '../actions/like_actions';

import Cocktail from '../containers/cocktail';

class CocktailsList extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  }

  componentWillMount() {
    this.props.setCocktails();
    this.props.setLikes();
  }

  render () {
    let filteredCocktails = this.props.cocktails.filter(
      (cocktail) => {
        return cocktail.name.toLowerCase().indexOf(this.state.search) !== -1
      }
    );

    return (
      <div className="cocktail-list">
        <input
          ref={(input) => { this.messageBox = input; }}
          type="text"
          autoComplete="off"
          value={this.state.search}
          onChange={this.handleChange}
          placeholder="Search cocktail..."
          className="form-control search-form"
        />
        {filteredCocktails.map((cocktail) => <Cocktail cocktail={cocktail} key={cocktail.id} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCocktails: setCocktails, setLikes },
    dispatch
  )
}

function mapStateToProps(state) {
  return {
    cocktails: state.cocktails
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CocktailsList);
