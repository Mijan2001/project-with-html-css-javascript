// const randomQuotes = [
//     'adventure',
//     'awaits',
//     'those',
//     'who',
//     'dare',
//     'to',
//     'explore',
//     'the',
//     'unknown',
//     'embrace',
//     'the',
//     'journey',
//     'and',
//     'find',
//     'strength',
//     'in',
//     'challenges',
//     'along',
//     'the',
//     'way',
//     'every',
//     'step',
//     'forward',
//     'is',
//     'a',
//     'step',
//     'towards',
//     'personal',
//     'growth',
//     'and',
//     'discovery',
//     'let',
//     'your',
//     'curiosity',
//     'guide',
//     'you',
//     'to',
//     'new',
//     'horizons',
//     'and',
//     'beyond'
// ];

// const btn = document.getElementById('btn');
// const addedCode = document.getElementById('generate-code');

// btn.addEventListener('click', () => {
//     let words = [];
//     let string;
//     for (let i = 0; i < 40; i++) {
//         let word = Math.round(Math.random() * 50 + 1);
//         words.push(randomQuotes[word]);
//         string = words.join(' ');
//     }

//     addedCode.innerText = string;
// });

const imageUrls = [
    'https://example.com/path/to/image1.jpg',
    'https://example.com/path/to/image2.jpg',
    'https://example.com/path/to/image3.jpg'
];

imageUrls.forEach(url => {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(
                    'Network response was not ok ' + response.statusText
                );
            }
            return response.blob();
        })
        .then(blob => {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(blob);
            img.alt = 'Fetched Image';
            img.style.maxWidth = '100%';
            document.body.appendChild(img);
        })
        .catch(error => {
            console.error(
                'There has been a problem with your fetch operation:',
                error
            );
        });
});
