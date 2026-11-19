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
