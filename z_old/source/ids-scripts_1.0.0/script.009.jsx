// script.009.jsx

// Testen ob ein Dokument geöffnet ist
if(app.documents.length == 0){
	
	// Warnmeldung wenn kein Dokument geöffnet ist
	alert("Kein Dokument geöffnet.", "Stop");
	exit();
}

// Wenn mindestens ein Dokument geöffnet ist
else {
	
	// Variable activDoc auf aktives Dokument referenzieren lassen
	var activeDoc = app.activeDocument; 
	
	// Funktion für Dialog-Fenster effektiv ausführen (abarbeiten) und Ergebnis in Variable speichern
	var shownWindow = setConfigWindow();

}

// Sicherheitshalber falsche Eingaben, die nicht nur aus Zahlen bestehen, in reine Zahlen umwandeln sofern möglich.
shownWindow['gridBegin']  = parseInt(shownWindow['gridBegin']);
shownWindow['gridHeight'] = (parseInt(shownWindow['gridHeight'])) + " pt";

// "OK" geklickt = true
if(shownWindow.result == true){
	
	// Mit den Grundlinienraster-Voreinstellungen folgendes machen ...
	with(activeDoc.gridPreferences){
		
		// Probier ...
		try {
			
			// ... wenn der Anfang des Grundlinienraster grösser als -1 mm gesetzt ist ...
			if(shownWindow['gridBegin'] > -1 ) {
				
				// ... den Begin des Grundlinienrasters einzustellen ...
				baselineStart = shownWindow['gridBegin'];
			}
			
			// ... ansonsten: Gib diese Fehlermeldung aus ...
			else {
				alert('Die Eingabe für den Beginn des Grundlinienrasters war keine Zahl!\nEr bleibt unverändert.', 'Achtung');
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
				alert('Die Eingabe für die Schrittweite war keine Zahl oder \"0\"!\nEs bleibt unverändert.', 'Achtung');
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
		
		// "Eingabebeschriftung" (statictext) & Eingabefeld (edittext) hinzufügen
		gridBeginGroup.add('statictext', [0,0,140,15], 'Anfang (in mm):');
		var gridBeginInputField = gridBeginGroup.add('edittext', [0,0,160,24], '0');
		
		// Anzeigegruppe für 2. Eingabe erstellen
		var gridRelTo = add('group');
	
		// "Eingabebeschriftung" (statictext) & Auswahlliste (dropdownlist) hinzufügen
		gridRelTo.add('statictext', [0,0,140,15], 'Relativ zu:');
		var gridRelToInputField = gridRelTo.add('dropdownlist', [0,0,160,24], ['Oberem Seitenrand', 'Kopfsteg']);
		gridRelToInputField. selection = 0;
		
		// Anzeigegruppe für 3. Eingabe erstellen
		var gridHeightGroup = add('group');
	
		// "Eingabebeschriftung" (statictext) & Eingabefeld (edittext) hinzufügen
		gridHeightGroup.add('statictext', [0,0,140,15], 'Einteilung alle (in pt):');
		var girdHeightInputField = gridHeightGroup.add('edittext', [0,0,160,24], '0');
	 
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
	
	// Benutzereingabe gridRelToInputField ('Oberem Seitenrand', 'Kopfsteg') in switch aufnehmen
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