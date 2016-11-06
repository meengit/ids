---
layout: default
permalink: /skripte-grundlagen/
title: Grundlagen für Skripte
---

## Skripteorganisation

Programmcode braucht eine nachvollziehbare Struktur. Es kommt oft vor, dass Projekte unterbrochen werden oder nach einiger Zeit im produktiven Betrieb angepasst werden müssen. Ein Skript ohne klare Struktur wird hier zum Horror-Szenario. Variablen, Funktionen, Objekte, alles wirr Durcheinander. Es ist nahezu unmöglich, ein solches Skript auf Anhieb fehlerfrei anzupassen. Der Programmierer hat keine Wahl, er muss sich mühselig mit «try and error» und Tests durch das Skript kämpfen um zu verstehen, wie es funktioniert – oder was er beim letzten Mal für Überlegungen gemacht hat. Deshalb folgen die Beispielskripte dieser Dokumentation einigen einfachen Regeln. Es gibt in der Programmierung viele Strategien, welche sich der Konsistenz von Programmcode widmen. Wir werden hier jedoch nicht all zu weit in die Tiefe gehen. Wer sich fundiert mit diesem Thema auseinandersetzen will, findet unter anderem im Buch [«Weniger schlecht programmieren»][29] aus dem OREILLY Verlag hilfreiche Erklärungen.

## Sprachelemente

Dieses Skript enthält die grundlegenden Sprachbefehle von Javascript. Adobe ExtendScript für Adobe InDesign oder Photoshop baut darauf auf. Es werden hier also nur ganz am Schluss im `try`-`catch` Beispiel ExtenScript-Befehle verwendet.

Das gesamte Skript `Sprachelemente.jsx` kann hier heruntergeladen werden: [Download (zip)](https://github.com/grafisches-forum-zh/scripting/wiki/source/sprachelemente.zip)

[29]:http://www.oreilly.de/catalog/wenschleprogger/#top

### Inhalt `sprachelemente.jsx`

```javascript
/***************************************************************************************
 * sprachelemente.jsx                                                                  *
 * Kurs Adobe InDesign Scripting, Berufsschule für Gestaltung Zürich medien form farbe *
 * Author: A. Eberhard, Grafisches Forum Zürich GFZ                                    *
 * Lizenz: MIT                                                                         *
 *                                                                                     *
 * WICHTIG:                                                                            *
 * Platzhalter für individuelle Anweisungen/Namen sind durch Underlines & VERSALIEN    *
 * gekennzeichnet. Zum Beispiel: __ANWEISUNGEN__                                       *
 ***************************************************************************************/



/**************************************
 * Kommentare (= Notizen)             *
 **************************************/

// Einzeiliger Kommentar

/*
    Ein
    mehrzeiliger
    Kommenar
 */



/**************************************
 * Variablen & Datentypen             *
 **************************************/
 
// Variablen
// Schlüsselwort var __BEZEICHNER__ (kein Schlüsselwort) Zuweisungsoperator (=) __WERT__;
var text01 = 'VW'; // String (Text)
var text02 = 'Mein Auto ist ein ' + text01 + '.'; // String (Text)
var num01 = 24; // Number
var num02 = 24 + 6; // Number
var bool = true; // Boolean, true or false
var empty = null; 
// null ist ein Javascript-Objekt zum Initialisieren und Löschen von 
// Variablen, so dass die Variablenicht länger einen Wert enthält,
// und der Speicher befreit wird.
var undef; 
// Eine Variable, die deklariert wurde, der aber kein Wert zugewiesen 
// wurde, enthält den Wert undefined. Ihre Benutzung führt nicht zu 
// Laufzeitfehlern, aber zu unbrauchbaren Ergebnissen.

// Array
// Schlüsselwort var __BEZEICHNER__ (kein Schlüsselwort) Zuweisungsoperator (=) [ __WERT__, 
// __WERT__, __WERT__, __WERT__ ];
var arr = ['Apfel', 'Birne', 'Banane', 24, true]; // Array
var concat = arr[0] + ' und ' + arr[1] + ' sind Früchte.';

// Object
// Schlüsselwort var __BEZEICHNER__ (darf kein Schlüsselwort sein) Zuweisungsoperator (=) 
// { __SCHLÜSSEL__: __WERT__, __SCHLÜSSEL__:__WERT__, __SCHLÜSSEL__:__WERT__};
var obj = {
            a: 'A im ABC',
            b: 'B im ABC',
            c: 'C im ABC',
            d: 'D im ABC'
          }



/**************************************
 * Funktionen                         *
 **************************************/
 
// Funktionen definieren
// Schlüsselwort function __BEZEICHNER__ (darf kein Schlüsselwort sein)] (__PARAMETER__) {}

// Funkton ohne Parameter definieren
function fn01() {
  $.writeln('Funktion \"fn01\" Ergebnis: ' + concat); 
  // concat = Referenz auf umliegende Variable (von oben)
}

fn01(); // Funktion ohne Argument aufrufen -> Argument wird in Funkton zu Parameter

// Funkton mit Parameter definieren
function fn02(concat) {
   $.writeln('Funktion \"fn02\" Ergebnis: ' + concat);
}

fn02(concat); 
// Funktion mit Argument (Referenz auf Variable concat von oben) aufrufen 
// -> Argument wird in Funkton zu Parameter

fn02('Irgendwas ...'); 
// Funktion mit beliebigem Argument aufrufen 
// -> Argument wird in Funkton zu Parameter



/**************************************
 * Kontroll-/Entscheidungsstrukturen  *
 **************************************/
 
/* IF & ELSE (Schleife)
   ====================
   if (Bedigung) {
      __ANWEISUNGEN A__
   }
   else {
      __ANWEISUNGEN B__
   }
  
    IF MIT ELSE IF UND ELSE AM SCHLUSS
    ==================================
    if (Bedigung) {
       __ANWEISUNGEN A__
   }
   else if {
       __ANWEISUNGEN B__
   }
   else {
       __ANWEISUNGEN C__
   }
   
   WICHTIG
   =======
   – else ist nicht zwingend
   – if lässt sich verschachteln
  
  */

var simpleIF01 = 15; // Number

if(simpleIF01 == 15) { // == -> Vergleich auf «Inhalt»
    $.writeln('Variable \"simpleIF01\" Wert: ' + simpleIF01);
}

var simpleIF02 = '30'; // String

if(simpleIF02 === 30) { // === -> Vergleich auf «Inhalt» & Typ
    $.writeln('Variable \"simpleIF01\" Wert: ' + simpleIF02);
}

var multiIF = true;

if(simpleIF01 == 15) {
  if(simpleIF02 === '30') {
    $.writeln('Verschachteltes \"if\": Beide \"if\" trafen zu.');
    if(multiIF) {
      $.writeln('Verschachteltes \"if\": Einfache Prüfung var "multiIF" war positiv.');
    }
  }
}

if(multiIF) {
    $.writeln('if/else: Variable \"multiIF\" Wert: ' + multiIF);
}
else {
    $.writeln('if/else: Variable \"multiIF\" Wert: ' + multiIF);
}

// Kurzform: (Bedingung) ? true : false;
(multiIF) ? $.writeln('if \"kurz\" richtig.') : $.writeln('if \"kurz\"  FALSCH!');

/* SWITCH AND CASE
   ===============
   switch(__AUSWAHL__) {
    
    case __FALL 1__:
      __ANWEISUNGEN__
      break;
    
    case __FALL 2__:
      __ANWEISUNGEN__
      break;
    
    case  __FALL 3__:
      __ANWEISUNGEN__
      break;
    
    default:
      __STANDARD ANWEISUNGEN__
   
   }

*/

var randNum = Math.random()*10;
randNum = Math.floor(randNum);

switch(randNum) {

  case 0:
    $.writeln('case auf \"0\": Der Wert war: ' + randNum);
    break;
  
  case 1:
    $.writeln('case auf \"1\": Der Wert war: ' + randNum);
    break;
  
  case 2:
    $.writeln('case auf \"2\": Der Wert war: ' + randNum);
    break;
  
  case 3:
    $.writeln('case auf \"3\": Der Wert war: ' + randNum);
    break;
  
  default:
    $.writeln('default: Der Wert war über 3! Nämlich: ' + randNum);
}

/* WHILE (Schleife)
   ================
   while(__BEDINGUNG__) {
      __BEDINGUNG__
   }
  
*/

var i = 0;

while(i++ < 10) {
    $.writeln('while: Der Wert von i war: ' + i);
    
}

/* FOR (Schleife)
   ==============
   for(__VAR MIT STEUERWERT__; __BEDINGUNG__; __VERÄNDERUNG VAR__) {
    __ANWEISUNGEN__
   }
*/

for(var fi = 10; fi > 0; fi--) {
  $.writeln('for: Der Wert von fi war: ' + fi);
}

/* FOR IN (Schleife)
   =================
   for(__INDEX__ in __ARRAY/OBJECT__){
    __ANWEISUNGEN__
   }
   
*/

for(var key in obj) {
  $.writeln('for in: Der Schlüssel war «' + key + '» , Wert «' + obj[key] + '».');
}

/* TRY AND CATCH (Entscheidung)
   ============================
   try { // -> Probiere, die Anweisungen auszuführen
    __ANWEISUNGEN__
   } catch { // -> Wenn try fehlschlägt, dann starte catch
    __ANWEISUNGEN__
   }

*/ 

try { // -> Probiere, die Anweisungen auszuführen
  
  var activeDoc = app.activeDocument;
  activeDoc.layers.add({name:'Grundlayout'});

} catch(err) { // -> Wenn try fehlschlägt, dann starte catch
    $.writeln('Fehler aus \"try\" in \"catch\": ' + err);
}



/**************************************
 * Operatoren                         *
 **************************************/

/* Zuweisungsoperatoren
   ====================    
   Direkter Zuweisungsoperator (=): a = 5 
     -> Wert von a ist 5
   Additions- und Zuweisungsoperator (+=): b += 5 
     -> Wert von b wird um 5 erhöht (Alternative: b = b + 5)
   Subtraktions- und Zuweisungsoperator (-=): c -= 5 
     -> Wert von c wird um 5 verringert (Alternative: c = c - 5)
   Multiplikations- und Zuweisungsoperator (*=): d*= 2 
     -> Wert von d multipliziert mit 2 (Alternative: d = d * 2)
   Divisions- und Zuweisungsoperator (/=): e/=3 
     -> Wert von e geteilt durch 3 (Alternative: e = e / 3)
   Modulo- und Zuweisungsoperator (%=): f %= 10 
     -> Wert von f modulo dem Wert 10
*/

var a; 
// Varialbe erstellen aber ohne Inhalt (Type: undefinded)

a = 'String'; 
// Variable vom Typ Text mit dem Inhalt «String» (Type: String), 
// dynamische Typenzuweisung/-umwandlung in JS

var b = 1; // Variable erstellen, direkt mit Inhalt (Type: Number)
b += 5; // Rechne 1 + 5 und speichere Ergebnis (6) in b

var f = 53; // Variable erstellen, direkt mit Inhalt (Type: Number)

/* Arithmetische Operatoren
   ========================
   
   + (Addition) -> 3 + 4 (Addition von zwei Zahlen oder numerischen Variablen)
   - (Subtration) -> 4 - 3 (Subtraktion von zwei Zahlen oder numerischen Variablen)  
   * (Multiplikation) -> 2 * 3 (Multiplikation von zwei Zahlen oder numerischen Variablen)
   / (Division) -> 9 / 3 (Division von zwei Zahlen oder numerischen Variablen)
   % (Modulo) -> 15 % 9 (=6) (Gibt Rest einer Division zurück, 
                              ACHTUNG: Mögliche Rundungsprobleme bei Gleitkommazahlen!) 
   
   - (Negierung) -> -3 (Einstellige arithmetische Negierung)
   
   ++ (Inkrement) -> wert+1 (Operator erhöht den Wert des Operanden um 1)
   -- (Dekrement) -> wert-1 (Operator vermindert den Wert des Operanden um 1)
      WICHTIG: ++i = Operator vor Operanden 
                     -> Manipulation des Wertes vor dessen Verwendung, 
               i++ = Operator nach Operanden 
                     -> Manipulation des Wertes nach dessen Verwendung

*/

/* Ein ++ und -- Test
   ================== */

var cntTest = 0;

while(10 > cntTest++){ // 10 > 0 -> ok, +1
 // $.writeln(cntTest);
}

var cntTest2 = 0;

while(10 > ++cntTest2){ // 10 > 0 + 1, ok
// $.writeln(cntTest2);
}

/* Boolesche Operatoren
   ====================
   
   Mit logischen Ausdrücken lassen sich unter anderem Bedingungen, 
   Zustände oder Operanden vergleichen.
   
   != 
   Ungleichheit (nicht-gleich): Vergleich, ob zwei Operanden nicht identisch sind, 
   Ergebnis: true wenn nicht gleich .
   8 != 4 + 4 -> false
                                   
   !== 
   Typungleichheit: Vergleich, ob zwei Operanden entweder im Wert oder im Typ 
   nicht identisch sind, Ergebnis: true wenn eines zutrifft.
   '4' !== 4 -> true
   
   === 
   Identität: Vergleich, ob zwei Operanden im Wert und Typ gleich, 
   Ergebnis: true wenn beide zutreffen.
   '4' === 4 // false
   
   == 
   Gleichheit: Vergleich, ob zwei Operanden gleich sind, Ergebnis: true wenn gleich
   4 + 4 == 8 // true
   
   < Kleiner-als: 
   Vergleich, ob erster Operand kleiner als zweiter, Ergebnis: true wenn erster kleiner
   5 < 6 // true
    
   > Grösser-als: 
   Vergleich, ob erster Operand grösser als zweiter, Ergebnis: true wenn erster grösser
   6 > 5 // true 
                  
   <= Kleiner-als-oder-gleich: 
   Vergleich, ob erster Operand kleiner oder gleich dem zweiten ist, 
   Ergebnis: true wenn eines zutrifft. 
   5 <= 6 // true, 6 <= 6 //true
                                
   >= Grösser-als-oder-gleich: 
   Vergleich, ob erster Operand grösser oder gleich dem zweiten, 
   Ergebnis: true wenn eines zutrifft. 
   6 >= 5 // true, 6 >= 6 //true
                               
*/

/* Logische Operatoren
   ===================
   
   && logisches AND bzw. UND: 
   Operator vergleicht Ausdrücke, Ergebnis: true wenn beide Ausdrücke mit wahrem Ergebnis
   (4 + 4 == 8) && (2 + 3 == 5)
                              
   || logisches OR bzw. ODER: 
   Operator vergleicht zwei Ausdrücke, Ergebnis: true wenn ein Ausdruck oder beide Ausdrücke 
   ein wahres Ergebnis haben. 
   (4 + 4 == 7) || (2 + 3 == 5) // true 
                              
                              
   ! logisches NOT bzw. NICHT: 
   Operator dreht logischen Wert um, Ergebnis: true wird zu false und entgegengesetzt.
   !(4 + 4 == 8) // false
  
   ?: ENTWEDER-ODER-Bedingung: 
   Abkürzung der if-else-Entscheidung, vergleicht Wert vor dem ? mit Werten nach dem ?, 
   Ergebnis: true = Wert vor : wird zurückgegeben, false = Wert nach : wird zurückgegeben.
   (3 < 4) ? 'ja':'nein' // ja

*/
  
  // Konsolenmeldung (undefiniert am Ende überschreiben durch letzten Aufruf)
  var end = "Skript erfolgreich fertig."
  end;
```