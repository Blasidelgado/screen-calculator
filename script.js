let lastNumber = 0;
let currentNumber = 0;
let operator = null;


const add = (leftOp, rightOp) => {
    return leftOp + rightOp;
}

const substract = (leftOp, rightOp) => {
    return leftOp - rightOp;
}

const multiply = (leftOp, rightOp) => {
    return leftOp * rightOp;
}

const divide = (leftOp, rightOp) => {
    return leftOp / rightOp;
}


const operate = (leftOp, rightOp, oper) => {
    switch(oper) {
        case '+':
            return add(leftOp, rightOp);
        case '-':
            return substract(leftOp, rightOp);
        case '*':
            return multiply(leftOp, rightOp || 1);
        case '/':
            if (rightOp === 0){
                return Number.POSITIVE_INFINITY;
            }
            return divide(leftOp, rightOp || 1);
        default:
            return leftOp;
    }
}


const clear = () => {
    operator = null;
    currentNumber = 0;
    lastNumber = 0;
}

const updateDisplay = (key) => {
    switch (key) {
        case 'c':
            clear();
            return lastNumber;   
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
            if (operator === null) {
                lastNumber = currentNumber;
            } else { 
                lastNumber = operate(lastNumber, currentNumber, operator);
            }
            operator = key;
            currentNumber = 0;
            return lastNumber;
        default:
            if (operator == '=') {
                clear();
            }
            currentNumber = parseInt(currentNumber.toString() + key);
            return currentNumber;
    }   
} 

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById("display");
    display.innerText = currentNumber;

    const allKeys = document.querySelectorAll('.key');

    allKeys.forEach(key => key.onclick = function () {
        display.innerText = updateDisplay(key.dataset.value);
    });
});