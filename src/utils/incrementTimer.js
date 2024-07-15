import regulateTimer from "./regulateTimer"

export default function incrementTimer( timer ){
  let localTimer = {...timer}

  localTimer.s++
  localTimer = regulateTimer(localTimer)

  return localTimer
}