let tableContainer = document.getElementById('tableContainer');
let createButton = document.getElementById("createTableBtn");

function createTable(rows, columns) {
    let tableContent = '<table border="1">';
    for (let i = 1; i <= rows; i++) {
        tableContent += '<tr>';
        for (let j = 1; j <= columns; j++) {
            tableContent += `<td>Row-${i} Column-${j}</td>`;
        }
        tableContent += '</tr>';
    }
    tableContent += '</table>';

    tableContainer.innerHTML = tableContent;
}

createButton.addEventListener("click", function() {
    let rows = parseInt(document.getElementById('rowsInput').value);
    let columns = parseInt(document.getElementById('columnsInput').value);

    createTable(rows, columns);
});