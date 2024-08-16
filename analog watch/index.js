const hourE1 = document.querySelector('.hour');

const minuteE1 = document.querySelector('.minute');

const secondE1 = document.querySelector('.second');

setInterval(updateTIme, 1000);

function updateTIme() {
    const date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hourDeg = 6 * h;
    let minuteDeg = 6 * m;
    let secondDeg = 6 * s;

    hourE1.style.transform = `rotate(${hourDeg}deg)`;
    minuteE1.style.transform = `rotate(${minuteDeg}deg)`;
    secondE1.style.transform = `rotate(${secondDeg}deg)`;
}
