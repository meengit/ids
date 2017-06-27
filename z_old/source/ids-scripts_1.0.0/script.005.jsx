// script.005.jsx

function setConfigWindow() {
  var configWindow = new Window('dialog','Presets definieren');
  
  // Buttons Cancel & OK hinzufügen
  var okCancel_Grp = configWindow.add('group');
  okCancel_Grp.add('button', undefined, 'Cancel');
  okCancel_Grp.add('button', undefined, 'OK');
  
  // Fenster in Adobe InDesign anzeigen
  configWindow.show();
}
setConfigWindow();
