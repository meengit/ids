---
layout: default
permalink: /skripte-fuer-voreinstellungen/
title: Mit den Voreinstellungen arbeiten
---

Das Skript 009 erweitert das Skript 008 um die effektive Anwendung der im Dialog-Fenster ermittelten Werte. Weitere Informationen zum Arbeiten mit den Dokumentvoreinstellungen sind unter anderem im *Adobe InDesign Scripting Tutorial* und insbesondere im *Adobe InDesign JavaScript Scripting Guide* zu finden.

```javaScript 
// script.009.jsx

// Testen ob ein Dokument geöffnet ist
if(app.documents.length == 0){
    
    // Warnmeldung wenn kein Dokument geöffnet ist
    alert("Kein Dokument geöffnet.");
}

// Wenn mindestens ein Dokument geöffnet ist
else {
  
  // Variable activDoc auf aktives Dokument referenzieren lassen
  var activeDoc = app.activeDocument; 
  
  // Funktion für Dialog-Fenster effektiv ausführen (abarbeiten) und Ergebnis in Variable speichern
  var shownWindow = setConfigWindow();

}

// Sicherheitshalber falsche Eingaben, die nicht nur aus Zahlen bestehen, in reine Zahlen umwandeln sofern möglich.
shownWindow['gridBegin'] = parseInt(shownWindow['gridBegin']);
shownWindow['gridHeight'] = parseInt(shownWindow['gridHeight']);

// Ok geklickt = true
if(shownWindow.result == true){
  
  // Mit den Grundlinienraster-Voreinstellungen folgendes machen ...
  with(activeDoc.gridPreferences){
    
    // Probier ...
    try {
      
      // ... wenn der Anfang des Grundlinienraster grösser 0 mm gesetzt ist ...
      if(shownWindow['gridBegin'] > 0 ) {
        
        // ... den Begin des Grundlinienrasters einzustellen ...
        baselineStart = shownWindow['gridBegin'];
      }
      
      // ... ansonsten: Gib diese Fehlermeldung aus ...
      else {
        alert('Die Eingabe für den Beginn des Grundlinienrasters war keine Zahl oder \"0\"!\nSie bleibt unverändert.');
      }
    }
    
    // ... oder brich ab, wenn Du weder if noch else ausführen kannst.
    catch(err){
      alert(err);
    }
  
    try {
        if(shownWindow['gridRelTo'] == null ) {
          throw "Die Einstellung der Seitenkante stimmt nicht!";
        }
        else {
          baselineGridRelativeOption = shownWindow['gridRelTo'];
        }
      }
      catch(err){
        alert(err);
      } 
  
    try {
      if(shownWindow['gridHeight'] > 0 ) {
        baselineDivision = shownWindow['gridHeight'];
      }
      else {
        alert('Die Eingabe für den Grundlinienraster war keine Zahl oder \"0\"!\nSie bleibt unverändert.');
      }
    }
    catch(err){
      alert(err);
    }
  }
}

// abgebrochen oder Cancel geklickt = false
else {
    $.writeln('Cancel geklickt oder abgebrochen.');
}

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
```

[\[ Download script.009.jsx as .zip \]](https://github.com/grafisches-forum-zh/scripting/wiki/source/script.009.zip) 

Das Skript 009 erweitert das Skript 008 um die effektive Anwendung der im Dialog-Fenster ermittelten Werte. Weitere Informationen zum Arbeiten mit den Dokumentvoreinstellungen sind unter anderem im *Adobe InDesign Scripting Tutorial* und insbesondere im *Adobe InDesign JavaScript Scripting Guide* zu finden.

In JavaScript respektive Adobe ExtendScript spielt die Position von Funktionen innerhalb des Skripts meist keine Rolle. Der Interpreter liest zuerst alle Funktionen ein und arbeitet anschliessend das Skript ab. Deshalb wird in diesem Skript zur besseren Übersicht der Funktionsblock von ` function setConfigWindow(){ __ANWEISUNGEN__ }` ans Ende kopiert und die `if`-`else`-Verzweigung nach oben genommen.

Die erste `if`-`else`-Verzweigung prüft, ob ein Dokument geöffnet wird. Dies wird über ` app.documents.length ` abgefragt. Nur wenn der Wert von `length` grösser `0` ist, ist ein Dokument geöffnet. Wenn also kein Dokument geöffnet ist, wird die Warnmeldung «Kein Dokument geöffnet» ausgegeben. Wenn ein oder mehrere Dokumente geöffnet sind, springt die `else`-Verzweigung an. Dann ermittelt `app.activeDocument` das Dokument, welches sich im Vordergrund befindet. Die Variable `activeDoc` referenziert das Ergebnis aus `app.activeDocument` respektive das aktive Dokument. Anschliessend wird die Funktion für das Dialog-Fenster aufgerufen und deren Rückgabewerte in der Variable `shownWindow` gespeichert.

Nach dem Ausführen des Dialog-Fensters kommt die nach oben kopierte `if`-`else`-Verzweigung aus dem Skript 008. Sie prüft, wie im Skript 008 zuerst, ob «Ok» oder «Cancel» geklickt wurden. Sofern «Ok» geklickt wurde, wird ein `with`-Anweisungsblock mit dem aktiven Dokument aus `activeDoc` aufgerufen. `gridPreferences` ist eine Eigenschaft von der Klasse `Documents`, welche für ein Dokument in Adobe InDesign steht und von `app.activeDocument` und damit von der Variable `activeDoc` referenziert wird. 

![*`Objektmodell-Viewer`* mit eingestelltem *`Adobe IndDesign Object Model`* im Abschnitt *`Browser`* und ausgewählter `gridPreferences`-Eigenschaft der `Document`-Instanz](img/objmdlvw-cls_document-gpref.fw.png)

Die folgenden `try`-`catch`-Anweisungsblöcke passen die Eigenschaften von ` gridPreferences` im aktiven Dokument an. Kommt es zu logischen Fehlern, zum Beispiel weil aus irgendeinem Grund Voreinstellungen nicht gesetzt werden können, schlägt `try` fehl und `catch` wird ausgeführt. Wenn `catch` anspringt, wird dem Nutzer eine Fehlermeldung angezeigt und das Skript sofort abgebrochen. Sofern im `try`-Block ein `throw` definiert ist, wird  dem Benutzer bei `catch` eine die in `throw` gesetzte Nachricht angezeigt. Ist kein `throw` definiert, erhält der die Standardfehlermeldung des Programms angezeigt. Die eingesetzten `alert`-Anweisungen geben dem Nutzer in bestimmten Fällen eine Warnmeldung aus, brechen das Skript jedoch nicht ab.

Eine spezielle Aufgabe haben die beiden Zeilen mit den `parseInt()`-Anweisungen. Wenn Nutzer, trotz den Hinweisen «in mm» und «in pt», bei den Eingabefeldern Einheiten eingeben, wird hier versucht, diese «loszuwerden». `parseInt()` ist eine JavaScript-Anweisung, die versucht, Text in reine Zahlen umzuwandeln: [Referenz Mozilla Developer Network][31].

[31]:https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt