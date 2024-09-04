const handleImagChangerRandomly = () => {
    const productImg1 = document.querySelector('.productImg');
    productImg1.src = `https://picsum.photos/200/200?random=1`;

    function generateRandomNumbers(count, min, max) {
        const randomNumbers = [];
        for (let i = 0; i < count; i++) {
            const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            randomNumbers.push(randomNum);
        }
        return randomNumbers;
    }

    const imgIndex = generateRandomNumbers(5, 1, 100);
    console.log(imgIndex);

    const parentContent = document.getElementById('parentContent');

    // generateRandomText
    function getRandomWord() {
        const words = [
            'lorem',
            'ipsum',
            'dolor',
            'sit',
            'amet',
            'consectetur',
            'adipiscing',
            'elit',
            'sed',
            'do',
            'eiusmod',
            'tempor',
            'incididunt',
            'ut',
            'labore',
            'et',
            'dolore',
            'magna',
            'aliqua',
            'ut',
            'enim',
            'ad',
            'minim',
            'veniam',
            'quis',
            'nostrud',
            'exercitation',
            'ullamco',
            'laboris',
            'nisi',
            'ut',
            'aliquip',
            'ex',
            'ea',
            'commodo',
            'consequat',
            'duis',
            'aute',
            'irure',
            'dolor',
            'in',
            'reprehenderit',
            'in',
            'voluptate',
            'velit',
            'esse',
            'cillum',
            'dolore',
            'eu',
            'fugiat',
            'nulla',
            'pariatur',
            'excepteur',
            'sint',
            'occaecat',
            'cupidatat',
            'non',
            'proident',
            'sunt',
            'in',
            'culpa',
            'qui',
            'officia',
            'deserunt',
            'mollit',
            'anim',
            'id',
            'est',
            'laborum'
        ];
        // Return a random word from the list
        return words[Math.floor(Math.random() * words.length)];
    }

    // Function to generate a string of 120 random words
    function generateRandomTextContent(wordAmount) {
        let text = '';
        for (let i = 0; i < wordAmount; i++) {
            text += getRandomWord() + ' '; // Append a random word and a space
        }
        return text.trim(); // Remove any trailing whitespace
    }

    const generateRandomText = count => {
        for (let index = 0; index < count; index++) {
            const innnerBodyElement = document.createElement('div');
            const sectionEl = document.createElement('section');
            const imgEl = document.createElement('img');
            const h3El = document.createElement('h3');
            const pEl = document.createElement('p');
            const btnEl = document.createElement('button');

            // console.log(divEl, sectionEl, imgEl, h3El, pEl, btnEl);

            h3El.innerText = generateRandomTextContent(3);
            h3El.classList.add('h3Cls');
            imgEl.classList.add('imgCls');

            imgEl.src = `https://picsum.photos/200/200?random=${imgIndex[index]}`;
            btnEl.innerText = 'VIEW RECEPI';
            btnEl.classList.add('btnCls', 'btnCls:hover');
            sectionEl.classList.add('sectionCls');
            innnerBodyElement.classList.add('innnerBodyElement');
            pEl.innerText = generateRandomTextContent(100);

            sectionEl.appendChild(imgEl);
            sectionEl.appendChild(h3El);
            sectionEl.appendChild(pEl);
            sectionEl.appendChild(btnEl);
            innnerBodyElement.appendChild(sectionEl);
            parentContent.appendChild(innnerBodyElement);
        }
    };

    generateRandomText(5);
};

handleImagChangerRandomly();
