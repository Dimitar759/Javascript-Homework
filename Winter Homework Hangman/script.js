const movies = ["The Godfather", "Lord Of The Rings", "Jaws", "Titanic"]

const shows = ["Game Of Thrones", "Friends", "Breaking Bad", "The Office"]

const sports = ["Football", "Bascketball", "Boxing", "Cricket", "Baseball"]

let moviesButton = document.getElementById("movies");
let showsButton = document.getElementById("shows");
let sportsButton = document.getElementById("sports");

let topicDiv = document.getElementById("choosing-topic"); 
let inputContainer = document.getElementById("input-container"); 
let infoParagraph = document.getElementById("info-paragraph"); 


moviesButton.addEventListener("click", function () {
    topicDiv.style.display = "none";
    let chosenWord = movies[Math.floor(Math.random() * movies.length)];
    infoParagraph.innerHTML += `The chosen category is Movies `
    inputContainer.classList.remove("input-container");
})

showsButton.addEventListener("click", function () {
    topicDiv.style.display = "none";
    let chosenWord = shows[Math.floor(Math.random() * shows.length)];
    infoParagraph.innerHTML += `The chosen category is Shows `
    inputContainer.classList.remove("input-container");
})

sportsButton.addEventListener("click", function () {
    topicDiv.style.display = "none";
    let chosenWord = sports[Math.floor(Math.random() * sports.length)];
    infoParagraph.innerHTML += `The chosen category is Sports `
    inputContainer.classList.remove("input-container");
})