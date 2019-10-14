import React, { Component } from "react";

class HangViewer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
      console.log("guesses:", this.props.numFailedGuesses)
    return (
      <div>
       {this.props.hang[this.props.numFailedGuesses]}
      </div>
    )
  }
}

export default HangViewer;