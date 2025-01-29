function createTable() {
    let rows = prompt("Input number of rows");
    let cols = prompt("Input number of columns");
    let table = document.getElementById("myTable");
    table.innerHTML = "";

    for (let i = 0; i < rows; i++) {
        let row = table.insertRow();
        for (let j = 0; j < cols; j++) {
            let cell = row.insertCell();
            cell.innerText = `Row-${i} Column-${j}`;
        }
    }
}
