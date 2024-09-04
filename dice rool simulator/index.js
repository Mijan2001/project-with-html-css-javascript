const parentDiv = document.querySelector('.parentDiv');
const bodyControl = document.querySelector('.bodyControl');
const left = document.createElement('div');
const right = document.createElement('div');

// console.log(parentDiv, bodyControl, left, right);

const btnEl = document.querySelector('.btnEl');

const handleClick = e => {
    e.preventDefault();
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const parentIconDIv = document.getElementById('toshDice');

    const diceIconCls = document.querySelector('.diceIconCls');
    const removePreviousCLass = diceNumber => {
        const iconCls = document.createElement('i');
        if (diceNumber === 1) {
            if (diceIconCls) {
                parentIconDIv.removeChild(diceIconCls);
                iconCls.classList.add('fa-solid', 'fa-dice-one', 'diceIconCls');
                parentIconDIv.appendChild(iconCls);
            }
            right.classList.add('fa-dice-one');
        } else if (diceNumber === 2) {
            if (diceIconCls) {
                parentIconDIv.removeChild(diceIconCls);
                iconCls.classList.add('fa-solid', 'fa-dice-two', 'diceIconCls');
                parentIconDIv.appendChild(iconCls);
            }
            right.classList.add('fa-dice-two');
        } else if (diceNumber === 3) {
            if (diceIconCls) {
                parentIconDIv.removeChild(diceIconCls);
                iconCls.classList.add(
                    'fa-solid',
                    'fa-dice-three',
                    'diceIconCls'
                );
                parentIconDIv.appendChild(iconCls);
            }
            right.classList.add('fa-dice-three');
        } else if (diceNumber === 4) {
            if (diceIconCls) {
                parentIconDIv.removeChild(diceIconCls);
                iconCls.classList.add(
                    'fa-solid',
                    'fa-dice-four',
                    'diceIconCls'
                );
                parentIconDIv.appendChild(iconCls);
            }
            right.classList.add('fa-dice-four');
        } else if (diceNumber === 5) {
            if (diceIconCls) {
                parentIconDIv.removeChild(diceIconCls);
                iconCls.classList.add(
                    'fa-solid',
                    'fa-dice-five',
                    'diceIconCls'
                );
                parentIconDIv.appendChild(iconCls);
            }
            right.classList.add('fa-dice-five');
        } else if (diceNumber === 6) {
            if (diceIconCls) {
                parentIconDIv.removeChild(diceIconCls);
                iconCls.classList.add('fa-solid', 'fa-dice-six', 'diceIconCls');
                parentIconDIv.appendChild(iconCls);
            }
            right.classList.add('fa-dice-six');
        }
    };

    const randomNumber = getRandomInt(1, 6);
    const iconEl = document.getElementById('iconEl');

    right.classList.add('fa-solid');
    if (randomNumber === 1) {
        removePreviousCLass(1);

        left.innerHTML = '<b><h3>Roll 1 : </h3></b>';
        right.classList.add('fa-dice-one');
    } else if (randomNumber === 2) {
        removePreviousCLass(2);

        // right.classList.add('fa-dice-two');
        left.innerHTML = '<b><h3>Roll 2 : </h3></b>';
        right.classList.add('fa-dice-two');
    } else if (randomNumber === 3) {
        removePreviousCLass(3);

        // right.classList.add('fa-dice-three');
        left.innerHTML = '<b><h3>Roll 3 : </h3></b>';
        right.classList.add('fa-dice-three');
    } else if (randomNumber === 4) {
        removePreviousCLass(4);

        // right.classList.add('fa-dice-four');
        left.innerHTML = '<b><h3>Roll 4 : </h3></b>';
        right.classList.add('fa-dice-four');
    } else if (randomNumber === 5) {
        removePreviousCLass(5);

        // right.classList.add('fa-dice-five');
        left.innerHTML = '<b><h3>Roll 5 : </h3></b>';
        right.classList.add('fa-dice-five');
    } else if (randomNumber === 6) {
        removePreviousCLass(6);

        // right.classList.add('fa-dice-six');
        left.innerHTML = '<b><h3>Roll 6 : </h3></b>';
        right.classList.add('fa-dice-six');
    }

    const bodyControlEl = document.createElement('div');
    bodyControlEl.classList.add('bodyControl');
    left.classList.add('left');
    right.classList.add('right');
    right.appendChild(iconEl);
    bodyControlEl.appendChild(left);
    bodyControlEl.appendChild(right);
    parentDiv.classList.add('parentDiv');
    parentDiv.appendChild(bodyControlEl);
    const toshDice = document.getElementById('toshDice');
    // toshDice.appendChild(iconEl);
    console.log(iconEl, toshDice);
};

btnEl.addEventListener('click', handleClick);
