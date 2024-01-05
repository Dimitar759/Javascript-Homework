const movies = ["The Godfather", "Lord Of The Rings", "Jaws", "Titanic"]

const shows = ["Game Of Thrones", "Friends", "Breaking Bad", "The Office"]

const sports = ["Football", "Basketball", "Boxing", "Cricket", "Baseball"]

let moviesButton = document.getElementById("movies");
let showsButton = document.getElementById("shows");
let sportsButton = document.getElementById("sports");
let hintButton = document.getElementById("hint");
let playAgainButton = document.getElementById("playAgain");

let topicDiv = document.getElementById("choosing-topic"); 
let inputContainer = document.getElementById("input-container"); 
let infoParagraph = document.getElementById("info-paragraph"); 
let correctLettersGuessed = document.getElementById("letters");
let hintParagraph = document.getElementById("hintParagraph");

const letterContainer = document.querySelector('.letter-container');

moviesButton.addEventListener("click", function () {
    topicDiv.style.display = "none";
    let chosenWord = movies[Math.floor(Math.random() * movies.length)];
    infoParagraph.innerHTML += `The chosen category is Movies `
    inputContainer.classList.remove("input-container");

    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === ' ') {
            correctLettersGuessed.innerHTML += "&nbsp;&nbsp;"; 
        } else {
            correctLettersGuessed.innerHTML += "_ ";
        }
    }

    hintButton.addEventListener("click", function () {
        if (chosenWord === 'The Godfather') {
            hintParagraph.innerHTML+= "Don Vito Corleone is a central character, often known for his famous line, 'I'm gonna make him an offer he can't refuse.'"
        } else if (chosenWord === 'Lord Of The Rings') {
            hintParagraph.innerHTML+= "This story follows a group of heroes on a quest to destroy a powerful ring and save Middle-earth from the dark lord Sauron."
        }else if (chosenWord === 'Jaws') {
            hintParagraph.innerHTML+= "This movie, directed by Steven Spielberg, features a giant man-eating shark terrorizing a small beach town."
        }else if (chosenWord === 'Titanic') {
            hintParagraph.innerHTML+= "A story set aboard a grand ship's maiden voyage, where an unexpected love story unfolds amidst the ship's tragic destiny."
        }
    
        hintButton.disabled = true;
        hintButton.style.opacity = 0.5;
        hintButton.style.cursor = "not-allowed";
    })

    letterContainer.addEventListener('click', function(event) {
    const clickedButton = event.target;
    if (clickedButton.classList.contains('letter-button')) {
        const letter = clickedButton.dataset.letter;
        checkAndReplace(letter);
    }
    
    });

    function checkAndReplace(letter) {
    let displayWord = correctLettersGuessed.textContent.split(' ');

    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i].toUpperCase() === letter.toUpperCase()) {
            displayWord[i] = letter.toUpperCase();
        }
    }

    correctLettersGuessed.textContent = displayWord.join(' ');
}

})

showsButton.addEventListener("click", function () {
    topicDiv.style.display = "none";
    let chosenWord = shows[Math.floor(Math.random() * shows.length)];
    infoParagraph.innerHTML += `The chosen category is Shows `
    inputContainer.classList.remove("input-container");

    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === ' ') {
            correctLettersGuessed.innerHTML += "&nbsp;&nbsp;"; // Insert spaces for each word gap
        } else {
            correctLettersGuessed.innerHTML += "_ ";
        }
    }

    hintButton.addEventListener("click", function () {
        if (chosenWord === 'Game Of Thrones') {
            hintParagraph.innerHTML+= "This series is adapted from George R.R. Martin's fantasy novels, featuring power struggles among noble families for control of the Iron Throne."
        } else if (chosenWord === 'Friends') {
            hintParagraph.innerHTML+= "This sitcom revolves around the lives, relationships, and humorous misadventures of six friends living in New York City."
        }else if (chosenWord === 'Breaking Bad') {
            hintParagraph.innerHTML+= "This show follows a high school chemistry teacher turned methamphetamine producer, showcasing the descent into the criminal world."
        } else if (chosenWord === 'The Office') {
            hintParagraph.innerHTML+= "This show is a mockumentary-style sitcom that captures the quirky lives of office employees at the Dunder Mifflin Paper Company."
        }
    
        hintButton.disabled = true;
        hintButton.style.opacity = 0.5;
        hintButton.style.cursor = "not-allowed";
    })
})

sportsButton.addEventListener("click", function () {
    topicDiv.style.display = "none";
    let chosenWord = sports[Math.floor(Math.random() * sports.length)];
    infoParagraph.innerHTML += `The chosen category is Sports `
    inputContainer.classList.remove("input-container");

    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === ' ') {
            correctLettersGuessed.innerHTML += "&nbsp;&nbsp;"; // Insert spaces for each word gap
        } else {
            correctLettersGuessed.innerHTML += "_ ";
        }
    }

    hintButton.addEventListener("click", function () {
        if (chosenWord === 'Football') {
            hintParagraph.innerHTML+= "This sport involves two teams aiming to score points by getting the ball into the opposing team's goal, primarily using their feet."
        } else if (chosenWord === 'Basketball') {
            hintParagraph.innerHTML+= "This sport involves two teams trying to score points by shooting a ball through the opponent's hoop, typically played indoors on a rectangular court with their hands."
        }else if (chosenWord === 'Boxing') {
            hintParagraph.innerHTML+= "This sport pits two opponents against each other, typically in a square ring, using their fists to punch each other with the goal of scoring more points or achieving a knockout."
        } else if (chosenWord === 'Cricket') {
            hintParagraph.innerHTML+= "This sport involves two teams, a bat, and a ball played on a field. It's known for its diverse formats, including Test matches, One Day Internationals, and Twenty20."
        }else if (chosenWord === 'Baseball') {
            hintParagraph.innerHTML+= "This sport is played between two teams, each comprising nine players. It involves a bat, a ball, and four bases arranged in a diamond. It's highly popular in various countries, notably in the United States."
        }
    
        hintButton.disabled = true;
        hintButton.style.opacity = 0.5;
        hintButton.style.cursor = "not-allowed";
    })
})

playAgainButton.addEventListener("click", function () {
    location.reload();
})

letterButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const guessedLetter = button.textContent;
        let newLetters = '';

        for (let i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i].toLowerCase() === guessedLetter.toLowerCase()) {
                newLetters += `${chosenWord[i]} `;
            } else if (correctLettersGuessed.textContent[i * 2] !== '_') {
                newLetters += `${correctLettersGuessed.textContent[i * 2]} `;
            } else {
                newLetters += '_ ';
            }
        }

        correctLettersGuessed.textContent = newLetters;
    });
});