import React, { Component } from "react";

class Clock extends Component {

  state = {
    secondsPassed: 0
  }

  componentDidMount() {

    const {isWorking, recordings } = this.props;

    if(isWorking()) {
      
      const starTime = recordings[recordings.length - 1].start_time;
      const currTime = Math.round(new Date().getTime() / 1000);

      this.setState({secondsPassed: currTime - starTime})
    }

    setInterval( () => {
      let { secondsPassed } = this.state;
      secondsPassed++;
      this.setState( { secondsPassed } )
    },
    1000 );

  }

  getTimerFormat = () => {

    const { secondsPassed } = this.state;

    const seconds = secondsPassed % 60;
    const minutes = Math.floor( secondsPassed / 60 );
    const hours = Math.floor( secondsPassed / 60 / 60 );
    

    return `${hours}:${minutes}:${seconds}`

  }

  render() {

    const { isWorking } = this.props;

    return(
            <>
            { isWorking() && this.getTimerFormat() }
            </>
    );
  }
}

export default Clock;
