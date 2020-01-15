import React, { Component } from "react";

class Button extends Component {

  render() {

    const display = this.props.isWorking() ? "Stop" : "Start"
    
    return (
      <input type='button' value={display} onClick={this.props.onClickButton}/>
    )
  }
}

export default Button;
