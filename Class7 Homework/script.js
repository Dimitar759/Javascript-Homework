//part 1 animal

let button = document.getElementById("createSentence");
button.addEventListener("click", function () {
    let animalName = document.getElementById("name").value;
    let animalType = document.getElementById("type").value;
    let animalMessage = document.getElementById("speak").value;

    let animal = {
        name: animalName,
        kind: animalType,
        speak: function (message) {
            console.log(`This is ${this.name}. He is a ${this.kind} and he says: '${message}'`);
        }
    };

    animal.speak(animalMessage);
});



//part 2 book

let bookDiv = document.querySelectorAll("div")[1]; 

let book = {
    title: 'Meditations',
    author: 'Marcus Aurelius',
    readingStatus: true,

    message: function() {
        bookDiv.innerHTML += `<p>You have already read the book ${this.title} by ${this.author}</p>`;
    }
};

book.message();

///////////////////////////////////

let thirdBookDiv = document.querySelectorAll("div")[2]; 

let bookTitle = prompt("Enter the name of the book");
let bookAuthor = prompt("Enter the author of the book");
let readOrNot = prompt("Have you read the book? (Enter true or false)").toLowerCase();

let bookPromptVerion = {
    title: bookTitle,
    author: bookAuthor,
    readingStatus: readOrNot,

    paragraph: function () {
        if (this.readingStatus === "true") {
            thirdBookDiv.innerHTML += `<p>You have already read the book ${this.title} by ${this.author}</p>`;
        }
        else if (this.readingStatus === "false") {
            thirdBookDiv.innerHTML += `<p>You still need to read the book ${this.title} by ${this.author}</p>`;
        }
        else {
            thirdBookDiv.innerHTML += `<p>Please enter a valid input for the reading status (true or false)</p>`;
        }
        
    }
};

bookPromptVerion.paragraph();


/// part 3


