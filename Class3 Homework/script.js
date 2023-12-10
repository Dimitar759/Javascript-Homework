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