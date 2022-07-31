import React, { useState } from 'react'
import './App.css';
import blue from './sounds/blue.mp3';
import green from './sounds/green.mp3';
import red from './sounds/red.mp3';
import wrong from './sounds/wrong.mp3';
import yellow from './sounds/yellow.mp3';

function App() {
  const [replayArr, setReplayArr] = useState([]);

  const playAndStoreSound = (file) => {
    let audio = new Audio(file);
    audio.play();
    replayArr.push(audio);
    //console.log("replay sounds here", replayArr);
  }

  const replaySounds = (arr, delay) => {
    //console.log("replay sounds here", replayArr);
    // initialize all calls right away
    arr.forEach((el, i) => {
      setTimeout(() => {
        // each loop, call passed in function
        console.log(arr[i]);
        arr[i].play();

        // stagger the timeout for each loop by the index
      }, i * delay);
    })
  }

  const drum = (file, color) => {
    return (
      <div
        className='instrument'
        style={{
          backgroundColor: color
        }}
        onClick={() => {
          playAndStoreSound(file);
        }}
      ></div>
    )
  }

  return (
    <div className="App">
      <div>
        <button
          className='replay-btn'
          onClick={() => {
            replaySounds(replayArr, 1000)
          }}
        >Replay</button>
      </div>
      {drum(blue, 'blue')}
      {drum(green, 'green')}
      {drum(red, 'red')}
    </div>
  );
}

export default App;
