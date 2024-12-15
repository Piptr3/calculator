let currentNumber = 0;
let active = false;
let secondNumber = 0;
let currentOperation = "";

const display = document.querySelector('.display');
const clear = document.querySelector("#clear");
const zeroButton = document.querySelector("#zero");
const equals = document.querySelector('#equals');
const operatorButtons = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.number');

clear.addEventListener('click', () => {
    currentNumber = 0;
    secondNumber = 0;
    display.textContent = '0';
    active = false;
})

zeroButton.addEventListener('click', () => {
    if (active) {
        display.textContent = "";
        secondNumber = 0;
        if (display.textContent != '0') {
            display.textContent = display.textContent + '0';
        }
    } else {
        currentNumber = 0;
        if (display.textContent != '0') {
            display.textContent = display.textContent + '0';
        }
    }
})

equals.addEventListener('click', () => {
    let result = operate(currentNumber, secondNumber, currentOperation)
    display.textContent = result;
    currentNumber = result;
    active = false;
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => handleOperator(button.textContent))
});

numberButtons.forEach((button) => {
    button.addEventListener('click', () => handleNumber(Number(button.textContent)));
});

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function operate(firstNumber, secondNumber, operator) {
    if (operator == '+') {
        return add(firstNumber, secondNumber);
    } else if (operator == '-') {
        return subtract(firstNumber, secondNumber);
    } else if (operator == '*') {
        return multiply(firstNumber, secondNumber);
    } else if (operator == '/') {
        return divide(firstNumber, secondNumber);
    }
}

function handleNumber(number) {
    if (active) {
        display.textContent = "";
        secondNumber = number;
        display.textContent = display.textContent + number;      
    } else {
        currentNumber = number;
        if (display.textContent != '0') {
            display.textContent = display.textContent + number;
        } else {
            display.textContent = number;
        }
    }
}

function handleOperator(operator) {
    currentOperation = operator;
    active = true;
}