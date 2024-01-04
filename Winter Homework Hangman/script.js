const movies = ["The Godfather", "Lord Of The Rings", "Jaws", "Titanic"]

const shows = ["Game Of Thrones", "Friends", "Breaking Bad", "The Office"]

const sports = ["Football", "Bascketball", "Boxing", "Cricket", "Baseball"]

let moviesButton = document.getElementById("movies");
let showsButton = document.getElementById("shows");
let sportsButton = document.getElementById("sports");

let topicDiv = document.getElementById("choosing-topic"); 
let inputContainer = document.getElementById("input-container"); 


moviesButton.addEventListener("click", function () {
    topicDiv.style.display = "none";
    let chosenWord = movies[Math.floor(Math.random() * movies.length)];
    inputContainer.classList.remove("input-container");
})