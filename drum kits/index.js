const kits = ['snare', 'kick', 'crash', 'tom'];
const containerE1 = document.querySelector('.container');
console.log(containerE1);

kits.forEach((kit) => {
    const btnE1 = document.createElement('button');

    btnE1.innerText = kit;
    btnE1.classList.add('btn');

    containerE1.appendChild(btnE1);

    const audioE1 = document.createElement('audio');
    audioE1.src = 'sounds/' + kit + '.mp3';

    btnE1.addEventListener('click', () => {
        audioE1.play();
    });
});
