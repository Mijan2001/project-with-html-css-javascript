const startEl = document.querySelector('.start');
const stopEl = document.querySelector('.stop');
const resetEl = document.querySelector('.reset');

const visibleTimeEl = document.querySelector('.visibleTime');
const currTime = Date.now();
let updateValue = 1;
let clearInterValId;
let elapsedTime = 0;
let startTime = 0;

const timeUpdate = elapsedTime => {
    let miliseconds = Math.floor((elapsedTime % 1000) / 10);
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    return (
        (hours ? (hours > 9 ? hours : '0' + hours) : '00') +
        ':' +
        (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') +
        ':' +
        (seconds ? (seconds > 9 ? seconds : '0' + seconds) : '00') +
        ':' +
        (miliseconds > 9 ? miliseconds : '0' + miliseconds)
    );
};

startEl.addEventListener('click', () => {
    startTime = Date.now() - elapsedTime;

    clearInterValId = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        visibleTimeEl.innerText = timeUpdate(elapsedTime);
    }, 10);
    console.log(elapsedTime);
});

stopEl.addEventListener('click', () => {
    clearInterval(clearInterValId);
    // visibleTimeEl.innerText = updateValue;
    // console.log(clearInterValId, updateValue);
});
resetEl.addEventListener('click', () => {
    clearInterval(clearInterValId);
    visibleTimeEl.innerText = '00:00:00';
    updateValue = 0;
});
console.log(currTime);
