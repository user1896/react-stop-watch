import './App.css';
import { useEffect, useRef, useState } from 'react'
import Button from './components/Button'
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";

function regulateTimer(timer){
  while( timer.s > 59 ){
    timer.s -= 60
    timer.m++
  }

  while( timer.m > 59 ){
    timer.m -= 60
    timer.h++
  }

  if( timer.h > 23 ){
    timer.h = 24
    timer.m = 0
    timer.s = 0
  }

  return timer
}

function incrementTimer( timer ){
  let localTimer = {...timer}

  localTimer.s++
  localTimer = regulateTimer(localTimer)

  return localTimer
}

function App() {
  const [myTimer, setMyTimer] = useState({h: 5, m: 159, s: 159})
  const timerIntervalRef = useRef(null)
  const [isTimerPlaying, setIsTimerPlaying] = useState(false)

  function handlerPlay(){
    setIsTimerPlaying(!isTimerPlaying)
  }
  
  useEffect(() => {
    if(isTimerPlaying == true){
      timerIntervalRef.current = setInterval(() => {
        setMyTimer(incrementTimer(myTimer))
      }, 1000)
    }

    return () => clearInterval(timerIntervalRef.current)
  }, [myTimer, isTimerPlaying])

  function handlerReset(){
    clearInterval(timerIntervalRef.current)
    setMyTimer({h: 0, m: 0, s: 0})
  }

  return (
    <div className="App flex-center">
      <main>
        <div className="timer flex-center"><p>{myTimer.h}:{myTimer.m}:{myTimer.s}</p></div>
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
