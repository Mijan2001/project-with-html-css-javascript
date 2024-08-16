const containerE1 = document.querySelector('.container');
const careers = [
    'Student',
    'Instructor',
    'Teacher',
    'Freelancer',
    'Web-developer',
];
let characterIndex = 0;
let careerIndex = 0;
updateText();
function updateText() {
    characterIndex++;
    containerE1.innerHTML = `<h1>I am 
    ${careers[careerIndex].slice(0, 1) === 'I' ? 'an' : 'a'}
    ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }
    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 200);
}
