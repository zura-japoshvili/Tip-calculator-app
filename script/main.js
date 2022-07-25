let inBill = document.querySelector(".in-bill"),
    peopleNum = document.querySelector(".people-num"),
    customTip = document.querySelector(".custom-tip"),
    tipAmount = document.querySelector('.tip-amount'),
    totalAmount = document.querySelector(".total"),
    resetBtn = document.querySelector(".reset");

let tipBtns = document.querySelectorAll(".btn-wrapper button");

let btnValue = 0,
    resetActive = false;

inBill.onkeyup = function() {calculate()};
peopleNum.onkeyup = function() {calculate()};
customTip.onkeyup = function() {calculate()};

tipBtns.forEach(value => value.addEventListener('click', function(value){
    let currentBtn = value.currentTarget;
    if(btnValue !== currentBtn.textContent){
        btnValue = parseInt(currentBtn.textContent);
    }
    else{
        btnValue = 0;
    }
    calculate();
}))
function calculate(){
    let tip = 0,
        total = 0;
    const people = parseInt(peopleNum.value),
        billValue  = parseFloat(inBill.value);
    if(btnValue > 0){
        tip = (parseFloat((btnValue / 100) * billValue)).toFixed(2);
    }
    else{
        tip = (parseFloat((parseInt(customTip.value) / 100) * billValue)).toFixed(2);
    }

    total = (billValue + parseFloat(tip)) / people;
    tipAmount.textContent = "$" + tip;
    totalAmount.textContent = "$" + parseFloat(total);
}
