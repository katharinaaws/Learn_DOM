Task 1
What is the "document" variable in JavaScript?
    _DOM ist eine Art Liste aller Bauteile einer HTML Webseite (Überschrift, Text, etc..) wird als ganzes in ein Object -> gespeichert_
    _Das DOM ist die Verbindung zwischen deiner HTML-Webseite und JavaScript_
    _Mit Javascript kann man das Object (DOM) wenn man es verbindet - verändern_ 
    _Mit HTML erstellt man die Bauteile_

What can I do with the "document" variable?
    _Ich kann die "document" variable verändern mit javaScript!_

<h1 id="title">Hello World!</h1>
<button onclick="changeText()">Click me!</button>

<function changeText() {
document.getElementById("title").textContent = "Hello JavaScript!";>
}
