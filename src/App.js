import React, { Component } from "react";
import Output from "./components/Output";
import Clock from "./components/Clock";
import Button from "./components/Button";

class App extends Component {

  state = {
    recordings: []
  }

  componentDidMount(){

    // console.log("App component DID MOUNT");

    let rawRecordings = localStorage.getItem("RECORDINGS");

    // console.log(`Storage has: ${rawRecordings}`);
    
    if (!rawRecordings){
      rawRecordings = [];
    } else {
      rawRecordings = JSON.parse(rawRecordings);
    }
    this.setState({ recordings: rawRecordings })

  }

  isWorking = () => {

    console.log(`Length: ${this.state.recordings.length}`);

    const lastRecording = this.state.recordings.length ? this.state.recordings[ this.state.recordings.length - 1 ] : {};
    
    console.log(`lastRecording: ${JSON.stringify(lastRecording)}`);

    if (lastRecording.stop_time){
      return false;
    } else {
      return true;
    }

  }

  onClickButton = () => {
    
    const recordings = this.state.recordings;

    const currTime = new Date();
    const recording = Math.round(currTime.getTime() / 1000);

    let lastRecording;
    let newRecordingsState;

    if (!this.isWorking()){

      lastRecording = recordings[ recordings.length - 1 ]
      lastRecording.stop_time = recording;

      newRecordingsState = recordings.slice ( 0, recordings.length - 1 )
      newRecordingsState.push( lastRecording )

    } else {
      lastRecording = { start_time: recording }
      newRecordingsState = [ ...recordings ]
      newRecordingsState.push( lastRecording )

    }

    localStorage.setItem("RECORDINGS", JSON.stringify(newRecordingsState));
    this.setState({recordings: newRecordingsState});
  }

  render() {

      const { recordings } = this.state;

      return (
        <>
          <h1>Code Peace</h1>
          <h2>{JSON.stringify(this.state.recordings)}</h2>
          <Output isWorking={ this.isWorking } />
          <Clock recordings={ recordings } />
          <Button isWorking={ this.isWorking } onClickButton={ this.onClickButton } />
        </>
      );

    }
}

export default App;


const now = new Date()  
const secondsSinceEpoch = Math.round(now.getTime() / 1000)  