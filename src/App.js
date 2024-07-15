import './App.css';
import { useEffect, useRef, useState } from 'react'
import Button from './components/Button'
import WatchTime from "./components-modules/watchTimeModule.mjs"
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";

function App() {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  
  function handlerPlay(){
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    if(isPlaying == true){
      intervalRef.current = setInterval(() => {
        setIndex(index+1)
      }, 1000)
    }

    return () => clearInterval(intervalRef.current)
  }, [index, isPlaying])

  function handlerReset(){
    // intervalRef.current = null
    clearInterval(intervalRef.current)
    console.log(intervalRef.current)
    setIndex(0)
  }

  return (
    <div className="App flex-center">
      <main>
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
