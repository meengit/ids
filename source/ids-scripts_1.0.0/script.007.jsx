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
    gridBeginGroup.add('statictext', [0,0,150,15], 'Anfang (in mm):');
    gridBeginGroup.add('edittext', [0,0,160,24], '0');
    
    // Anzeigegruppe für 2. Eingabe erstellen
    var gridRelTo = add('group');
  
    // "Eingabebeschrifgung" (statictext) & Auswahlliste (dropdownlist) hinzufügen
    gridRelTo.add('statictext', [0,0,150,15], 'Relativ zu:');
    var gridRelToInputField = gridRelTo.add('dropdownlist', [0,0,160,24], ['Oberem Seitenrand', 'Kopfsteg']);
    gridRelToInputField.selection = 0;
    
    // Anzeigegruppe für 3. Eingabe erstellen
    var gridHeightGroup = add('group');
  
    // "Eingabebeschrifgung" (statictext) & Eingabefeld (edittext) hinzufügen
    gridHeightGroup.add('statictext', [0,0,150,15], 'Einteilung alle (in pt):');
    gridHeightGroup.add('edittext', [0,0,160,24], '0');
   
  }
  
  // In der "Anzeigekolonne" aber ausserhalb der "Umrahmung" Buttons hinzufügen
  configWindow.column01.btnGrp = configWindow.add('group');
  configWindow.column01.btnGrp.add('button', undefined, 'Cancel');
  configWindow.column01.btnGrp.add('button', undefined, 'OK');
  
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

// OK geklickt = true
if(shownWindow.result == true){
    $.writeln('OK geklickt');
 }

// abgebrochen oder Cancel geklickt = false
else {
    $.writeln('Cancel geklickt oder abgebrochen.');
}