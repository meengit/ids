// script.004.jsx

var doc = '~/Desktop/myname.indd';
$.writeln('Datentype Variable \"doc\": ' + typeof(doc));

doc = new File(doc);
$.writeln('Datentype Variable \"doc\": ' + typeof(doc));

if(doc.exists == true) {
  $.writeln('Das Dokument existiert: '+ doc.exists);
  alert('Das Dokument existiert bereits. Der Befehl \"Speichern\" konnte nicht ausgeführt werden.');
}

else {
  $.writeln('Das Dokument existiert: '+ doc.exists);
  var newDoc = app.documents.add();
  if(app.activeDocument.saved == false) {
  app.activeDocument.save(doc);
  app.activeDocument.close();
  }
}