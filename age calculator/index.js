const birthDate = document.getElementById('birthday');
const currentAge = document.getElementById('result');

const date = new Date();
const cYear = date.getFullYear();
const cMonth = date.getMonth() + 1;
const cDay = date.getDate();
console.log(cYear, cMonth, cDay);

birthDate.addEventListener('change', () => {
    currentAge.innerHTML = birthDate.value;
    const curr = birthDate.value;
    const year = Number(curr.slice(0, 4));
    const month = Number(curr.slice(5, 7));
    const day = Number(curr.slice(8, 10));
    let newDay;
    let newMonth;
    let newYear;

    if (cDay >= day) {
        newDay = cDay - day;
    } else {
        newDay = cDay + 30 - date;
        cMonth -= 1;
    }

    if (cMonth >= month) {
        newMonth = cMonth - month;
    } else {
        cMonth = cMonth + 12 - month;
        cYear -= 1;
    }
    newYear = cYear - year;
    currentAge.innerHTML = `Your age is ${newYear} years old`;
});
