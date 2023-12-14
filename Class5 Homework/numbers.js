// part 2

function printingAndSum(numbers) {
    let list = document.getElementById("list");
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        list.innerHTML += "<li>" + numbers[i] + "</li>";
        sum += numbers[i];
    }
    list.innerHTML += "<li>" + `Sum of all numbers is: ${sum}` + "</li>";
    return sum;
}



let equation = document.getElementById("equation");
let equationString = '';
function printingTheEquation(numbers, sum) {
    for (let i = 0; i < numbers.length; i++) {
    equationString += `${numbers[i]}`;
        if (i !== numbers.length - 1) {
        equationString += ' + ';
        }
    }

    equation.innerHTML = equationString + ` = ${sum}`;

}

let numbers = [1, 2, 4, 5, 7, 8, 12, 21];
let totalSum = printingAndSum(numbers);
printingTheEquation(numbers, totalSum);

