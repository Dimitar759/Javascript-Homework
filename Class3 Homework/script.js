//A JavaScript function which accepts a parameter and returns its type and prints it in the console.

function returningType(parameter) {
    return typeof(parameter);
}

let typeNumber = returningType(10);
console.log(typeNumber);

let typeString = returningType("Hello dear mentor checking my homework :)");
console.log(typeString);

let typeBoolean = returningType(true);
console.log(typeBoolean);

let car = {
    brand: 'Mercedes',
    model: 'GLS',
    year: 2020
};

let typeObject = returningType(car);
console.log(typeObject);

let typeUndefined = returningType();
console.log(typeUndefined);







//a JavaScript function that Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years

function humanAndDogYears(humanYears, dogYears) {
    let convertingNumber = 7;
    let dogAge = humanYears * convertingNumber;
    let humanAge = dogYears / convertingNumber;

    return `The human's age in dog years is ${dogAge} and the dog's age in human years is ${humanAge}`;
}

let ages = humanAndDogYears(34, 14);
console.log(ages);



/// second way i solved this problem (idk which one is more correct based on the requirements for the homework?!)


function humanAndDogYears(years) {
    let convertingNumber = 7;
    let dogAge = years * convertingNumber;
    let humanAge =years / convertingNumber ;

    return `The human's age in dog years is ${dogAge} and the dog's age in human years is ${humanAge}`;
}

let enterAge = parseFloat(prompt("Enter years (check result in the console):"));

const humanAndDogAge = humanAndDogYears(enterAge);
console.log(humanAndDogAge);








// ATM function

let moneyAmountInBankAccount = 10000;
function atm(money) {

    if (money <= moneyAmountInBankAccount) {
        moneyAmountInBankAccount -= money;
        return `You received ${money} dollars and you have ${moneyAmountInBankAccount} dollars left`;
    } else {
        return "Not enough money";
    }
    
}

let moneyToWithdraw = parseInt(prompt("Enter money amount to withdraw (check result in the console):"));

let moneyWithdrawn = atm(moneyToWithdraw);
console.log(moneyWithdrawn);









//celsius to fahrenheit and reverse

function celsiusToFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
}


function fahrenheitToCelsius(fahrenheit) {
    let celsius = (5 / 9) * (fahrenheit - 32);
    console.log(`${fahrenheit}°F is equal to ${celsius}°C`);
}

celsiusToFahrenheit(20);
fahrenheitToCelsius(68);














//AGE CALCULATOR

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function calculateAge(birthYear) {
    let currentAge = currentYear - birthYear;
    return `Your are ${currentAge} years old`;
}

let myBirthYear= parseInt(prompt("Enter your birth year (check result in the console):"));

let myActualAge = calculateAge(myBirthYear);
console.log(myActualAge);