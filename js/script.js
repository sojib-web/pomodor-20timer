const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
// let timerleft = 1500;
let timerleft = 10;

const updateTimer = () => {
  let minutes = Math.floor(timerleft / 60);
  // @ts-ignore
  const seconds = timerleft % 60;
  // @ts-ignore
  let formatedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  // @ts-ignore
  timerEl.innerHTML = formatedTime;
};

updateTimer();

const startTimer = () => {
  interval = setInterval(() => {
    timerleft--;
    updateTimer();
    if (timerleft === 0) {
      clearInterval(interval);
      alert("Time's up!");
      timerleft = 10;
    }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(interval);
};

stopTimer();
const resetTimer = () => {
  clearInterval(interval);
  timerleft = 10;
  updateTimer();
};
// @ts-ignore
startEl.addEventListener("click", startTimer);
// @ts-ignore
stopEl.addEventListener("click", stopTimer);
// @ts-ignore
resetEl.addEventListener("click", resetTimer);
