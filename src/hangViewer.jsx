import React, { Component } from 'react';

class HangViewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log("guesses:", this.props.numFailedGuesses)
    return (
      <div className="hangviewer">
        {this.props.hang[this.props.numGuesses]} <br />
        <br />
        {`Number of ♥: ${this.props.numGuesses}`}
      </div>
    );
  }
}

export default HangViewer;
