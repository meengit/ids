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
  configWindow.column01.btnGrp.add('button', undefined, 'Cancel');
  configWindow.column01.btnGrp.add('button', undefined, 'OK');
  
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

// OK geklickt = true
if(shownWindow.result == true){
    $.writeln('OK geklickt');
    $.writeln('Anfang (in mm): ' + shownWindow.gridBegin);
    $.writeln('Relativ zu: ' + shownWindow.gridRelTo);
    $.writeln('Grundlinienraster (in pt): ' + shownWindow.gridHeight);
 }

// abgebrochen oder Cancel geklickt = false
else {
    $.writeln('Cancel geklickt oder abgebrochen.');
}