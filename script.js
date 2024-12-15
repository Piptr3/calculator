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

let currentNumber = 0;
let active = false;
let secondNumber = 0;

let display = document.querySelector('.display');

const clear = document.querySelector("#clear");
clear.addEventListener('click', () => {
    currentNumber = 0;
    display.textContent = '0';
    active = false;
})

const zeroButton = document.querySelector("#zero");
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

const oneButton = document.querySelector("#one");
oneButton.addEventListener('click', () => {
    if (active) {
        display.textContent = "";
        secondNumber = 1;
        display.textContent = display.textContent + '1';      
    } else {
        currentNumber = 1;
        if (display.textContent != '0') {
            display.textContent = display.textContent + '1';
        } else {
            display.textContent = '1';
        }
    }
})

const twoButton = document.querySelector("#two");
twoButton.addEventListener('click', () => {
    if (active) {
        display.textContent = "";
        secondNumber = 2;
        display.textContent = display.textContent + '2';      
    } else {
        currentNumber = 2;
        if (display.textContent != '0') {
            display.textContent = display.textContent + '2';
        } else {
            display.textContent = '2';
        }
    }
})

const threeButton = document.querySelector("#three");
threeButton.addEventListener('click', () => {
    if (active) {
        display.textContent = "";
        secondNumber = 3;
        display.textContent = display.textContent + '3';      
    } else {
        currentNumber = 3;
        if (display.textContent != '0') {
            display.textContent = display.textContent + '3';
        } else {
            display.textContent = '3';
        }
    }
})

const fourButton = document.querySelector("#four");
fourButton.addEventListener('click', () => {
    if (active) {
        display.textContent = "";
        secondNumber = 4;
        display.textContent = display.textContent + '4';      
    } else {
        currentNumber = 4;
        if (display.textContent != '0') {
            display.textContent = display.textContent + '4';
        } else {
            display.textContent = '4';
        }
    }
})

const fiveButton = document.querySelector("#five");
fiveButton.addEventListener('click', () => {
    if (active) {
        display.textContent = "";
        secondNumber = 5;
        display.textContent = display.textContent + '5';      
    } else {
        currentNumber = 5;
        if (display.textContent != '0') {
            display.textContent = display.textContent + '5';
        } else {
            display.textContent = '5';
        }
    }
})

const sixButton = document.querySelector("#six");
sixButton.addEventListener('click', () => {
    if (active) {
        display.textContent = "";
        secondNumber = 6;
        display.textContent = display.textContent + '6';      
    } else {
        currentNumber = 6;
        if (display.textContent != '0') {
            display.textContent = display.textContent + '6';
        } else {
            display.textContent = '6';
        }
    }
})

const sevenButton = document.querySelector("#seven");
sevenButton.addEventListener('click', () => {
    if (active) {
        display.textContent = "";
        secondNumber = 7;
        display.textContent = display.textContent + '7';      
    } else {
        currentNumber = 7;
        if (display.textContent != '0') {
            display.textContent = display.textContent + '7';
        } else {
            display.textContent = '7';
        }
    }
})

const eightButton = document.querySelector("#eight");
eightButton.addEventListener('click', () => {
    if (active) {
        display.textContent = "";
        secondNumber = 8;
        display.textContent = display.textContent + '8';      
    } else {
        currentNumber = 5;
        if (display.textContent != '0') {
            display.textContent = display.textContent + '8';
        } else {
            display.textContent = '8';
        }
    }
})

const nineButton = document.querySelector("#nine");
nineButton.addEventListener('click', () => {
    if (active) {
        display.textContent = "";
        secondNumber = 9;
        display.textContent = display.textContent + '9';      
    } else {
        currentNumber = 9;
        if (display.textContent != '0') {
            display.textContent = display.textContent + '9';
        } else {
            display.textContent = '9';
        }
    }
})

let currentOperation = "";

const addButton = document.querySelector('#add');
addButton.addEventListener('click', () => {
    currentOperation = '+';
    active = true;
})

const subtractButton = document.querySelector('#subtract');
subtractButton.addEventListener('click', () => {
    currentOperation = '-';
    active = true;
})

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => {
    currentOperation = '*';
    active = true;
})

const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => {
    currentOperation = '/';
    active = true;
})

const equals = document.querySelector('#equals');

equals.addEventListener('click', () => {
    let result = operate(currentNumber, secondNumber, currentOperation)
    display.textContent = result;
    currentNumber = result;
    active = false;
});