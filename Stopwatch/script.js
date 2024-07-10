let startTime, updateInterval;
let elapsedTime = 0;
let isRunning = false;

const display = {
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
    milliseconds: document.getElementById('milliseconds')
};

const buttons = {
    start: document.getElementById('start'),
    pause: document.getElementById('pause'),
    reset: document.getElementById('reset'),
    lap: document.getElementById('lap')
};

const laps = document.getElementById('laps');

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function updateDisplay() {
    const now = Date.now();
    elapsedTime = now - startTime;
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    display.minutes.textContent = formatTime(minutes);
    display.seconds.textContent = formatTime(seconds);
    display.milliseconds.textContent = formatTime(milliseconds);
}

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        updateInterval = setInterval(updateDisplay, 10);
        isRunning = true;
    }
}

function pause() {
    if (isRunning) {
        clearInterval(updateInterval);
        isRunning = false;
    }
}

function reset() {
    clearInterval(updateInterval);
    isRunning = false;
    elapsedTime = 0;
    display.minutes.textContent = '00';
    display.seconds.textContent = '00';
    display.milliseconds.textContent = '00';
    laps.innerHTML = '';
}

function lap() {
    if (isRunning) {
        const lapTime = `${display.minutes.textContent}:${display.seconds.textContent}:${display.milliseconds.textContent}`;
        const li = document.createElement('li');
        li.textContent = lapTime;
        laps.appendChild(li);
    }
}

buttons.start.addEventListener('click', start);
buttons.pause.addEventListener('click', pause);
buttons.reset.addEventListener('click', reset);
buttons.lap.addEventListener('click', lap);