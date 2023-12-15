// Part one
let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs[0].innerText);
console.log(allParagraphs[1].textContent);

for (let i = 0; i < allParagraphs.length; i++) {
    allParagraphs[i].innerText = "Changed paragraph text";
}

let allHeaders = document.querySelectorAll('h1, h3');

for (let i = 0; i < allHeaders.length; i++) {
    allHeaders[i].innerText = "Changed header text";
}



/////Bonus

let recipeName = prompt("Enter the name of your recipe:");

let ingredients = [];

while (true) {
    let ingredient = prompt("Enter a food ingredient (or type 'done' to finish):");

    if (ingredient === "done") {
        break; 
    } else {
        ingredients.push(ingredient); 
    }
}

let headerElement = document.getElementById("recipeName");
headerElement.innerText = recipeName;

let listElement = document.getElementById("ingredients");

for (let i = 0; i < ingredients.length; i++){
    listElement.innerHTML += "<li>" + ingredients[i] + "</li>";
}