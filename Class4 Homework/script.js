

function tellStory(storyValues) {
    let name;
    let emoiton;
    let activity;

    for (let i = 0; i < storyValues; i++){
        if (i === "Ben") {
             name = storyValues[i];
        }
        else if (i === "Happy") {
             emotion = storyValues[i];
        }
        else if (i === "Running") {
             activity = storyValues[i];
        }
        console.log(` This is ${name}. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.`)
    }
    
}

let story = ["Ben", "Happy", "Running"];
tellStory(storyValues);