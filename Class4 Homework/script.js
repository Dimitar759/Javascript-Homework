
function tellStory(storyWords) {
    let name;
    let emotion;
    let activity;

    for (let i = 0; i < storyWords.length; i++) {
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

    console.log(`This is ${name}. ${name} is a nice person. Today they are ${emotion}. They are ${activity} all day. The end.`);
}

let storyValues = ["Ben", "Happy", "Running"];
tellStory(storyValues);