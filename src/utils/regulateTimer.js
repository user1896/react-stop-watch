export default function regulateTimer(timer){
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