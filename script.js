let firstOperand = 0, secondOperand = 0, operator = ''; 

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
    return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Scripts loaded correctly")
});