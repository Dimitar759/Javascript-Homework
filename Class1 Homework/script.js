
//A JavaScript program that calculates the total price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%. 

let numberOfPhones = 30;
let pricePerPhone = 119.95;
const taxRate = 0.05;

let totalCostBeforeTax = numberOfPhones * pricePerPhone;
let amountOfTax = totalCostBeforeTax * taxRate;
let totalCostWithTax = totalCostBeforeTax + amountOfTax;

console.log(totalCostWithTax);


//A JavaScript program that takes minutes and converts them to seconds.

let minutes = 100;
const secondsPerMinute = 60;

let minutesToSecondsConverter = minutes * secondsPerMinute;

console.log(minutesToSecondsConverter);


//A JavaScript program that takes a number and increments the number by +1 .

let randomNumber = 5;

++randomNumber;

console.log(randomNumber);


//A JavaScript program that takes the base and height of a triangle and calculates its area.

let baseOfTriangle = 50;

let heightOfTriangle = 40;

const areaOfTriangle = (baseOfTriangle * heightOfTriangle) / 2;

console.log(areaOfTriangle);


//A JavaScript program that takes length and width of a rectangle and finds its perimeter.

let rectangleWidth = 100;

let rectangleHeight = 200;

const rectanglePerimeter = 2 * (rectangleHeight + rectangleWidth);

console.log(rectanglePerimeter);


// A JavaScript program that calculates the area of a circle.

let radius = 10;

const areaOfCircle = Math.PI * radius * radius;

console.log(areaOfCircle);





