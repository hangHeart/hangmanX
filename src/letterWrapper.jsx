import React, { Component } from "react";
import LetterSelector from './letterSelector'

class LetterWrapper extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <LetterSelector letters={this.props.letters} letterClicked = {this.props.letterClicked}/>
      </div>
    )
  }
}

export default LetterWrapper;