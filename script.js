const timer = document.querySelector(".timer");
const startt = document.getElementById("start");
const stopp = document.getElementById("stop");
const resett = document.getElementById("reset");

startt.addEventListener("click", start);
stopp.addEventListener("click", stop);
resett.addEventListener("click", reset);

let seconds = 0;
let interval = null;

// timer function

function watch() {
  seconds++;
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;

  if (secs < 10) {
    secs = "0" + secs;
  }

  if (mins < 10) {
    mins = "0" + mins;
  }

  if (hrs < 10) {
    hrs = "0" + hrs;
  }

  timer.innerText = `${hrs}:${mins}:${secs}`;
}

function start() {
  if (interval) {
    return;
  }
  interval = setInterval(watch, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  seconds = 0;
  timer.innerHTML = "00:00:00";
}
