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


//Sum of 5 numbers

function sumOfNumbers(allNumbers) {
    let sum = 0;
    for (let i = 0; i < allNumbers.length; i++){
        sum += allNumbers[i];
    }
    console.log(sum);
}

let numbers = [12, 64, 987, 543, 78];
sumOfNumbers(numbers);