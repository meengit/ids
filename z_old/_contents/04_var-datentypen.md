---
layout: default
permalink: /var-datentypen/
title: Variablen und Datentypen
---

## Variablen

                Zuweisungsoperator                     
	                     │                             
	                     │                             
	                     ▼                             
	    var textvariable = 'Ein Wert';                 
	     ▲       ▲              ▲                      
	     │       │              └───────┐              
	     │       │                      │              
	     │  Bezeichner                  │              
	     │                 Wert, Objekt oder Referenz (= Literal)  
	Schlüsselwort    


Variablen «speichern» zugewiesene Elemente für den späteren Gebrauch im Verlauf des Skripts. Sie werden mit dem Schlüsselwort `var` eingeleitet. Über den Bezeichner können sie anschliessend im Skript aufgerufen werden. Er ist die Referenz auf den zugewiesenen Inhalt. Der Zuweisungsoperator weist bei der Deklaration einer Variablen den Wert dem Bezeichner zu. Als Gedankenstütze können Sie sich sich Variablen als eine Art Ablage in Register vorstellen. Der Bezeichner ist die Beschriftung an der Ablagemappe. «Einfache» Variablen, wie hier beschrieben, enthalten ein Element, die Ablagemappe enthält so zu sagen ein Blatt Papier. Dieses eine Element muss automatisch einem Datentyp entsprechen. Datentypen werden durch JavaScript implizit verwaltet. Der Programmierer hat keinen direkten Zugriff darauf. Sowohl eine Variable als auch ein Literal kann einem Datentyp entsprechen. Ein Literal ist der Wert selbst, also eine Zahl oder eine andere Form von Wert. Er findet beispielsweise in Operationen wie Berechnungen Verwendung oder wird einer Variablen zugewiesen. Ein Literal hat wie eine Variable einen Datentyp. In Javascript ist das besonders wichtig, denn darüber regelt Javascript in der Regel indirekt den Datentyp der Variablen. Mehr dazu im nächsten Abschnitt.

### Datentypen

Datentypen bestimmen den Typ des «Inhalts» einer Variable.

| Datentyp | Beschreibung 
|----------|--------------
|`Boolean`| `true` or `false`, wobei `0` = `false` und alle Werte ungleich `0` = `true` 
|`Number` | `Number` speichert sowohl Ganzzahlen als auch Fliesskommazahlen. Als Trennzeichen bei Fliesskommazahlen setzt JavaScript den `.` ein. Die wissenschaftliche Notation ist über die Erweiterungen `e` und `E` möglich. In diesem Fall wird der Potenzwert hinter die Exponentialkennung notiert. 
|`Object` | `Object` wird für das Speichern von Objekten verwendet. Es kann einen beliebigen Typ enthalten. 
|`String` | Dieser Datentyp enthält eine Zeichenkette mit maxiamal 256 Positionen. Bei Bedarf können mehrere Zeichenketten mit dem `+` Operator verbunden werden. Das Verbinden mit weiteren Datentypen ist ebenfalls erlaubt. Diese werden allerdings bei einer Verknüpfung mit `String` bei der Ausgabe in einen solchen konvertiert. 
|`Undefined` | `Undefined` beschreibt eine nichtdefinierte Situation. Eine Variable besitzt so lange diesen Wert, bis ihr nach dem Anlegen explizit ein Wert zugewiesen wird. 
|`Null` | Dieser Sonderdatentyp entspricht der Situation, wenn ein Objekt noch keinen Wert hat, und entspricht keiner «keiner Bedeutung» oder `null`. Er unterscheidet sich somit von einer leeren Zeichenkette oder dem Literal `0`. Er kann zum Beispiel zurückgegeben werden wenn in einem Dialogfenster die `ABBRECHEN`-Schaltfläche betätigt wird. 
|`typeof` | Mit diesem Datentyp kann in JavaScript der Typ einer Variable/eines Literals/eines Rückgabewerts überprüft werden. 

```javascript
// String
var einTextTypString = 'Ein Text für mich.';

// Number
var eineZahlVomTypNumber = 1234;

// Boolean
var einBoolischerWert = true;

// typeof
$.writeln(typeof einTextTypString) 
// -> Output Konsole: string
```

In vielen Fällen kommt es vor, dass einer Variable mehrere Werte zugewiesen werden müssen. Dazu gibt es die Möglichkeit, den Inhalt mehrerer Variablen zu verknüpfen.  

```javascript
// Variablen vom Typ «String» verknüpfen
var text1 = 'Dies ist ';
var text2 = 'eine Zeichenkette';

var ganzerText = text1 + " " + text2;

$.writeln(ganzerText); 
// ->  Output Konsole: Dies ist eine Zeichenkette
```

Das Verknüpfen von Variablen deckt jedoch längst nicht alle Anforderungen ab. Deshalb gibt es in JavaScript Datenfelder. Datenfelder, auch Arrays genannt, sind eine Sammlung von Elementen, die über einen gemeinsamen Bezeichner einer Variable zugeordnet und durch einen Index angesprochen werden können. In JavaScript wird ein Datenfeld explizit als Objekt gesehen. Der Index eines Datenfeld beginnt immer mit `0`. Die Datentypen der Elemente in einem Array können verschieden und nicht identisch sein. Wenn das ursprünglich erzeugte Datenfeld kleiner ist, als die Anzahl der später hinzugefügten Elemente, dann wird das Datenfeld automatisch von JavaScript vergrössert. Solche Datenfelder (= Arrays) können auf zwei Arten erzeugt werden:

- über den Konstruktor: `var x = new Array(3);`;
- mittels deklarativer Erzeugung über Array-Literale(`[]`): `var y = ['Apfel', 'Birne', 'Banane'];`.

.

	// Array mit Konstruktor erzeugen
	
	         Zuweisungsoperator             
	                  │                     
	                  │                     
	                  ▼                     
	      var gemuese = new Array(3);       
	       ▲      ▲          ▲              
	       │      │          │              
	       │      │          └───┐          
	       │ Bezeichner          │          
	       │                     │          
	Schlüsselwort      Konstruktormethode  
	                   mit "new" erzeugt
	                   neues Array mit 
	                   3 leeren Elementen.  
	                   
.
	                   
	// Array befüllen
	
	                Wert   
	                 │     
	                 │     
	                 ▼     
	 gemuese[0] = 'Apfel';  
	 gemuese[1] = 'Birne';  
	 gemuese[2] = 'Banane'; 
	         ▲              
	         │              
	         │              
	Index (= Position)      

Der Wert `3` «reserviert» bei der Erzeugung im Speicher Platz für drei Elemente. Das Array kann jedoch beliebig erweitert werden. `gemuese[3] = 3` erzeugt ein neues Element, welches beispielsweise über $.writeln(gemuese[3]) abgerufen werden kann (schreibt `3` in die JavaScript-Konsole). Dabei gut zu erkennen ist, dass ein Array verschiedene Datentypen enthalten kann. Oder um die Metapher der Ablage zu verwenden: Ein Array ist ein beschriftetes Register, in dem mehrere Blatt Papier liegen können. Es ist zudem erlaubt, dass auf dem einen Blatt nur Zahlen und auf den anderen Blättern Text stehen darf. Die Reihenfolge der Blätter innerhalb des Registers ist jedoch mit einem festen Index definiert.

Die deklarative Erzeugung von Arrays über die Array-Literale ist bedeutend kürzer. Sie macht das gleiche wie die Erzeugung über den Konstruktor mit dem Schlüsselwort `new`. Der Interpreter merkt durch die Notation der eckigen Klammern (`[]`) jedoch selbst, dass es sich um ein Array handelt. 

	         Zuweisungsoperator              Wert     
	                  │                        │      
	                  │                        │      
	                  ▼                        ▼      
	     var fruechte = ['Apfel', 'Birne', 'Banane']; 
	      ▲      ▲      ▲                          ▲  
	      │      │      │                          │  
	      │      │      └────────────┬─────────────┘  
	      │ Bezeichner               │                
	      │                   Array-Literale          
	Schlüsselwort  

In den bisherigen Beispielen waren die Werte innerhalb der Arrays immer mit einem festen Index (0, 1, 2 usw.) verknüpft. Es gibt jedoch die Möglichkeit, diesen Index selbst zu definieren. Hierbei wird er nicht automatisch und nummerisch (0, 1, 2 usw.) vergeben, sondern über einen bewusst definierten Textindex. Dessen Zuweisung erfolgt über einen Doppelpunkt. Die Werte werden durch ein Komma voneinander getrennt. Dieses Verfahren ist auch unter dem Begriff assoziierte Arrays bekannt. In JavaScript stehen assoziierte Arrays nicht unimttelbar zur Verfügung, sondern werden, streng genommen, als Objekte definiert, was an den gerundeten Klammern `{}` erkennbar ist.

	           Zuweisungsoperator   
	                │      │         
	                │      │  Wert   
	                ▼      │    │    
	     var person = {    ▼    ▼    
	      ▲      ▲     name: 'Hans', 
	      │      │     alter: 28,    
	      │      │     ort: 'Zürich',
	      │      │     plz: 8008     
	      │      │    } ▲            
	      │      │      │            
	      │      │      │            
	      │      │  Textindex        
	      │      │                   
	      │      │                   
	      │ Bezeichner               
	      │                          
	      │                          
	Schlüsselwort  

Wie die Notation von Objekten in JavaScript genau funktioniert, wird im nächsten Kapitel erklärt. Auffällig ist bereits der Einsatz des Doppelpunkts (`:`) und des Kommas (`,`).