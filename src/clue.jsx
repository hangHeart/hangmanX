import React, { Component } from 'react';

class Clue extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="clue">{this.props.clue}</div>;
  }
}

export default Clue;
