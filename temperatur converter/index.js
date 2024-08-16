let celsius = document.getElementById('celsius');
let fahrenheight = document.getElementById('fahrenheight');
let kelvin = document.getElementById('kelvin');

celsius.addEventListener('input', () => {
    let c = Number(celsius.value);

    fahrenheight.value = Number((c * 9) / 5 + 32).toFixed(2);
    kelvin.value = Number(c + 273).toFixed(2);
});
fahrenheight.addEventListener('input', () => {
    let f = Number(fahrenheight.value);
    celsius.value = Number(((f - 32) * 5) / 9).toFixed(2);
    kelvin.value = (Number((f - 32) * 5) / 9 + 273).toFixed(2);
});

kelvin.addEventListener('input', () => {
    let k = Number(kelvin.value);
    celsius.value = Number(k - 273).toFixed(2);
    fahrenheight.value = Number(((k - 273) * 9) / 5 + 32).toFixed(2);
});
