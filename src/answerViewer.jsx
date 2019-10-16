import React, { Component } from "react";

class AnswerViewer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log('disp is', this.props.disp);

    // generate our array of string characters
    let dispCharArray = [];
    for (let i = 0; i < this.props.disp.length; i += 1) {
      dispCharArray.push(<span
        className='answerLetter'
        key={'answer_letter'+ i}>{this.props.disp[i]}</span>)
    }

    return (
    <div id="answerViewer">
      {this.props.disp}
    </div>
    )
  }
}

export default AnswerViewer;