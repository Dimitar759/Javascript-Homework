const container = document.getElementById("container");
const numberButtons = document.querySelectorAll(".number");
let  operatorButtons = document.querySelectorAll(".operation");

let buttonReset = document.getElementById("buttonReset");
let buttonDelete = document.getElementById("buttonDelete");
let buttonDot = document.getElementById("buttonDot");
let button0 = document.getElementById("button0");
let buttonEquals = document.getElementById("buttonEquals");

let displayScreen = document.getElementById("displayScreen");

let maxNumberToEnter = 999999999;

function numberButtonClick(button) {
    if (displayScreen.textContent.length < maxNumberToEnter) {
        displayScreen.textContent += button.textContent;
    }
}

numberButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        numberButtonClick(button);
    });
});


buttonReset.addEventListener("click", function () {
    displayScreen.textContent = "";
})

buttonDelete.addEventListener("click", function () {
    let currentText = displayScreen.textContent;
    if (currentText.length > 0) {
        displayScreen.textContent = currentText.slice(0, -1);
    }
})

buttonDot.addEventListener("click", function () {
    let displayContent = displayScreen.textContent;
    let lastDigit = displayContent[displayContent.length - 1];

    if (displayContent === "") {
        displayScreen.textContent += 'Enter a number first';
        setTimeout(function() {
            displayScreen.textContent = ""; // ova go staviv tuka da se gasi posle 2 sekundi zatoa shto user ke mozhe posle tekstot da pisuva  brojki bez predhodno da otide C ili delete! - zatoa vaka broevite so ke gi pise u tie sekundi posle erorot ke se izbrisat so nego
        }, 2000);
    } else if (lastDigit === ".") {
        alert("Already a decimal point - Add a number before adding another dot");
        displayScreen.textContent = "";
    } else {
        displayScreen.textContent += ".";
    }
    
})

let storedNumber = null; 
let operator = null; 

function operationButtonClick(operationButton) {
    storedNumber = parseFloat(displayScreen.textContent); 
    displayScreen.textContent = ""; 
    if (operationButton.textContent === "+" || operationButton.textContent === "-") {
        operator = operationButton.textContent;
    } else if (operationButton.textContent === "x" ) {  //za mnozhenje imam posebni if-ovi zatoa shto simbolot so se pretstavuva za mnozhenje e razlichen na ekran za userot a razlichen treba da e za da se mnozhat broevite
        operator = "*";
    }else if (operationButton.textContent === "÷" ) {  //za delenje imam posebni if-ovi zatoa shto simbolot so se pretstavuva za delenje e razlichen na ekran za userot a razlichen treba da e za da se delat broevite
        operator = "/";
    }  
}

operatorButtons.forEach(function(operationButton) {
    operationButton.addEventListener("click", function() {
        operationButtonClick(operationButton);
    });
});

buttonEquals.addEventListener("click", function () {
    const currentNumber = parseFloat(displayScreen.textContent);
    let result = null;

    if (operator === "+") {
    
        if (isNaN(currentNumber)) {
            result = "Error: enter a second number";
        } else {
            result = storedNumber + currentNumber;
        }
        
    } else if (operator === "-") {

        if (isNaN(currentNumber)) {
            result = "Error: enter a second number";
        } else {
            result = storedNumber - currentNumber;
        }
        
       
    } else if (operator === "*") {
        
        if (isNaN(currentNumber)) {
            result = "Error: enter a second number";
        } else {
            result = storedNumber * currentNumber;
        }
        
    } else if (operator === "/") {

        if (isNaN(currentNumber)) {
            result = "Error: enter a second number";
        }else if (currentNumber !== 0 && storedNumber !== 0) {
            result = storedNumber / currentNumber;
        } else{
            result = "Error: Cannot divide by zero";
        }
    } 
    
    displayScreen.textContent = result;
});