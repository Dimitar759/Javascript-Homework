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








