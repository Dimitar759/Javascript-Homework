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

