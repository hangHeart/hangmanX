import React, { Component } from "react";

class Clue extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
       {this.props.clue}
      </div>
    )
  }
}

export default Clue;