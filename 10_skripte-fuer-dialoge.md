---
layout: default
permalink: /skripte-fuer-dialoge/
title: Mit Dialogen arbeiten
---

#### Skript 005, Einführung in Dialge

Im nächsten Skript wird ein Dialog-Fenster erstellt. Dialoge-Fenster ermöglichen es, Benutzereingaben in ein Skript aufzunehmen, respektive zu verarbeiten. In den nächsten Beispielen bauen wir ein Dialog-Fenster auf, bei dem Angaben für die Voreinstellungen eingegeben werden können.

#### Wie Fenster mit Adobe ExtendScript in Adobe InDesign funktionieren

Adobe ExtendScript enthält einen vorgefertigten «Baukasten» für die Anzeige von Fenstern. Dieser wird durch die `ScriptUI`-Klassen repräsentiert. Deren Inhalt und Struktur kann unter anderem über den *`Objektmodell-Viewer`* unter *`Browser`* > *`ScriptUI Classes`* eingesehen werden. Der *`Objektmodell-Viewer`* lässt sich über das Menü *`Hilfe`* aufrufen.

![*`Objektmodell-Viewer`* mit eingestellten *`ScriptUI Classes`* im Abschnitt *`Browser`* und ausgewähltem `Window`-Objekt]({{ site.url }}/img/objmdlvw-cls_window.fw.png)

Damit der Programmcode übersichtlich bleibt und das Fenster gegebenenfalls mehrfach verwendet werden kann, wird es in diesem Beispiel mit einem Funktionsblock (`function ...`) umschlossen.

```javascript
// script.005.jsx

// "Funktionsblock" erstellen
function setConfigWindow() {
 
}
```

Die Zeilen ***deklarieren*** eine Funktion mit dem Bezeichner `setConfigWindow`. Würde das Skript so ausgeführt, würde nichts passieren. Der Interpreter hätte die Funktion zwar eingelesen respektive registriert. Das sie aber bis jetzt nicht über `setConfigWindow();` ***aufgerufen*** wurde, hat er sie auch nicht abgearbeitet.

Nun wird das Fenster initialisiert:

```Javascript
// script.005.jsx

// "Funktionsblock" erstellen
function setConfigWindow() {

	// Dialog-Fenster erstellen
  var configWindow = new Window('dialog','Presets definieren');
}
```

`new Window('dialog','Presets definieren')` erzeugt eine Instanz von der Klasse`Window` aus den `ScriptUI Classes`. Vereinfacht formuliert wird hierbei ab dem «Bauplan» der Klasse `Window` ein neues «reales» Objekt in unserem Skript erzeugt, das einem leeren Fenster entspricht. Die Argumente `dialog` und `Presets definieren` legen dabei den Fenstertyp und den Titel des Fensters fest. Übrigens: Eine gute Hilfe bei der Arbeit mit Fenstern ist der Leitfaden [«ScriptUI» von Peter Kahrel][29].

Nach dem Erstellen ist das neue Fensterobjekt der Variable `configWindow` zugewiesen. Ihr Bezeichner bildet die Referenz für das weitere «Zusammenbauen» des Fensters. 

Als nächstes werden die Standard-Buttons `Ok` und `Cancel` hinzugefügt.

```Javascript
// script.005.jsx

// "Funktionsblock" erstellen
function setConfigWindow() {

	// Dialog-Fenster erstellen
  var configWindow = new Window('dialog','Presets definieren');

  // Buttons OK & Cancel hinzufügen
  configWindow.add('button', undefined, 'Ok');
  configWindow.add('button', undefined, 'Cancel');
}
```

Die Variable `configWindow` referenziert das vorhin erstellte `Window`-Objekt. Dieses hat alle Funktionen und Eigenschaften der Klasse `Window` geerbt respektive gemäss deren «Bauplan» erhalten. Dazu gehört auch die Funktion `add()` – wie im *`Objektmodell-Viewer`* nachgesehen werden kann. Mit dieser können dem Fenster weitere Elemente, wie zum Beispiel Buttons, hinzugefügt werden. 

![*`Objektmodell-Viewer`* mit eingestellten *`ScriptUI Classes`* im Abschnitt *`Browser`* und ausgewählter `add()`-Methode des `Window`-Objekts]({{ site.url }}/img/objmdlvw-cls_window-add.fw.png)

Als nächstens soll ein erster Blick auf das erzeugte Fenster möglich werden.

```javascript
// script.005.jsx

// "Funktionsblock" erstellen
function setConfigWindow() {
  
  // Dialog-Fenster erstellen
  var configWindow = new Window('dialog','Presets definieren');

  // Buttons OK & Cancel hinzufügen
  configWindow.add('button', undefined, 'Ok');
  configWindow.add('button', undefined, 'Cancel');

  // Fenster in Adobe InDesign anzeigen
  configWindow.show();
}

// Funktion effektiv ausführen (abarbeiten)
setConfigWindow();
```

Die Anweisung `configWindow.show();` sagt Adobe InDesign, dass das Fenster, welches mit `configWindow` referenziert wird, angezeigt werden soll. `show()` ist hierbei ebenfalls eine geerbte Funktion, so wie `add()`. 

![*`Objektmodell-Viewer`* mit eingestellten *`ScriptUI Classes`* im Abschnitt *`Browser`* und ausgewählter `show()`-Methode des `Window`-Objekts]({{ site.url }}/img/objmdlvw-cls_window-show.fw.png)

Die Anweisung `setConfigWindow();` ruft die Funktion auf und weist den Interpreter an, jetzt die Funktionsdeklaration abzuarbeiten. Das heisst, auch wenn in der Funktion `configWindow.show();` steht, wird damit so lange nichts gemacht, bis der Interpreter angewiesen wird, den Funktionsblock auszuführen.

Zu beachten ist, dass nun im *`Debug-Bedienfeld`* Adobe InDesign ausgewählt ist. Ansonsten schlägt das Skript unter Umständen fehl.

![Adobe InDesign als ausgewählte Zielapplikation im *`Debug-Bedienfeld`*.]({{ site.url }}/img/debug-idsSelected.fw.png)

Das erzeugte Fenster hat noch nicht all zu viel Inhalt. Die Buttons «Ok» und «Cancel» stehen übereinander. Das soll als nächstes geändert werden. Denn in den meisten Dialogfenstern stehen die beiden nebeneinander. Dazu muss eine Gruppe für Bedienelemente erstellt werden. Hierzu muss das bestehende Skript umformuliert werden.

![Dialog-Fenster mit **nicht** gruppierten Buttons übereinander.]({{ site.url }}/img/dialog_box001.fw.png)

```javascript
// script.005.jsx

// "Funktionsblock" erstellen
function setConfigWindow() {

	// Dialog-Fenster erstellen
  var configWindow = new Window('dialog','Presets definieren');
  
  // Anzeigegruppe erstellen
  var okCancel_Grp = configWindow.add('group');
  
  // Buttons OK & Cancel hinzufügen
  okCancel_Grp.add('button', undefined, 'Ok');
  okCancel_Grp.add('button', undefined, 'Cancel');
  
  // Fenster in Adobe InDesign anzeigen
  configWindow.show();
}

// Funktion effektiv ausführen (abarbeiten)
setConfigWindow();
```

[\[ Download script.005.jsx as .zip \]](https://github.com/grafisches-forum-zh/scripting/wiki/source/script.005.zip) 

Eine Gruppe ist eine Art «Zwischenelement» welches mehrere Anzeigelemente in einer Reihe zusammenfasst.  Mit ` configWindow.add('group');` wird dem Fenster eine neue Gruppe hinzugefügt. Diese wird der Variable ` okCancel_Grp ` zugewiesen. ` okCancel_Grp ` referenziert damit so zu sagen ein Unterobjekt von ` configWindow`. In den nächsten Zeilen werden der Gruppe die beiden Buttons «Ok» und «Cancel» hinzugefügt. Das Argument `button` legt den Typ des hinzugefügten Elements fest. `undefined` besagt, dass es keine speziellen Positionierungseigenschaften für den zu erzeugenden Button gibt. `'Ok'` und `'Cancel'` beschreiben den Text im Button. Wenn nun das Skript erneut ausgeführt wird, stehen die beiden Buttons nebeneinander.

![Dialog-Fenster mit gruppierten Buttons nebeneinander.]({{ site.url }}/img/dialog_box002.fw.png)

#### Skript 006, auf Events reagieren

Das Skript 006 erweitert die Code-Basis aus dem Skript 005 um *Event-Handler*. *Event-Handler* reagieren auf ausgelöste *Events*. *Events* sind Aktionen, die innerhalb eines Skripts oder einer Applikation ausgelöst werden. Das können sowohl Benutzerkationen als auch skript- oder applikationsinterne Aktionen sein. Um *Events* abzufangen gibt es sogenannte *EventListener*. Sie horchen, ob ein Event ausgelöst wird. Abstrahiert formuliert besteht also ein *EventHandler* aus einem *EventListener* und einem Programmblock der ausgeführt wird, wenn der *EventListener* anschlägt, respektive der *Event*, auf den er horch, ausgelöst wird. Weitere Informationen zu den *Events*, *EventHandler* und *EventListener* sind unter anderem im *`Objektmodell-Viewer`* und im «JavaScript Tools Guide» unter «Defining behavior with event callbacks and listeners» zu finden. 

![*`Objektmodell-Viewer`* mit eingestellten *`ScriptUI Classes`* im Abschnitt *`Browser`* und ausgewählter `addEventListener()`-Methode des `Button`-Objekts]({{ site.url }}/img/button_cls-eventListener.fw.png)

Im aktuellen Beispiel kann auf den Einsatz von *EventListener* und *EventHandler* verzichtet werden. Die Buttons «Ok» und «Cancel» haben im Zusammenhang mit Dialog-Fenstern eine spezielle Bedeutung. Schematisch formuliert, wird ihr Rückgabewert von der Funktion `.show()` aufgefangen und nach deren Ausführung als boolscher Wert zurückgegeben. Klickt der Nutzer «Ok» ist der Rückgabewert `true`, klickt er `Cancel`, ist der Rückgabewert `false`.

```javascript
// script.006.jsx

// "Funktionsblock" erstellen
function setConfigWindow() {

	// Dialog-Fenster erstellen
  var configWindow = new Window('dialog','Presets definieren');
  
  // Anzeigegruppe erstellen
  var okCancel_Grp = configWindow.add('group');
  
  // Buttons OK & Cancel hinzufügen
  okCancel_Grp.add('button', undefined, 'Ok');
  okCancel_Grp.add('button', undefined, 'Cancel');
  
  // Fenster in Adobe InDesign anzeigen
  var usrAction = configWindow.show();
  
  // Objekt aus Funktion zurückgeben
  return {
    result: usrAction
  }
}

// Funktion effektiv ausführen (abarbeiten) und Ergebnis in Variable speichern
var shownWindow = setConfigWindow();

// Ok geklickt = true
if(shownWindow.result == true){
    $.writeln('Ok geklickt');
 }

// abgebrochen oder Cancel geklickt = false
else {
    $.writeln('Cancel geklickt oder abgebrochen.');
}
```

[\[ Download script.006.jsx as .zip \]](https://github.com/grafisches-forum-zh/scripting/wiki/source/script.006.zip) 

Die Variable `usrAction` speichert das Ergebnis aus ` configWindow.show()`. Dieses wird erstellt, wenn der Nutzer entweder den Button «Ok» oder «Cancel» geklickt oder das Dialog-Fenster zum Beispiel über die *`Esc`* beendet hat. Um später mit diesem Wert arbeiten zu können, wird er über eine `return`-Anweisung aus der Funktion `setConfigWindow()` zurückgegeben. Im Beispiel wird ein Objekt erstellt, das eine Eigenschaft enthält: `result`. `result` speichert das Ergebnis von `usrAction` und wird über die `return`-Anweisung an die Variable angehängt, welche die Ergebnisse aus ` setConfigWindow()` speichern soll: `shownWindow`. Damit ist die Eigenschaft `result` im Anschluss ganz normal über die Punkt-Notation von JavaScript vefügbar (`shownWindow.result`, [weitere Informationen zur Punkt-Notation in JavaScript unter wiki.selfhtml.org ][30]).

Sobald ` shownWindow.result` verfügbar ist, wird damit eine `if`-`else`-Schleife angestossen. `if` springt an, wenn der Nutzer «Ok» geklickt hat, `else` in allen anderen Fällen. Die Anweisungen mit `$.writeln([...])` schreiben beim Eintreten des entsprechenden Falls als Kontrolle eine Nachricht in die *`JavaScript-Konsole`* des Adobe ExtendScript Toolkit.

#### Skript 007, Benutzereingaben

Das nächste Skript erweitert das Dialog-Fenster aus dem Skript 006 um Eingabefelder. 

```javascript
// script.007.jsx

// "Funktionsblock" erstellen
function setConfigWindow() {
  
  // Dialog-Fenster erstellen
  var configWindow = new Window('dialog','Presets definieren');
  
  // Anzeigekolonne hinzufügen (siehe auch Adobe JavaScript Tools Guide)
  configWindow.column01 = configWindow.add ('group {orientation: "column"}'); 
  
  // "Umrahmung" mit "Titel" hinzufügen
  configWindow.column01.gridPanel = configWindow.column01.add ('panel', undefined, 'Grundlinienraster');
  
  // Mit dem "Innern" der Umrahmung folgendes machen ...
  with(configWindow.column01.gridPanel){
    
    // "Orientierung" der "Umrahmung" auf links stellen
    aligment = 'left';
    
    // Anzeigegruppe für 1. Eingabe hinzufügen
    var gridBeginGroup = add('group');
    
    // "Eingabebeschrifgung" (statictext) & Eingabefeld (edittext) hinzufügen
    gridBeginGroup.add('statictext', [0,0,140,15], 'Anfang (in mm):');
    gridBeginGroup.add('edittext', [0,0,150,24], '0');
    
    // Anzeigegruppe für 2. Eingabe erstellen
    var gridRelTo = add('group');
  
    // "Eingabebeschrifgung" (statictext) & Auswahlliste (dropdownlist) hinzufügen
    gridRelTo.add('statictext', [0,0,140,15], 'Relativ zu:');
    var gridRelToInputField = gridRelTo.add('dropdownlist', [0,0,150,24], ['Oberer Seitenkante', 'Oberen Seitenrand']);
    gridRelToInputField.selection = 0;
    
    // Anzeigegruppe für 3. Eingabe erstellen
    var gridHeightGroup = add('group');
  
    // "Eingabebeschrifgung" (statictext) & Eingabefeld (edittext) hinzufügen
    gridHeightGroup.add('statictext', [0,0,140,15], 'Grundlinienraster (in pt):');
    gridHeightGroup.add('edittext', [0,0,150,24], '0');
   
  }
  
  // In der "Anzeigekolonne" aber ausserhalb der "Umrahmung" Buttons hinzufügen
  configWindow.column01.btnGrp = configWindow.add('group');
  configWindow.column01.btnGrp.add('button', undefined, 'Ok');
  configWindow.column01.btnGrp.add('button', undefined, 'Cancel');
  
  $.writeln(gridRelToInputField);
  
  // Fenster in Adobe InDesign anzeigen
  var usrAction = configWindow.show();
  
  // Objekt aus Funktion zurückgeben
  return {
    result: usrAction
  }
}

// Funktion effektiv ausführen (abarbeiten) und Ergebnis in Variable speichern
var shownWindow = setConfigWindow();

// Ok geklickt = true
if(shownWindow.result == true){
    $.writeln('Ok geklickt');
 }

// abgebrochen oder Cancel geklickt = false
else {
    $.writeln('Cancel geklickt oder abgebrochen.');
}
```

[\[ Download script.007.jsx as .zip \]](https://github.com/grafisches-forum-zh/scripting/wiki/source/script.007.zip) 

Die Struktur des Skripts hat sich durch die Anpassungen stark verändert. Es gibt viele Möglichkeiten wie Dialog-Fenster in Adobe ExtendScript umgesetzt werden können. Das Skript 007 versucht einen Weg mit wenig Tipparbeit zu gehen. Die Variable `configWindow` referenziert noch immer das bereits in den vorhergehenden Skripten erstellte Dialog-Fenster.  Für alle weiteren Schritte sind Hilfestellungen im [Script UI Guide von Peter Kahrel][29], im *Adobe JavaScript Tools Guide* und im Adobe ExtendScript *`Objektmodell-Viewer`* zu finden.  

` configWindow.column01 = configWindow.add ('group {orientation: "column"}');` fügt über die [JavaScript Punkt-Notation][30] «on the fly» ein Unterobjekt mit dem Namen ` column01` zu `configWindow` hinzu. Dieses Objekt kann dadurch nur über `configWindow` aufgerufen werden.  `'group {Orientation: "column"}'` definiert, dass das erzeugte Kind-Objekt eine Gruppe vom Typ «Column» ist. Das heisst, alle Kind-Elemente dieses Objekts werden von horizontal von oben nach unten dargestellt. Alternativ wäre u. a. noch die Orientierung «row» verfügbar. Diese ordnet Kindobjekte in der Vertikalen.

` configWindow.column01.gridPanel = configWindow.column01.add ('panel', undefined, 'Grundlinienraster');`fügt den Rahmen «Grundlinienraster» ein. `gridPanel` wird als Unterobjekt von `column01` erzeugt, das ein Unterobjekt von `configWindow` ist. Mit der JavaScript Punkt-Notation  kann es über die Bezeichner `configWindow.column01.gridPanel` später wieder aufgerufen werden.

Hin und wieder kommt es vor, dass mehrere Anweisungen in Folge notiert werden sollen, die alle das gleiche Objekt betreffen. Zu diesem Zweck kann mit `with(__OBJEKT__)` eine verkürzte Schreibweise verwendet werden. Da normalerweise mehrere Anweisungen auf das Objekt angewendet werden, müssen diese wie bei einer Funktion in geschweifte Klammern (`{}`) eingeschlossen werden.

 `with(configWindow.column01.gridPanel)` definiert also sinnbildlich «mach etwas mit dem Objekt `gridPanel`», Kind-Objekt von ` column01`, Kind-Objekt von ` configWindow`. Innerhalb von `with` können alle Methoden (= Funktionen) und Eigenschaften des Objekts ` gridPanel` direkt aufgerufen werden. Zu sehen ist dies zum Beispiel and der Anweisung ` aligment = 'left'`. Sie kann direkt angesprochen werden. Ohne `with()` würde ` configWindow.column01.gridPanel.aligment = 'left'` das gleiche machen. Selbiges gilt für `var gridBeginGroup = add('group')`. Die Variable `gridBeginGroup` wird durch den Aufruf in `with()` automatisch zu einem Unterobjekt von `gridPanel`. Sie könnte auch so erzeugt werden: `configWindow.column01.gridPanel. gridBeginGroup = add('group')`. 
 
 ![Analyse der Datenmodell-Hierarchy im *`Datenbrowser`* des Adobe ExtendScript Toolkit bei angehaltenem Skript.]({{ site.url }}/img/datamdlvw-hierarchy.fw.png)

Eine Sonderstellung innerhalb von `with()` hat die Variable `gridRelToInputField`. Sie ist selbst kein Kind-Objekt von ` gridPanel`, referenziert jedoch das Ergebnis aus dem `gridPanel`-Kind-Objekt ` gridRelTo`. Sie kann deshalb auch ausserhalb von with direkt angesprochen werden, wie die Konsolen-Anweisung `$.writeln(gridRelToInputField)` zeigt.

#### Skript 008, Benutzereingaben verarbeiten

Dieses Skript erweitert das Skript 007 um die Verarbeitung von Benutzereingaben. Es geht insbesondere darum, wie erfasste Werte gespeichert und für die weitere Verarbeitung weitergegeben werden können.

```javascript
// script.008.jsx

// "Funktionsblock" erstellen
function setConfigWindow() {
  
  // Dialog-Fenster erstellen
  var configWindow = new Window('dialog','Presets definieren');
  
  // Anzeigekolonne hinzufügen (siehe auch Adobe JavaScript Tools Guide)
  configWindow.column01 = configWindow.add ('group {orientation: "column"}'); 
  
  // "Umrahmung" mit "Titel" hinzufügen
  configWindow.column01.gridPanel = configWindow.column01.add ('panel', undefined, 'Grundlinienraster');
  
  // Mit dem "Innern" der Umrahmung folgendes machen ...
  with(configWindow.column01.gridPanel){
    
    // "Orientierung" der "Umrahmung" auf links stellen
    aligment = 'left';
    
    // Anzeigegruppe für 1. Eingabe hinzufügen
    var gridBeginGroup = add('group');
    
    // "Eingabebeschrifgung" (statictext) & Eingabefeld (edittext) hinzufügen
    gridBeginGroup.add('statictext', [0,0,140,15], 'Anfang (in mm):');
    var gridBeginInputField = gridBeginGroup.add('edittext', [0,0,150,24], '0');
    
    // Anzeigegruppe für 2. Eingabe erstellen
    var gridRelTo = add('group');
  
    // "Eingabebeschrifgung" (statictext) & Auswahlliste (dropdownlist) hinzufügen
    gridRelTo.add('statictext', [0,0,140,15], 'Relativ zu:');
    var gridRelToInputField = gridRelTo.add('dropdownlist', [0,0,150,24], ['Oberer Seitenkante', 'Oberen Seitenrand']);
    gridRelToInputField.selection = 0;
    
    // Anzeigegruppe für 3. Eingabe erstellen
    var gridHeightGroup = add('group');
  
    // "Eingabebeschrifgung" (statictext) & Eingabefeld (edittext) hinzufügen
    gridHeightGroup.add('statictext', [0,0,140,15], 'Grundlinienraster (in pt):');
    var girdHeightInputField = gridHeightGroup.add('edittext', [0,0,150,24], '0');
   
  }
  
  // In der "Anzeigekolonne" aber ausserhalb der "Umrahmung" Buttons hinzufügen
  configWindow.column01.btnGrp = configWindow.add('group');
  configWindow.column01.btnGrp.add('button', undefined, 'Ok');
  configWindow.column01.btnGrp.add('button', undefined, 'Cancel');
  
  $.writeln(gridRelToInputField);
  
  // Fenster in Adobe InDesign anzeigen
  var usrAction = configWindow.show();
  
  // Variable für Ergebnis switch-case erzeugen
  var baselineGridOption = null;
  
  // Benutzereingabe gridRelToInputField ('Oberer Seitenkante', 'Oberen Seitenrand') in switch aufnehmen
  switch(gridRelToInputField.selection.index) {

    // wenn 0 dann
    case 0: 
      // http://jongware.mit.edu/idcs6js/pe_BaselineGridRelativeOption.html
      baselineGridOption = BaselineGridRelativeOption.TOP_OF_PAGE_OF_BASELINE_GRID_RELATIVE_OPTION;
      break;
    
    // wenn 1 dann
    case 1:
      // http://jongware.mit.edu/idcs6js/pe_BaselineGridRelativeOption.html
      baselineGridOption = BaselineGridRelativeOption.TOP_OF_MARGIN_OF_BASELINE_GRID_RELATIVE_OPTION;
      break;
      
    // wenn weder 0 noch 1 dann  
    default:
      baselineGridOption = null;
  }
  
  // Objekt aus Funktion zurückgeben
  return {
    result: usrAction,
    gridBegin: gridBeginInputField.text,
    gridRelTo: baselineGridOption,
    gridHeight: girdHeightInputField.text
  }
}

// Funktion effektiv ausführen (abarbeiten) und Ergebnis in Variable speichern
var shownWindow = setConfigWindow();

// Ok geklickt = true
if(shownWindow.result == true){
    $.writeln('Ok geklickt');
    $.writeln('Anfang (in mm): ' + shownWindow.gridBegin);
    $.writeln('Relativ zu: ' + shownWindow.gridRelTo);
    $.writeln('Grundlinienraster (in pt): ' + shownWindow.gridHeight);
 }

// abgebrochen oder Cancel geklickt = false
else {
    $.writeln('Cancel geklickt oder abgebrochen.');
}
```

[\[ Download script.008.jsx as .zip \]](https://github.com/grafisches-forum-zh/scripting/wiki/source/script.008.zip) 

In den Erklärungen zum Skript 007 wurde bereits die Sonderstellung der Variable ` gridRelToInputField` eingeführt. Diese Sonderstellung soll nun auch auf die anderen Eingabefelder angewendet werden.  Mit der Anweisung `var gridBeginInputField = gridBeginGroup.add('edittext', [0,0,150,24], '0');` wird der Gruppe `gridBeginGroup` ein neues Eingabefeld hinzugefügt und als Referenz in ` gridBeginInputField` gespeichert. Über ` gridBeginInputField.text` können somit später die Eingaben in dieses Feld abgegriffen werden. Das gleiche passiert in mit der Anweisung ` var girdHeightInputField = gridHeightGroup.add('edittext', [0,0,150,24], '0');` für die Eingabe des Grundlinienrasters.

Die Verarbeitung von Dropdownlisten wie ` var gridRelToInputField = gridRelTo.add('dropdownlist', [0,0,150,24], ['Oberer Seitenkante', 'Oberen Seitenrand']);` ist in Adobe ExtendScript nicht ganz so einfach wie jene von Textfelder. Die erzeuge Liste im Beispiel hat zwei Werte: «Obere Seitenkante» und «Oberer Seitenrand». Die Programmlogik kann jedoch nicht mit Klartexten arbeiten. Das heisst, die reinen Textbausteine «Obere Seitenkante» und «Oberer Seitenrand», können vom Interpreter nicht in Bezug zur Programmlogik resp. den gewünschten Einstellungen gebracht werden. Die Auswahl von Dropdownlisten gibt deshalb «nur» eindeutige Werte in Zahlenform zurück. Was das heisst ist in der Anweisung ` gridRelToInputField.selection = 0` gut ersichtlich. Hier wird die «Standardauswahl» auf `0` gesetzt, was dem ersten Element in der Liste («Obere Seitenkante» ) entspricht. 

Nach dem Anzeigen des Dialog-Fensters mit ` configWindow.show()` muss also zuerst die Auswahl der Dropdownliste verarbeitet werden, um zu ermitteln, welcher Wert aus der Funktion zurückgegeben werden soll. Anschliessend muss anhand der Auswahl dem Interpreter mitgeteilt werden, was die Auswahl für die Logik bedeutet, was er damit machen muss.  Die Abarbeitung dieser beiden Aufgaben übernimmt der Switch-Case-Block. ` switch(gridRelToInputField.selection.index)` liest den Index des Rückgabewerts aus der Dropdownliste ein. Wenn dieser `0` ist, spring ` case 0:` an. Die Variable `baselineGridOption` wird auf den programminternen Wert für den Beginn des Grundlinienrasters an der «Oberen Seitenkante»  gesetzt: ` BaselineGridRelativeOption.TOP_OF_PAGE_OF_BASELINE_GRID_RELATIVE_OPTION`. Ist der Rückgabewert `1` springt `case 1:` an und setzt den Wert für «Oberern Seitenrand». Liegt ein Fehler vor, wird der Wert weder `0` noch `1` sein. In diesem Fall springt `default:` und stellt sicher, dass ` BaselineGridOption` mit dem Wert `null` (= vorhanden aber nicht mit einem konkreten Wert besetzt) zurückgegeben wird.

Zum Schluss wird die `return`-Anweisung um die neu erzeugten Werte erweitert. In der abschliessenden `if`-`else`-Verzweigung werden, wenn «Ok» geklickt wurde, alle Werte der `return`-Anweisung über`shownWindow` in die *`JavaScript-Konsole`* des Adobe ExtendScript Toolkit geschrieben.

![Ausgabe in der *`JavaScript-Konsole`* des Adobe ExtendScript Toolkit nach einer erfolgreichen Ausführung («Ok» wurde geklickt). Der Wert 1162766189 kann dabei verwirren. Er steht für `BaselineGridRelativeOption.TOP_OF...`. ]({{ site.url }}/img/js-console_script008-logs.fw.png)

[29]: http://www.kahrel.plus.com/indesign/scriptui.html
[30]: https://wiki.selfhtml.org/wiki/JavaScript/Objekte_-_Eigenschaften_und_Methoden