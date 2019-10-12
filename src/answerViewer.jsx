import React, { Component } from "react";

class AnswerViewer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('answer is', this.props.answer);

    // generate our array of string characters
    let answerCharArray = [];
    for (let i = 0; i < this.props.answer.length; i += 1) {
      answerCharArray.push(<span
        className='answerLetter'
        key={'answer_letter'+ i}>{this.props.answer[i]}</span>)
    }

    return (
    <div>
      {answerCharArray}
    </div>
    )
  }
}

export default AnswerViewer;