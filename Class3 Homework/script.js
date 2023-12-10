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

function humanAndDogYears(years) {
    let convertingNumber = 7;
    let dogAge = years * convertingNumber;
    let humanAge =years / convertingNumber ;

    return `The human's age in dog years is ${dogAge} and the dog's age in human years is ${humanAge}`;
}

let enterAge = parseFloat(prompt("Enter years:"));

const humanAndDogAge = humanAndDogYears(enterAge);
console.log(humanAndDogAge)



/////////////////


// function calculateDogYears(yearsToConvert, convertRatio) {
//     let dogYears = yearsToConvert * convertRatio;
//     return dogYears;
// }

// function calculateHumanYears(yearsToConvert, convertRatio) {
//     let humanYears = yearsToConvert / convertRatio;
//     return humanYears;
// }

// let yearsToConvert = parseFloat(prompt("Enter years:"))

// let convertRatio = 7;
// const finalDogResult = calculateDogYears(yearsToConvert, convertRatio);

// const finalHumanResult = calculateHumanYears(yearsToConvert, convertRatio);

// console.log("In dog years is:", finalDogResult);
// console.log("In human years is:", finalHumanResult);
