import './App.css';
import { useState } from 'react'
import Button from './components/Button'
import WatchTime from "./components-modules/watchTimeModule.mjs"
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";

function App() {
  // let myTimer = new WatchTime(5, 159, 159)
  const [index, setIndex] = useState(0)

  function handlerPlay(){
    setIndex(index+1)
  }

  function handlerReset(){
    setIndex(0)
  }

  return (
    <div className="App flex-center">
      <main>
        {/* <div className="timer flex-center">{myTimer.showTimer()}</div> */}
        <div className="timer flex-center">{index}</div>
        <div className="control flex-center">
          <Button onclick={handlerPlay}>
            <FaPlay className="play"/>
          </Button>
          <Button onclick={handlerReset}>
            <FaArrowRotateLeft className="reset"/>
          </Button>
        </div>
      </main>
    </div>
  );
}

export default App;
