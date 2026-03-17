let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const timeDisplay = document.getElementById("time");
const lapsContainer = document.getElementById("laps");

function formatTime(ms) {
  let milliseconds = Math.floor((ms % 1000) / 10);
  let seconds = Math.floor((ms / 1000) % 60);
  let minutes = Math.floor((ms / (1000 * 60)) % 60);
  let hours = Math.floor(ms / (1000 * 60 * 60));

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
}

function startStopwatch() {
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timeDisplay.textContent = formatTime(elapsedTime);
  }, 10);
}

function pauseStopwatch() {
  clearInterval(timerInterval);
}

function resetStopwatch() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  timeDisplay.textContent = "00:00:00.00";
  lapsContainer.innerHTML = "";
}

function recordLap() {
  if (elapsedTime === 0) return;

  const lap = document.createElement("li");
  lap.textContent = formatTime(elapsedTime);
  lapsContainer.prepend(lap);
}

// Event Listeners
let running = false;

document.getElementById("startBtn").onclick = () => {
  if (!running) {
    startStopwatch();
    running = true;
    document.getElementById("startBtn").textContent = "Pause";
  } else {
    pauseStopwatch();
    running = false;
    document.getElementById("startBtn").textContent = "Start";
  }
};

document.getElementById("resetBtn").onclick = resetStopwatch;
document.getElementById("lapBtn").onclick = recordLap;