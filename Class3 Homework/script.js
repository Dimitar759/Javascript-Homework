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

let enterAge = parseFloat(prompt("Enter years:"));

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

let moneyToWithdraw = parseInt(prompt("Enter money amount to withdraw:"));

let moneyWithdrawn = atm(moneyToWithdraw);
console.log(moneyWithdrawn);

