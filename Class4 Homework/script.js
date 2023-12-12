// story function

function tellStory(storyWords) {
    let name;
    let emotion;
    let activity;

    for (let i = 0; i < storyWords.length; i++){
        if (storyWords[i] === "Ben") {
             name = storyWords[i];
        }
        else if (storyWords[i] === "Happy") {
             emotion = storyWords[i];
        }
        else if (storyWords[i] === "Running") {
             activity = storyWords[i];
        }
        
    }

    console.log(` This is ${name}. ${name} is a nice person. Today they are ${emotion}. They are ${activity} all day. The end.`);
}

let story = ["Ben", "Happy", "Running"];
tellStory(story);






//Sum of 5 numbers and validating numbers

function sumOfNumbers(allNumbers) {
    let sum = 0;
    let foundInvalidNumber = false;
    for (let i = 0; i < allNumbers.length; i++){
        if (!isNaN(allNumbers[i])) {
            sum += allNumbers[i];
        }
        else{
             foundInvalidNumber = true;
        }
    }
    if (foundInvalidNumber) {
        console.log("There is an invalid number");
    } else {
        console.log(sum);
    }
    
}

let numbers = [12, 64, 987, 543, 78];
sumOfNumbers(numbers);


let numbers2 = [12, 64, 987, 543, "asd"];
validateNumber(numbers2);

function validateNumber(numbersToValitade){
    for (let number of numbersToValitade) {
        if (!isNaN(number)) {
            console.log(`The number ${number} is valid`);
        }
        else {
            console.log(`The number ${number} is invalid`);
        }
    }
}





// array to one big string

function bigString(words){

    let sumOfWords = '';

    for (let i = 0; i < words.length; i++){
        sumOfWords+=words[i] + " ";
    }

    console.log(sumOfWords);
}

let randomWords = ["Hello", "there", "students", "of", "SEDC", "!"];
bigString(randomWords);




//Looping structures

//Ne sum siguren dali ova vaka treba??

for (let i = 1; i <= 20; i++){
    if (i % 2 === 0) {
        console.log(`${i} \n.`);
        
    }
    else {
        console.log(`${i}  .`);
    }
}




//Max and min numbers

function findMinAndMax(number) {

    let numbers = [];
    
    for (let i = 0; i < number.length; i++){
        if (!isNaN(number[i])) {
            numbers.push(number[i]);
        }
    }

    if (numbers.length === 0) {
        return "No numbers found in the array"
    }

    let maxNumber = Math.max(...numbers);
    let minNumber = Math.min(...numbers);
    let sum = maxNumber + minNumber;
    return {
        maxNumber,
        minNumber,
        sum
    };
}
let arr = [3, 5, 6, 8, 11, "hello", true, null, undefined];
let result = findMinAndMax(arr);
console.log(result);




//student names


function namesAndLastNames(firstNames, lastNames) {
    let fullNames = [];
    for (let i = 0; i < firstNames.length; i++){
        let fullName = `${firstNames[i]} ${lastNames[i]}`;
        fullNames.push(fullName);
    }
    return fullNames;
}

let studentFirstNames = ["Ben", "Kevin", "Gwen", "Michael", "Lucy"];
let studentLastNames = ["Tennyson", "Levin", "Stevenson", "Star", "Altman"];

let nameAndLastName = namesAndLastNames(studentFirstNames, studentLastNames);
console.log(nameAndLastName)