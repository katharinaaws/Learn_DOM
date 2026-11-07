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

Task 2
How can I access the list "myList" in the html file?
    _Ich kann mit `document.getElementById()` auf bestimmte HTML-Elemente zugreifen_ 
    Dafür muss ich die ID des Elements kennen__
    _Beispielsweise kann ich mit `document.getElementById("myList")` meine Liste finden und in einer Variable speichern_

How can I change the list "myList" in the html file?
    _Ich kann  eine HTML-Liste mithilfe von JavaScript und dem DOM verändern_
    _Zuerst greife ich mit `document.getElementById("myList")` auf die Liste zu_
    _Anschließend kann ich mit `document.createElement("li")` einen neuen Listenpunkt erstellen und ihn mit `appendChild()` zur bestehenden Liste hinzufügen_


Task 3
1.Was ist ein form-Element?
Ein form ist ein HTML-Formular, in das Benutzer Daten eingeben können, z. B. ihren Namen oder ihre E-Mail-Adresse.

