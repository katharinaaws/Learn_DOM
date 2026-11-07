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
Ein form ist ein HTML-Formular, in das Benutzer Daten eingeben können, z. B. ihren Namen oder ihre E-Mail-Adresse.

Which parameters of this DOM element can be accessed from javascript? & What do these parameters do?

    Das DOM-Element `<form>` wird verwendet, um Benutzereingaben zu sammeln.

    Mit JavaScript kann ich auf verschiedene Eigenschaften zugreifen:

    - `id`: Eindeutige Kennung des Formulars
    - `name`: Name des Formulars
    - `action`: Ziel der Datenübertragung
    - `method`: Art der Datenübertragung (GET/POST)
    - `elements`: Zugriff auf Eingabefelder
    - `noValidate`: Steuerung der automatischen Überprüfung
    - `target`: Bestimmt, wo die Antwort geöffnet wird

    Mit `document.getElementById()` kann ich auf das Formular zugreifen und seine Eigenschaften auslesen oder verändern.
