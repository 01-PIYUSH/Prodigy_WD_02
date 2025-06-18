let [hours, minutes, seconds] = [0,0,0];
let display = document.querySelector(".display");
let interval = null;
function updatedisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerHTML = `${h}:${m}:${s}`;
}

function play() {
  if (interval !== null) {
    return;
  } 
  interval = setInterval(() => {
    seconds++;
    if(seconds===60)
    {
        seconds=0;
        minutes++
    }
    if(minutes===60)
    {
        minutes=0;
        hours++;
    }
    updatedisplay();
  }, 1000);
}

function pause(){
    clearInterval(interval);
    interval=null;
}

function reset(){
  pause();
  [hours, minutes, seconds] = [0, 0, 0];
  updatedisplay();
  document.querySelector(".laps").innerHTML = ""; 
  lapCount = 1; 
}
function laps(){
  let lapTime=display.innerHTML;
  let li=document.createElement('li');
    li.innerHTML="Lap : "+lapTime;
    document.querySelector('.laps').appendChild(li);  

}
