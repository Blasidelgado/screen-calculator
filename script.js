let firstOperand = 0, secondOperand = 0, operator = '', displayValue = ''; 

const add = (num1, num2) => {
    return num1 + num2;
}

const substract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

const operate = (num1, num2, oper) => {
    switch(oper) {
        case '+':
            return add(num1, num2);
        case '-':
            return substract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            if (num2 === 0){
                console.log("Cannot divide by zero");
                return num1;
            }
            return divide(num1, num2);
        default:
            return console.log("Clear function should be called");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Scripts loaded correctly")
    const display = document.getElementById("display");

    document.querySelectorAll('.key').forEach(key => key.onclick = addToDisplay);
    
    function addToDisplay(e) {
        const pressedKey = e.target.dataset.key;
        if (pressedKey === "equals") {
            displayValue += '=';
        } else if (pressedKey === "clear") {
            displayValue = "";
        } else {
            displayValue += pressedKey;
        }
        display.innerText = displayValue;
    }
});