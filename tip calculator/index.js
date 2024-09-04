const btn = document.getElementById('btn');
const totalValueEl = document.getElementById('totalValue');

let currValue = 0;

console.log(totalValue);
btn.addEventListener('click', e => {
    e.preventDefault();
    const billValue = document.getElementById('billValue').value;
    const tipValue = document.getElementById('tipValue').value;
    let currBillValue = billValue;
    let currTipValue = tipValue;
    let totalValue = currBillValue - currTipValue / 100;
    totalValueEl.innerText = `Total : ${totalValue}`;
});

console.log(currBillValue, currTipValue);
