const startE1 = document.getElementById('start');
const stopE1 = document.getElementById('stop');
const resetE1 = document.getElementById('reset');
const timerE1 = document.getElementById('timer');

let interval;
let timeLeft = 25;

function updateTime() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = minutes % 60;
    let formatedTime = `${minutes}:${seconds}`;

    timerE1.innerHTML = formatedTime;
    console.log(formatedTime);
    timeLeft += 1;
    console.log(timeLeft);
    setTimeout(() => {
        updateTime();
    }, 1000);
}

// updateTime();

startE1.addEventListener('click', () => {
    timeLeft = 0;
    updateTime();
});
