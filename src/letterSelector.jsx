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
    // console.log("disp: ",this.props.disp)
    // generate buttons for each letter
    let letterButtonArr = [];
    for (let i = 0; i < letterArr.length; i += 1) {
        // console.log(letterObj[letterArr[i]])
        letterButtonArr.push(<button 
          key={letterArr[i] + '_button'} 
          className='letterButton' disabled={letterObj[letterArr[i]] ? "disabled" : null}
          onClick = {
          () => {
            this.props.letterClicked(letterArr[i]);
          }
        }>{letterArr[i]}</button>)
    }

    return (
      <div className="letterButtons">
        {letterButtonArr}
      </div>
    )
  }
}

export default LetterSelector;