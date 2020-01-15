import React, { Component } from "react";

class Button extends Component {

  state={start: this.props.isWorking}

  componentDidUpdate() {
    console.log(this.state.start);
  }

  render() {
    const {start} = this.state
    let display = 'Start';
    if (start) display = 'Stop';
    
    return (
    <input type='button' value={display} onClick={this.props.onClickButton()}/>
    )
  }
}

export default Button;
