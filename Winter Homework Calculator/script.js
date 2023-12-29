const container = document.getElementById("container");

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");

let buttonReset = document.getElementById("buttonReset");
let buttonDelete = document.getElementById("buttonDelete");
let buttonDivide = document.getElementById("buttonDivide");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonMinus = document.getElementById("buttonMinus");
let buttonPlus = document.getElementById("buttonPlus");
let buttonDot = document.getElementById("buttonDot");
let button0 = document.getElementById("button0");
let buttonEquals = document.getElementById("buttonEquals");

let displayScreen = document.getElementById("displayScreen");


button1.addEventListener("click", function () {
    displayScreen.textContent += button1.textContent;
})
button2.addEventListener("click", function () {
    displayScreen.textContent += button2.textContent;
})
button3.addEventListener("click", function () {
    displayScreen.textContent += button3.textContent;
})
button4.addEventListener("click", function () {
    displayScreen.textContent += button4.textContent;
})
button5.addEventListener("click", function () {
    displayScreen.textContent += button5.textContent;
})
button6.addEventListener("click", function () {
    displayScreen.textContent += button6.textContent;
})
button7.addEventListener("click", function () {
    displayScreen.textContent += button7.textContent;
})
button8.addEventListener("click", function () {
    displayScreen.textContent += button8.textContent;
})
button9.addEventListener("click", function () {
    displayScreen.textContent += button9.textContent;
})
button0.addEventListener("click", function () {
    displayScreen.textContent += button0.textContent;
})

buttonReset.addEventListener("click", function () {
    displayScreen.textContent = "";
})

buttonDelete.addEventListener("click", function () {
    let currentText = displayScreen.textContent;
    if (currentText.length > 0) {
        displayScreen.textContent = currentText.slice(0, -1);
    }
})

