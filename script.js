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
    if (num2 === 0) {
        console.log("Cannot divide by zero");
        return num1;
    }

    return num1 / num2;
}

const operate = (num1, num2, oper) => {

}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Scripts loaded correctly")
});