import React, { Component } from "react";

class Output extends Component {
  state = {
    isWorking: this.props.isWorking // false=break | true=working
  };

  render() {
    const tips = [
      "pat your cat TWICE",
      "go for a walk",
      "having some cholocate",
      "do something MANLY",
      "watch a makeup video on YouTube"
    ];

    const random = Math.floor(Math.random() * tips.length);

    // If working (isWorking: true)
    if (this.props.isWorking()) {
      return (
        <div>
          <p>Relaxing Tip: Time to {tips[random]} ^0^</p>
        </div>
      );
    } else {
      return (
        <>
          <img
            style={{ height: "300px", width: "300px" }}
            src="https://steemitimages.com/640x0/https://img.esteem.ws/j9cu122wtc.jpg"
            alt="dog in pajama"
          />
        </>
      );
    }
    // If in a break (isWorking: false)
  }
}

export default Output;
