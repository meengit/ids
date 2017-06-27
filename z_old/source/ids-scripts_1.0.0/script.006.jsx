// script.006.jsx

// "Funktionsblock" erstellen
function setConfigWindow() {
  var configWindow = new Window('dialog','Presets definieren');
  
  // Anzeigegruppe erstellen
  var okCancel_Grp = configWindow.add('group');
  
  // Buttons Cancel & OK hinzufügen
  okCancel_Grp.add('button', undefined, 'Cancel');
  okCancel_Grp.add('button', undefined, 'OK');
  
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
  $.writeln('Ok geklickt');
}

// abgebrochen oder Cancel geklickt = false
else {
  $.writeln('Cancel geklickt oder abgebrochen.');
}