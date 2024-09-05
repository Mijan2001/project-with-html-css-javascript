const startEl = document.querySelector('.start');
const stopEl = document.querySelector('.stop');
const resetEl = document.querySelector('.reset');

const visibleTimeEl = document.querySelector('.visibleTime');

const currTime = Date.now();
let updateValue = 1;
let clearInterValId;

startEl.addEventListener('click', () => {
    clearInterValId = setInterval(() => {
        visibleTimeEl.innerText = updateValue++;
    }, 16.67);
});

stopEl.addEventListener('click', () => {
    clearInterval(clearInterValId);
    visibleTimeEl.innerText = updateValue;
    console.log(clearInterValId, updateValue);
});
resetEl.addEventListener('click', () => {
    clearInterval(clearInterValId);
    visibleTimeEl.innerText = '00:00:00';
    updateValue = 0;
});
console.log(currTime);
