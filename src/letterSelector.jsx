import React, { Component } from "react";

class LetterSelector extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    // see what props/state we're getting
    // console.log('props letters are', this.props.letters)
    const letterObj = this.props.letters
    const letterArr = Object.keys(letterObj);
    // console.log('letterArr is', letterArr);

    // generate buttons for each letter
    let letterButtonArr = [];
    for (let i = 0; i < letterArr.length; i += 1) {
      letterButtonArr.push(<button id={letterArr[i] + '_button'} 
        onClick = {
        () => {
          this.props.letterClicked(letterArr[i]);
        }
      }>{letterArr[i]}</button>)
    }

    return (
      <div>
        {letterButtonArr}
      </div>
    )
  }
}

export default LetterSelector;