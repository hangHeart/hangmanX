import React, { Component } from "react";
import LetterSelector from './letterSelector'
import AnswerViewer from './answerViewer'

class LetterWrapper extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <AnswerViewer 
        answer={this.props.answer}
        disp={this.props.disp}
        />
        <LetterSelector 
        letters={this.props.letters} 
        disp={this.props.disp}
        letterClicked ={this.props.letterClicked}
        />
      </div>
    )
  }
}

export default LetterWrapper;