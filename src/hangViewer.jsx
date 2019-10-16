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
        {`Number of Guesses: ${this.props.numGuesses}`}
      </div>
    );
  }
}

export default HangViewer;
