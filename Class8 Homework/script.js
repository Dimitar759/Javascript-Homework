/// 1"Declare and initialize variables of every type that we learned so far. Print each of them in a console or alert()!",
/// 2"Read 5 variables as user input and then print each of the variable types in the console.",



// let number = 1;
// let notDefined = " ";
// let string = "Hello";
// let trueOrFalse = false;
// let car = {
//     brand: 'mercedes',
//     model: 's class 2023',

// };

// console.log(typeof notANumber);
// console.log(typeof number);
// console.log(typeof string);
// console.log(typeof trueOrFalse);
// console.log(typeof car);

// let variable1 = prompt("Enter variable 1:");
// let variable2 = prompt("Enter variable 2:");
// let variable3 = prompt("Enter variable 3:");
// let variable4 = prompt("Enter variable 4:");
// let variable5 = prompt("Enter variable 5:");

// console.log(typeof variable1);
// console.log(typeof variable2);
// console.log(typeof variable3);
// console.log(typeof variable4);
// console.log(typeof variable5);






// 3 "Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 double the difference as a result.Make sure you use a function! Ex. Input: 20 ==> Output: 14",


// let userInput = parseInt(prompt("Write down a number"));
// let randomNumber = Math.abs(userInput);

// function difference(number) {
    
//     let calculatedDifference;

//     if (number > 13) {
//         calculatedDifference = number - 13;
//         calculatedDifference =  calculatedDifference * 2;
//     }
//     else {
//         calculatedDifference = 13 - number;
//     }
    
//     return calculatedDifference;
// }

// let resultDifferenceDoubled = difference(randomNumber);
// console.log(resultDifferenceDoubled);






// 4 "Write a JavaScript program that will find out which of two inserted integers is closer to 100. Make sure to alert the user if a negative number is inserted!Make sure you use a function!Ex. Input1: 20Input2: 80Output: 80 is closer to 100",

// let integer1 = parseInt(prompt("Write down a number"));
// let integer2 = parseInt(prompt("Write down the second number"));


// function closerToOneHundred(number1, number2) {
//     if (number1 < 0 || number2 < 0) {
//         alert("Please enter positive numbers");
//     }
//     else {
//         let dist1 = Math.abs(100 - number1);
//         let dist2 = Math.abs(100 - number2);

//         if (dist1 < dist2) {
//         alert(`${number1} is closer to 100`);
//         } else if (dist2 < dist1) {
//         alert(`${number2} is closer to 100`);
//         } else {
//         alert(`Both numbers are at the same distance from 100`);
//         }
//     }
// }

// closerToOneHundred(integer1, integer2);






// 5 "Bob's salary is 1000 eur per month. He has expenses that has to cover during the month. He has to pay rent for his apartment 375 eur. He should pay 250 eur for his bills in total. Print on screen what is the amount left that Bob has for the rest of the month, and what is the total amount of his expenses.",

// let salary = 1000;
// let rent = 375;
// let bills = 250;

// let totalExpenses = rent + bills;
// let amountLeft = salary - totalExpenses;

// alert(`Bobs total expenses are ${totalExpenses} euros and has ${amountLeft} euros left for the month`);







// 6 "One student has 5 exams in the first semester. Student name is Bob Bobsky. His/Her grades for all of the exams are Math = 10, English = 6, Science = 8, Sport = 9, Chemistry = 6 respectively. The professor told the students that for passing the first semester they must have average of 8. The student needs to know whether they have passed the semester or not. Alert on screen if the student pass or not! Print on the screen all of the subjects and the student name aswell.",

let studentName = "Bob Bobsky";
let minimalPassingGrade = 8;
let grades = {
    english: 6,
    math: 10,
    science: 8,
    chemistry: 6,
    sport: 9,

    average: function () {
        let sum = this.english + this.math + this.science + this.chemistry + this.sport;
        let averageGrade = sum / 5;
        return averageGrade;
    }
}

let passingGradeOrNot = grades.average();

if (passingGradeOrNot >= minimalPassingGrade) {
    alert(`${studentName}'s average grade is: ${passingGradeOrNot} which means he passed`)
}
else {
    alert(`${studentName}'s average grade is: ${passingGradeOrNot} which means he failed`)
}



