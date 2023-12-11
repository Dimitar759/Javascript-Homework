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



