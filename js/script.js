// // Get numbers
// function getInput(id) {
//     return Number.parseInt(document.getElementById(id).value);

// }
// // Get the text
// function getText(id) {
//     return document.getElementById(id);
// }

// let income = 0;
// let balance;

// // Main calculation
// document.getElementById('calculateBtn').addEventListener('click', () => {
//     // Get the input numbers. if undefined the value = 0;
//     income = getInput('income') ? getInput('income') : 0;
//     const food = getInput('food') ? getInput('food') : 0;
//     const rent = getInput('rent') ? getInput('rent') : 0;
//     const cloth = getInput('cloth') ? getInput('cloth') : 0;
//     // sum
//     const total = food + rent + cloth;
//     balance = income - total;

//     getText('totalExpenses').innerText = total;
//     getText('balance').innerText = income - total;
// })

// // Savings calculation
// document.getElementById('saveBtn').addEventListener('click', () => {
//     // Get the input numbers. if undefined the value = 0;
//     const save = getInput('save') ? getInput('save') : 0;

//     // const percentage = save / 100;
//     const saving = income * (save / 100);
//     getText('savingAmount').innerText = saving;
//     getText('remainingBalance').innerText = balance - saving;
// })

// --------------------------------
// Get numbers
let income = 0, food = 0, rent = 0, cloth = 0, save = 0;
let ok = true;
document.getElementById('calculation-section').addEventListener('click', (e) => {
    const input = e.target;
    if (input.placeholder == 0) {
        input.addEventListener('keyup', () => {
            try {
                // number & positive number Validation
                const inputValue = e.target.value;
                if (isNaN(inputValue)) throw "Your input in " + input.id + " is not a number. Please enter a valid number input";
                if (inputValue < 0) throw "Please enter a positive number in " + input.id;

                // setting the values after validation
                if (input.id == 'income') income = parseInt(inputValue);
                if (input.id == 'food') food = parseInt(inputValue);
                if (input.id == 'rent') rent = parseInt(inputValue);
                if (input.id == 'cloth') cloth = parseInt(inputValue);
                if (input.id == 'save') save = parseInt(inputValue);

                // set condition for calculation
                ok = true;

                // remove error message 
                document.getElementById('errorMessage').innerText = '';

            } catch (err) {
                // set error message
                document.getElementById('errorMessage').innerText = err;

                // set condition for calculation
                ok = false;
            }
        })
    }
})

// Get the text
function getText(id) {
    return document.getElementById(id);
}

let balance = income;

// Main calculation
document.getElementById('calculateBtn').addEventListener('click', () => {
    if (ok) {
        const totalExpense = food + rent + cloth;
        try {
            if (totalExpense > income) throw "Expense can not be greater than income."
            else {
                balance = income - totalExpense;
                getText('totalExpenses').innerText = totalExpense;
                getText('balance').innerText = income - totalExpense;
            }
        }
        catch (err) {
            document.getElementById('errorMessage').innerText = err;
        }
    }
})

// Savings calculation
document.getElementById('saveBtn').addEventListener('click', () => {
    const totalSaving = income * (save / 100);
    try {
        if (totalSaving > balance) throw "Saving can not be greater than balance."
        else {
            getText('savingAmount').innerText = totalSaving;
            getText('remainingBalance').innerText = balance - totalSaving;
        }
    }
    catch (err) {
        // set error message
        document.getElementById('errorMessage').innerText = err;
    }
})

