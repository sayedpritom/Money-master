// Get numbers
function getInput(id) {
    return Number.parseInt(document.getElementById(id).value);
    
}
// Get the text
function getText(id) {
    return document.getElementById(id);
}

let income = 0;
let balance;

// Main calculation
document.getElementById('calculateBtn').addEventListener('click', () => {
    // Get the input numbers. if undefined the value = 0;
    income = getInput('income') ? getInput('income') : 0;
    const food = getInput('food') ? getInput('food') : 0;
    const rent = getInput('rent') ? getInput('rent') : 0;
    const cloth = getInput('cloth') ? getInput('cloth') : 0;
    // sum
    const total = food + rent + cloth;
    balance = income - total;

    getText('totalExpenses').innerText = total;
    getText('balance').innerText = income - total;
})

// Savings calculation
document.getElementById('saveBtn').addEventListener('click', () => {
    // Get the input numbers. if undefined the value = 0;
    const save = getInput('save') ? getInput('save') : 0;

    // const percentage = save / 100;
    const saving = income * (save / 100);
    getText('savingAmount').innerText = saving;
    getText('remainingBalance').innerText = balance - saving;
})

