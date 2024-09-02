const imgURL = 'https://picsum.photos/200/300';
const imgSlider = document.getElementById('imgSlider');
const textSlider = document.getElementById('textSlider');
let updatedImg = 1;

setInterval(() => {
    let imgChange = `https://picsum.photos/200/300?random=${updatedImg}`;
    updatedImg++;
    imgSlider.src = imgChange;
}, 2000);
