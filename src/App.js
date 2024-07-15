import { useEffect, useRef, useState } from 'react'
import Button from './components/Button'
import incrementTimer from './utils/incrementTimer';
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";

function App() {
  const [myTimer, setMyTimer] = useState({h: 5, m: 59, s: 20})
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
    <div className="h-screen bg-cyan-700 flex justify-center items-center">
      <main className="h-80 w-96 bg-orange-100 rounded-2xl">
        <div className="h-2/3 text-5xl flex justify-center items-center"><p>{myTimer.h} : {myTimer.m} : {myTimer.s}</p></div>
        <div className="flex justify-center items-center">
          <Button
            onclick={handlerPlay}
            extraStlyles={isTimerPlaying ? "mr-3 bg-yellow-400 hover:bg-yellow-500" : "mr-3 bg-green-400 hover:bg-green-500"}
          >
            {isTimerPlaying ? (<FaPause />) : (<FaPlay/>) }
          </Button>
          <Button onclick={handlerReset} extraStlyles="bg-red-400 hover:bg-red-500" >
            <FaArrowRotateLeft/>
          </Button>
        </div>
      </main>
    </div>
  );
}

export default App;
