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

let numberOfIngredients = parseInt(prompt("Enter the number of ingredients for your recipe"));

let ingredients = [];

for (let i = 0; i < numberOfIngredients; i++){
    let foodIngredient = prompt("Add ingredient:");
    
    ingredients.push(foodIngredient);

}


let headerElement = document.getElementById("recipeName");
headerElement.innerText = recipeName;

let listElement = document.getElementById("ingredients");

for (let i = 0; i < ingredients.length; i++){
    listElement.innerHTML += "<li>" + ingredients[i] + "</li>";
}