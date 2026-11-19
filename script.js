let button = document.getElementById("myButton");

// Change button text
button.innerText = "Press here!";

// Change button color
button.style.backgroundColor = "lightblue";

// React to a click
button.onclick = function() {
    button.innerText = "Clicked!";
    button.style.backgroundColor = "lightgreen";
}


function changeInput() {
    let input = document.getElementById("myInput");

    input.value = "Hallo!";
    input.placeholder = "Neuer Hinweis";
    input.style.backgroundColor = "lightblue";
}


function addRow() {
    let table = document.getElementById("myTable");

    let row = table.insertRow();

    row.insertCell(0).innerText = "Katharina";
    row.insertCell(1).innerText = "22";
}

function addItem() {
    let ul = document.getElementById("myList");

    let newItem = document.createElement("li");
    newItem.innerText = "Orange";

    ul.appendChild(newItem);
}


function showSelection() {
    let select = document.getElementById("mySelect");

    alert("You selected: " + select.value);
}
