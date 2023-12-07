//Javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in

let userInput = parseInt(prompt("Enter a year from 4 and beyond here:"));
let formulaCalculation = (userInput - 4) % 12;

if (formulaCalculation === 0) {
    alert("This year is the year of the Rat");
}
else if (formulaCalculation === 1) {
    alert("This year is the year of the Ox");
}
else if (formulaCalculation === 2) {
    alert("This year is the year of the Tiger");
}
else if (formulaCalculation === 3) {
    alert("This year is the year of the Rabbit");
}
else if (formulaCalculation === 4) {
    alert("This year is the year of the Dragon");
}
else if (formulaCalculation === 5) {
    alert("This year is the year of the Snake");
}
else if (formulaCalculation === 6) {
    alert("This year is the year of the Horse");
}
else if (formulaCalculation === 7) {
    alert("This year is the year of the Goat");
}
else if (formulaCalculation === 8) {
    alert("This year is the year of the Monkey");
}
else if (formulaCalculation === 9) {
    alert("This year is the year of the Rooster");
}
else if (formulaCalculation === 10) {
    alert("This year is the year of the Dog");
}
else if (formulaCalculation === 11) {
    alert("This year is the year of the Pig");
}
else {
    alert("Please enter a valid input");
}



//A program that finds the maximum between two numbers.

let userInputFirstNumber = parseInt(prompt("Enter the first random number"));
let userInputSecondNumber = parseInt(prompt("Enter the second random number"));

if (!isNaN(userInputFirstNumber) && !isNaN(userInputSecondNumber)) {
    if (userInputFirstNumber > userInputSecondNumber) {
    alert("The first number is the larger number");
    }
    else if (userInputFirstNumber < userInputSecondNumber) {
        alert("The second number is the larger number");
    }
    else{
        alert("Both numbers are the same")
    }
}
else {
    alert("I said enter a number!!");
}



//A program that finds the maximum between three numbers.

let inputFirstNumber = parseInt(prompt("Enter the first random number"));
let inputSecondNumber = parseInt(prompt("Enter the second random number"));
let inputThirdNumber = parseInt(prompt("Enter the third random number"));




if (!isNaN(inputFirstNumber) && !isNaN(inputSecondNumber) && !isNaN(inputThirdNumber)) {
    if (inputFirstNumber > inputSecondNumber && inputFirstNumber > inputThirdNumber) {
        alert("The first number is the largest number");
    } else if (inputSecondNumber > inputFirstNumber && inputSecondNumber > inputThirdNumber) {
        alert("The second number is the largest number");
    } else if (inputThirdNumber > inputFirstNumber && inputThirdNumber > inputSecondNumber) {
        alert("The third number is the largest number");
    } else if (inputFirstNumber === inputSecondNumber && inputFirstNumber > inputThirdNumber) {
        alert("The first and second numbers are equal and larger than the third number");
    } else if (inputFirstNumber === inputThirdNumber && inputFirstNumber > inputSecondNumber) {
        alert("The first and third numbers are equal and larger than the second number");
    } else if (inputSecondNumber === inputThirdNumber && inputSecondNumber > inputFirstNumber) {
        alert("The second and third numbers are equal and larger than the first number");
    } else {
        alert("All numbers are the same");
    }
}
else {
    alert("I said enter a number!!");
}




//A program that checks whether a number is negative, positive or zero.


let number = parseFloat((prompt("Enter a random number - negative or positive")));

if (!isNaN(number)) {
    if (number === 0) {
        alert("The number is zero");
    }
    else if (number > 0) {
        alert("It is a positive number");
    }
    else {
        alert("It is a negative number");
    }
}
else {
    alert("I said enter a number!!");
}




//A program that will accept user input between 1-7 (week number) and print week day.

let weekDayNumber = parseInt(prompt("Enter a number from 1 to 7"));

if (weekDayNumber >= 1 && weekDayNumber <= 7) {
    if (weekDayNumber === 1) {
        alert("It's Monday!");
    }
    else if (weekDayNumber === 2) {
        alert("It's Tuesday!");
    }
    else if (weekDayNumber === 3) {
        alert("It's Wednesday!");
    }
    else if (weekDayNumber === 4) {
        alert("It's Thursday!");
    }
    else if (weekDayNumber === 5) {
        alert("It's Friday!");
    }
    else if (weekDayNumber === 6) {
        alert("It's Saturday!");
    }
    else if (weekDayNumber === 7) {
        alert("It's Sunday!");
    }
    
}
else {
    alert("Please enter a valid number!!")
}



//A program that will check if user typed an input that is a number or not

let randomInput = prompt("Enter a random input");

if (isNaN(randomInput)) {
    alert("It is not a number")
}
else {
    alert("It is a number")
}




// A program that inputs marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculates the percentage and grade according to the following: Percentage >= 90% : Grade A Percentage >= 80% : Grade B Percentage >= 70% : Grade C Percentage >= 60% : Grade D Percentage >= 40% : Grade E Percentage < 40% : Grade F

function calculateGrade(marks) {
    if (marks >= 90) {
        return 'A';
    } else if (marks >= 80) {
        return 'B';
    } else if (marks >= 70) {
        return 'C';
    } else if (marks >= 60) {
        return 'D';
    } else if (marks >= 50) {
        return 'E';
    } else {
        return 'F';
    }
}



let physics = parseFloat(prompt("Enter Physics marks from 0 to 100"));
let chemistry = parseFloat(prompt("Enter Chemistry marks from 0 to 100"));
let biology = parseFloat(prompt("Enter Biology marks from 0 to 100"));
let mathematics = parseFloat(prompt("Enter Mathematics marks from 0 to 100"));
let computer = parseFloat(prompt("Enter Computer marks from 0 to 100"));

let totalMarks = physics + chemistry + biology + mathematics + computer;

let physicsGrade = calculateGrade(physics);
let chemistryGrade = calculateGrade(chemistry);
let biologyGrade = calculateGrade(biology);
let mathematicsGrade = calculateGrade(mathematics);
let computerGrade = calculateGrade(computer);

alert(`Physics grade is: ${physicsGrade}`);
alert(`Chemistry grade is: ${chemistryGrade}`);
alert(`Biology grade is: ${biologyGrade}`);
alert(`Mathematics grade is: ${mathematicsGrade}`);
alert(`Computer grade is: ${computerGrade}`);

let finalGrade = calculateGrade(totalMarks / 5);
alert(`Final grade is: ${finalGrade}`);

let percentage = (totalMarks / 500) * 100;
alert(`Average percentage is ${percentage}%`);

// Prvo bev napishal posebno if-ovi za sekoj predmet i posle mi tekna spomnavte za da proverime za return so pravi,
// i mi tekna vo function deka se koristi return no neznaev kako se pravat functions i koja uloga imat, so pomos na google i youtube
//uchejki kako se pravat functions go napraviv ova so function nekako :D





//-----------------------------------------------------------------------


// Eve prvo kako bev go napisal:


// let physics = parseFloat(prompt("Enter Physics marks from 0 to 100"));
// if (physics >= 90) {
//     alert ('Physics grade is: A');
// } else if (physics >= 80) {
//     alert ('Physics grade is: B');
// } else if (physics >= 70) {
//     alert ('Physics grade is:');
// } else if (physics >= 60) {
//     alert ('Physics grade is: D');;
// } else if (physics >= 50) {
//     alert ('Physics grade is: E');
// } else {
//     alert ('Physics grade is: F');
// }

// let chemistry = parseFloat(prompt("Enter Chemistry marks from 0 to 100"));

// if (chemistry >= 90) {
//     alert ('Chemistry grade is: A');
// } else if (chemistry >= 80) {
//     alert ('Chemistry grade is: B');
// } else if (chemistry >= 70) {
//     alert ('Chemistry grade is: C');
// } else if (chemistry >= 60) {
//     alert ('Chemistry grade is: D');;
// } else if (chemistry >= 50) {
//     alert ('Chemistry grade is: E');
// } else {
//     alert ('Chemistry grade is: F');
// }

// let biology = parseFloat(prompt("Enter Biology marks from 0 to 100"));

// if (biology >= 90) {
//     alert ('Biology grade is: A');
// } else if (biology >= 80) {
//     alert ('Biology grade is: B');
// } else if (biology >= 70) {
//     alert ('Biology grade is: C');
// } else if (biology >= 60) {
//     alert ('Biology grade is: D');;
// } else if (biology >= 50) {
//     alert ('Biology grade is: E');
// } else {
//     alert ('Biology grade is: F');
// }


// let mathematics = parseFloat(prompt("Enter Mathematics marks from 0 to 100"));
// if (mathematics >= 90) {
//     alert ('Mathematics grade is: A');
// } else if (mathematics >= 80) {
//     alert ('Mathematics grade is: B');
// } else if (mathematics >= 70) {
//     alert ('Mathematics grade is: C');
// } else if (mathematics >= 60) {
//     alert ('Mathematics grade is: D');;
// } else if (mathematics >= 50) {
//     alert ('Mathematics grade is: E');
// } else {
//     alert ('Mathematics grade is: F');
// }


// let computer = parseFloat(prompt("Enter Computer marks from 0 to 100"));
// if (computer >= 90) {
//     alert ('Computer grade is: A');
// } else if (computer >= 80) {
//     alert ('Computer grade is: B');
// } else if (computer >= 70) {
//     alert ('Computer grade is: C');
// } else if (computer >= 60) {
//     alert ('Computer grade is: D');;
// } else if (computer >= 50) {
//     alert ('Computer grade is: E');
// } else {
//     alert ('Computer grade is: F');
// }

// let totalMarks = (physics + chemistry + biology + mathematics + computer);

// let finalGrade = totalMarks/=5;
// if (finalGrade >= 90) {
//     alert ('Final grade is: A');
// } else if (finalGrade >= 80) {
//     alert ('Final grade is: B');
// } else if (finalGrade >= 70) {
//     alert ('Final grade is: C');
// } else if (finalGrade >= 60) {
//     alert ('Final grade is: D');;
// } else if (finalGrade >= 50) {
//     alert ('Final grade is: E');
// } else {
//     alert ('Final grade is: F');
// }

// let percentage = (totalMarks / 500) * 100;
// alert(`Average percentage is  ${percentage} %`);