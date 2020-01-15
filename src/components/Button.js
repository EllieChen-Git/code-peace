import React, { Component } from "react";

class Button extends Component {

  state={start: this.props.isWorking}

  stateReturn = (event) => {
    this.setState({ hex: event.target.value})
  }

  componentDidUpdate() {
    console.log(this.state.start);
  }

  render() {
    const {start} = this.state

    return (
    <input type='button' value={start} onClick={(event)=>this.props.onClickButton}/>
      )
  }
}

export default Button;
