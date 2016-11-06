---
layout: default
permalink: /js-grundlagen/
title: Grundlagen Javascript
---

## Die JavaScript-Syntax

JavaScript ist die syntaktische Grundlage für Adobe ExtendScript. Das heisst, Adobe ExtendScript folgt in der Formatierung des Programmcodes den Regeln von JavaScript. Die kommenden Abschnitte geben einen Überblick zu deren wichtigsten Konzepten. Normalerweise wird die Sprache mit der Anwendung im Browser erklärt. Diese Dokumentation ist dagegen auf die Anwendung im Adobe ExtendScript Toolkit ausgelegt. Wo vermerkt, können die Code-Beispiele ins Adobe ExtendScript Toolkit kopiert und ausgeführt werden.

Genau genommen ist JavaScript keine objektorientierte sondern eine objektbasierte Sprache. JavaScript orientiert dennoch umfangreich an Konzepten aus objektorientierten Sprachen. Deshalb werden wir in diesem Skript hauptsächlich mit dem Begriff «objektorientiert» hantieren. Er schliesst die objektbasierten Merkmale von JavaScript ein. 

Objekte sind zusammenhängende Anweisungen und Daten die eine abgeschlossene, eigenständige Einheit bilden. Sie bestehen aus Eigenschaften (auch Attribute oder Objektdaten genannt) und Methoden (Anweisungen). Eigenschaften charakterisieren ein Objekt. Sie können unter anderem mit Zeichen, Zahlen oder einem Zustand belegt sein. Methoden sind die aktiven Funktionalitäten. Sie führen Operationen durch, in dem sie Eigenschaften verändern oder neue erzeugen. Das bedeutet, es gibt keine Methoden oder Eigenschaften ohne ein zugehöriges Objekt. Nach aussen versteckt ein Objekt seine innere Struktur vor anderen Objekten (Information Hiding, Datenkapselung). Der entscheidende Vorteil dieser Datenkapselung ist, dass Objekte in ihren inneren Strukturen verändert werden können, solange sie sich nach aussen unverändert zeigen.

### Klassen, Instanzen und Vererbung

Klassen oder Objektdeklarationen sind eine Art Baupläne zur Bildung von konkreten Objekten. Im objektorientierten Sprachgebrauch werden Objekte als Instanzen von Klassen bezeichnet. Sie befinden sich nach ihrer Erzeugung in einem konkreten Zustand, während die Klassen selbst keinen Zustand haben.

Bei der Arbeit mit Klassen ist die hierarchische Struktur besonders wichtig. In der objektorientierten Philosophie sollten gemeinsame Details möglichst in einer übergeordneten Superklasse zusammengefasst werden (auch «Verallgemeinerung» genannt). Erst wenn Unterscheidungen nötig werden, werden untergeordnete Klassen gebildet (sogenannte Spezialisierung). Jede (gewöhnliche) Klasse  kann eine Vielzahl von Unterklassen (auch Subklassen) und konkreten Instanzen (abgeleitete Objekte) haben. Die ineinander geschachtelten Klassen bilden den Klassenbaum. 

Die streng hierarchische Beziehung von übergeordneten Klassen zu ihren Subklassen heisst Vererbung. Jede Subklasse bekommt alle vorgesehenen Eigenschaften und Methoden ihrer Superklasse(n) vererbt. Daher sollte jede Subklasse sinnvollerweise mindestens eine Eigenschaft oder Methode mehr haben als ihre Superklasse(n) – oder zumindest vererbte Dinge irgendwie verändern. Wenn eine Methode oder Eigenschaft in einer konkreten Objektklasse nicht vorhanden ist, wird sie in der nächsthöheren Superklasse gesucht. Ist sie dort desgleichen nicht vorhanden, wird in der nächsthöheren Klasse im Klassenbaum gesucht – bis die oberste Superklasse des Klassenbaums erreicht ist. Der Zugriff erfolgt in der ersten Klasse mit einem Treffer. In JavaScript-Quelltexten ist keine Vererbung im eigentlichen Sinne, wie eben beschrieben, möglich (wie beispielsweise in Java). Das objektbasierte Konzept von Javascript orientiert sich jedoch umfangreich an den Konzepten der objektorientierten Philosophie. Die Grundklasse, das Grundobjekt in JavaScript ist `Object`. Diese Klasse ist die Superklasse aller Klassen im Klassenbaum und enthält die Grundeigenschaften und -methoden eines Objekts.

Doch was heisst das im Kontext von Adobe InDesign Scripting? Dieser Kurs handelt von Skripten auf der Basis von Adobe ExtendScript, welches eine erweiterte Form von Javascript ist. Es gibt auch in Adobe ExtendScript Klassen und Klassenbäume. Die «Core Javascript Classes» bilden den javascript-basierten Sprachkern. Die «Script UI Classes» umfassen alle Elemente für die Erzeugung von Benutzeroberflächen. Zusammen mit den «Core Javascript Classes» sind sie unabhängig von den Zielapplikationen und können in allen eingesetzt werden. Die «Object Models», zum Beispiel «Adobe InDeisgn CC 2015 (9.0) Object Model», enthalten die Elemente der jeweiligen Zielapplikation und bauen auf den «Core Classes» und «UI Classes» auf. Sie sind ausschliesslich in der entsprechenden Applikation verfügbar. Das Adobe InDesign Object Model sieht im überblick zum Beispiel so aus:

![Adobe InDesign Object Model]({{ site.baseurl}}/img/idObjectModel.png) 

*(Quelle: Adobe InDesign CS6 Scripting Tutorial.pdf)*

Wichtig: Das gezeigte Schema entspricht nicht den Programmbefehlen im Adobe ExtendScript Toolkit. Es visualisiert die grundlegenden Zusammenhänge des Adobe InDesign Objektmodells. Um beispielsweise die «Application», also Adobe InDesign, in einem Skript anzusprechen, wird der Befehl `app` genutzt.

Die einzelnen Elemente des Objektmodells können so erklärt werden *(Quelle: Adobe InDesign CS6 Scripting Tutorial.pdf)*:

| Term                    | Was er repräsentiert
|-------------------------|-----------------------
| Application             | Das Programm Adobe InDesign.
| Application defaults    | Die Einstellungen von Adobe InDesign (z. B. Farben, Absatzformate, Objektformate und die Standardeinstellungen für alle neuen Dokumente).
| Applicatoin events      | Ereignisse die eintreten, wenn ein Benutzer oder ein Script mit Adobe InDesign interagiert (Dokumente öffnen/schliessen/speichern, Menübefehle aufrufen usw.).
| Application Menus       | Menüs, Submenüs und Kontextmenüs der Benutzeroberfläche. Skripte können diese ausführen oder ausgeführt werden, wenn Menübefehle aufgerufen werden.
| Application methods     | Methoden, die von einem Skript in Adobe InDesign ausgeführt werden können (z. B. Suchen/Ersetzen von Text, aktuelle Auswahl kopieren, Dokumente anlegen usw.).
| Application preferences | Z. B. Text-Voreinstellungen, PDF Export-Einstellungen oder Dokument-Voreinstellungen. Viele dieser Voreinstellungsobjekte existieren auch auf dem Dokumenten-Level. Ebenso wie bei der Benutzeroberfläche werden Anwendungseinstellungen auf neue Dokumente angewendet und Dokumenteinstellungen ändern die Einstellungen eines bestimmten Dokuments.
| Application properties  | Die Voreinstellungen des Programms (z. B. der Installationspfad).
| Books                   | Die Sammlung der geöffneten Adobe InDesign Bücher.
| Document                | Ein Adobe InDesign Dokument.
| Document defaults       | Die Dokumenteinstellungen (z. B. Farben, Absatz- und Zeichenformate).
| Document elements       | Elemente einer Seite. Z. B. Stories und importierte Grafiken aber auch gezeichnete Elemente (Rechtecke, Kreise usw.), Textfelder, XML-Elemente und alle anderen Typen von Objekten, die auf einer Seite importiert oder erstellt werden können.
| Document event          | Ereignisse auf der Ebene «Dokument» (z. B. Textimport).
| Document methods        | Methoden auf der Ebene «Dokument» (z. B. Dokument schliessen, drucken oder exportieren).
| Document preferences    | Dokumenteigenschaften wie Name, Anzahl Seiten und die Lage des Nullpunkes.
| Documents               | Eine Sammlung von Dokumenten. 
| Libraties               | Eine Sammlung von Bibliotheken.
| Page                    | Eine einzelne Adobe InDesign Seite.
| Page items              | Alle Objekte, die auf einem Druckbogen erstellt oder platziert werden können. 
| Pages or Spreads        | Seiten oder Druckbogen in einem Adobe InDesign Dokument.
| Stories                 | Die Textketten in einem Adobe InDesign Dokument.
| Text objects            | Zeichen, Wörter, Zeilen, Absätze und Spalten o. ä. sind Textobjekte in einer Adobe InDesign Story. 

Für die effektiven Programmierbefehle zum Objektmodell gibt es im Adobe ExtendScript Toolkit den «Object Model Viewer». Um diesen zu starten, muss im geöffneten Programm *`Hilfe > Objektmodell-Viewer`* gewählt werden.

Wichtig: Die im «Objektmodell-Viewer» dargestellte Klasse (Objekt) beginnt jeweils mit einem Grossbuchstaben. Es gibt jedoch zwei Situationen, wie diese beim Programmieren von Skripten aufgerufen werden: Entweder wird die Klasse direkt aufgerufen oder als ein bereits instanziiertes Objekt der Klasse. Der Unterschied besteht darin, dass Klassenelemente wie zum Beispiel `File` zur Verfügung stehen, ohne dass ein konkretes Objekt erzeugt wurde. Die Entwicklungsumgebung kann ja nicht bereits vorab wissen, mit welchen Dokumenten gearbeitet werden soll. Solche Klassen sind deshalb eine Art Vorlage, die auf ihre Verwendung warten. Werden sie aufgerufen, erzeugen sie eine Objektinstanz. Dagegen gibt es Objekte respektive vorgefertigte Instanziierungen, die vom Interpreter automatisch erzeugt werden, wenn ein Skript ausgeführt wird. In der Praxis heisst das: Wenn zum Beispiel ein Dokument geladen werden soll, geschieht dies über die Klasse `File`;

```javascript
// Pfad zum Dokument definieren
// und in Variable filePath vom Typ String «speichern»
var filePath = '~/Desktop/dokument.txt';

// Textdokument referenzieren
// Klasse File aufrufen, Pfad übergeben
// und in Variable file als Instanz von File speichern
var file = File(filePath);
```

Die Variable `filePath` definiert den Pfad auf das Dokument, welches durch die `File`-Klasse referenziert resp. «in den Programmcode importiert» werden soll. Die Zeile `var file = File(filePath);` ruft über die Klasse `File` das referenzierte Dokument auf und baut die Variable `file` zu einer Instanz (= Kopie) der Klasse `File` um. Das heisst, sie erhält alle Methoden (= Funktionen) und Eigenschaften, welche die Klasse `File` für sie vorsieht. Die Variable `file` kann sich von nun an im Programm Code frei verändern. Es können ihr beispielsweise weitere Eigenschaften hinzugefügt werden, welche in der Klasse nicht existieren. Das heisst: Werden die JavaScript-Core-Klassen in einem Skript explizit aufgerufen, beginnen sie mit einem Grossbuchstaben. 

Dagegen referenzieren Instanzelemente bereits erzeugte Objektinstanzen. Wird beispielsweise per Skript ein neues Dokument erzeugt, dann geschieht dies über `var newDoc = app.documents.add()`. `app` zeigt auf das Programmobjekt von Adobe InDesign. Die zugehörige Klasse im «Objektmodell-Viewer» ist `Application`. Sie hat eine Eigenschaft `documents` welche auf die Klasse `Documents` zeigt (links blaues Icon = Eigenschaft, Namen nach dem Doppelpunkt = referenzierte Klasse). Die Klasse `Documents` hat wiederum eine Methode (= Funktion) `add()`, welche das Dokument erstellt und an die Variable `newFile` übergibt. Instanzelemente, wie sie hier behandelt werden, sind also eine Art vorab zusammengebaute Komponenten. Wenn ein Skript ausgeführt wird, werden sie vom Interpreter vorab erzeugt um anschliessend darauf zuzugreifen. Für die Unterscheidung von Klassen- und Instanzelementen in Adobe InDesign gibt es eine einfache Eselsbrücke:  Instanzelemente betreffen meist Operationen, die mit einer Programmfunktion zusammenhängen. Zum Beispiel ein neues Dokument anlegen oder auf die Voreinstellungen zugreifen.  Wenn Sie im Programmcode eigene Variablen oder Funktionen referenzieren, dann sind dies auch Instanzelemente. Klassenelemente sind wie vorgefertigte Schablonen, die jedoch noch im Regal stehen. Sie werden gebraucht, wenn das Programm nicht vorhersehen kann, was benötigt wird – zum Beispiel die Referenzierung eines Dokuments auf dem Filesystem (= ausserhalb des Programms).

![Klassenbrowser im Objektmodell-Viewer]({{ site.baseurl}}/img/objmdlvw-classes.png)

![Class, Constructor & Instance]({{ site.baseurl}}/img/objmdlvw-details.png)  


### Token (Schlüsselwörter)

Token sind Zeichen oder Zeichenkombinationen einer Sprachdefinition, die mit einem bestimmten Sinn behaftet sind. Auf ihnen fusst die gesamte Syntax einer Sprache. Sie werden auch als **Schlüsselwörter** bezeichnet.

Viel genutzte Schlüsselwörter in JavaScript sind:

| Schlüsselwort | Beschreibung 
| ------------- | ------------- 
| `break`| Abbruch von Schleifen 
| `case` | Einleitung eines Treffers (`switch-case`) 
| `catch`| Beginn eines Blocks zum Auffangen von Ausnahmen 
| `continue`| Fortsetzung von Schleifen 
| `default`| Vorgabefall bei `switch-case`(wenn kein Ergebnis) 
| `delete`| Löschen von Datenfeldelement oder selbst definierter Objekteigenschaft 
| `do`| Beginn einer fussgesteuerten Schleife (Überprüfung ob «weiter» am Fuss der Schleife) 
| `else`| Einleitung alternativer Block bei `if`-Entscheidungsstruktur 
| `false`| Der Wert ist *falsch* 
| `finally`| Einsatz im JS-Ausnahmebehandlungskonzept, leitet auszuführenden Block ein  
| `for`| Beginn kopfgesteuerte Schleife 
| `function`| Leitet Funktion ein 
| `if`| Leitet `if`-Fallunterscheidung ein 
| `in`| Teil von `for`... `in`, Bedingte Anweisung in Fallunterscheidung 
| `instanceof`| Test des Objekttyps 
| `new`| Einleitung bei Verwendung von Konstruktor für Objektdefinition 
| `return`| Sprachanweisung mit (optionaler) Übergabe eines Rückgabewerts von Funktionen 
| `switch`| Einleitung `switch-case`Fallunterscheidung 
| `this`| Stellvertreter für aktuelle Instanz des Objekts 
| `throw`| JS-Ausnahmebehandlungskonzept: Auswerfen einer Ausnahme 
| `true`| Der Wert ist *wahr* 
| `try`| JS-Ausnahmebehandlungskonzept: Beginn des Umschliessens einer kritischen Anweisung
| `typeof`| Typ eines Elements 
| `var`| Beginn einer Variablendefinition 
| `void`| Leerer Funktionstyp 
| `while`| Einleitung einer kopfgesteuerten Schleife 
| `with`| Erlaubt mehrere Anweisungen mit Objekt durchzuführen 

### Kommentare

Kommentare sind Notizen im Quelltext oder Quelltext-Passagen (= Programmteile), die nicht ausgeführt werden sollen. Sie werden vom Interpreter ignoriert. Einzeilige Kommentare beginnen mit `//`, mehrzeilige Kommentare beginnen mit `/*` und enden mit `*/`.

```javascript
// Dies ist ein einzeiliger Kommentar

/* Dies ist 
   ein Kommentar
   über mehrere
   Zeilen hinweg. */
```
