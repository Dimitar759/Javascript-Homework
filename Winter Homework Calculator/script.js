let displayScreen = document.getElementById("displayScreen");
let buttonDivide = document.getElementById("buttonDivide");
let buttonPlus = document.getElementById("buttonPlus");
let buttonMinus = document.getElementById("buttonMinus");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonEquals = document.getElementById("buttonEquals");
let buttonReset = document.getElementById("buttonReset");
let buttonDelete = document.getElementById("buttonDelete");
let numbers = document.querySelectorAll(".number");
let buttonDot = document.getElementById("buttonDot")


let storedNumber = null;
let operator = null;
let result = null; 

function applyOperation(newOperator) {
    const currentNumber = parseFloat(displayScreen.textContent);

    if (storedNumber === null) {
        storedNumber = currentNumber;
        result = storedNumber;
    } else {
        result = performOperation(operator, result, currentNumber);
    }

    displayScreen.textContent = "";
    operator = newOperator;
}

function performOperation(op, num1, num2) {
    if (op === "+") {
        return num1 + num2;
    } else if (op === "-") {
        return num1 - num2;
    } else if (op === "*") {
        return num1 * num2;
    } else if (op === "/") {
        if (num2 !== 0 && num1 !== 0) {
            return num1 / num2;
        } else {
            return "Error: Cannot divide by zero";
        }
    }
}

function resetCalculator() {
    storedNumber = null;
    operator = null;
    result = null;
    displayScreen.textContent = "";
}

buttonDivide.addEventListener("click", function () {
    applyOperation("/");
});

buttonPlus.addEventListener("click", function () {
    applyOperation("+");
});

buttonMinus.addEventListener("click", function () {
    applyOperation("-");
});

buttonMultiply.addEventListener("click", function () {
    applyOperation("*");
});

buttonEquals.addEventListener("click", function () {
    const currentNumber = parseFloat(displayScreen.textContent);

    if (operator !== null) {
        result = performOperation(operator, result, currentNumber);
        displayScreen.textContent = result;
        storedNumber = null;
        operator = null;
    }
});

buttonReset.addEventListener("click", function () {
    resetCalculator();
});

buttonDelete.addEventListener("click", function () {
    let currentText = displayScreen.textContent;
    if (currentText.length > 0) {
        displayScreen.textContent = currentText.slice(0, -1);
    }
});

numbers.forEach(function(button) {
    button.addEventListener("click", function () {
        if (displayScreen.textContent.length <= 9) {
            displayScreen.textContent += button.textContent;
        }
    });
});

buttonDot.addEventListener("click", function () {
    let displayContent = displayScreen.textContent;
    let lastDigit = displayContent[displayContent.length - 1];

    if (displayContent === "") {
        displayScreen.textContent += 'Enter a number first';
    } else if (lastDigit === ".") {
        alert("Already a decimal point - Add a number before adding another dot");
    } else {
        displayScreen.textContent += ".";
    }
});