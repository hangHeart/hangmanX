import React, { Component } from "react";
import LetterSelector from './letterSelector'

class LetterWrapper extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <LetterSelector letters={this.props.letters} />
      </div>
    )
  }
}

export default LetterWrapper;