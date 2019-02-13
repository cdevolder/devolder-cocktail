import React, { Component } from 'react';
import { connect } from 'react-redux';

class Map extends Component {

  render() {

    return (
      <div style={{ height: '50vh'}}>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(Map);
