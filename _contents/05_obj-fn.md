---
layout: default
permalink: /obj-fn/
title: Objekte und Funktionen
---

## Objekte

JavaScript ist keine objektorientierte, sondern eine objektbasierte Sprache. Ein Objekt besteht im Allgemeinen aus zwei Bestandteilen:

- **Eigenschaften** (auch Attribute oder Objektdaten genannt) sind die Details, die ein Objekt charakterisieren und durch welche sich ein Objekt von einem anderen unterscheidet (Grösse, Form, Beschriftung, Farbe usw.)
- **Methoden** sind die aktiven Funktionalitäten, die vom Objekt bereitgestellt und mit denen bestimmte «Dinge» gemacht werden können.

Ebenfalls können Objekte Zustände haben. Eine Methode (= Funktion) in einem Objekt wird mit `empfänger.methodenname(Argumente)` aufgerufen. Der «Empfänger» entspricht dem Aufruf des Objektnamens (Objektadresse). Eine Objekteigenschaft wird mit `empfänger.eigenschaft` aufgerufen.

```javascript
// Ein Objekt definieren

           Zuweisungsoperator                                                                                                    
                   │                                                                                                             
                   │                                                                                                             
                   ▼                                                                                                             
     var dasObjekt = {  // «Beginn» des Objekts                             
      ▲   ▲  zahl1: 12, // Eigenschaft «zahl1» mit Wert 12   
      │   │  zahl2: 15, // Eigenschaft «zahl1» mit Wert 15  
      │   │   
      │   │  // Beginn Methode «rechnen»
      │   │  rechnen: function(uebergeben){          
      │   │    var ergebnis = this.zahl1 + 
      │   │                   this.zahl2 + 
      │   │                   uebergeben;                                            
      │   │    return ergebnis;                                                                                
      │   │           } // Ende Methode «rechnen»              
      │   │         } // «Ende» des Objekts                                      
      │   │                                                                                                             
      │   │                                                                                                             
      │ Bezeichner                                                                                                      
      │                                                                                                                 
      │                                                                                                                
Schluesselwort                                                                                                                    


 // Wert berechnen zahl1 + zahl2 + uebergeben (5)                                                                       
 // Ergebnis JavaScript Konsole: 32  
 $.writeln(dasObjekt.rechnen(5));                                                                                            

 // Eigenschaft zahl1 verändern  
 dasObjekt.zahl1 = 0;                                                                                                        

 // Wert NEU berechnen aus zahl1 (neu) + zahl2 + uebergeben (5)                                                          // Ergebnis JavaScript Konsole: 20
 $.writeln(dasObjekt.rechnen(5));
```

Eine Variable kann in JavaScript auf viele «Inhalte» verweisen. Datentypen wie `Number`, `String` und `Array` waren bereits Thema dieser Dokumentation. In der Programmierung ist es jedoch oft notwendig, dass verschiedene Datentypen und Objektformen in einem Objekt gemischt werden können. Hierfür gibt es das Objekt `Object`. Es ist selbst die Basis aller Objekte und Datentypen und kann deshalb auch alle enthalten. Das gezeigte Beispiel weist der Variablen `dasObjekt` ein Objekt zu und macht sie damit selbst zum «Objekt vom Typ `Object`». Diese Zuweisung des Typs geschieht in JavaScript automatisch durch den Interpreter. Genauso wie er der Anweisung `var zahl = 1234;` automatisch (implizit) den Typ `Number` zuweisen würde.

In den bisherigen Beispielen wurde die Definition einer Variablen jeweils mit einem Semikolon (`;`) abgeschlossen. Im Fachjargon ist dies eine Anweisung. Sie repräsentiert eine bestimmte Quellcodepassage, die zusammengehörige Befehle enthält und endet immer mit einem Semikolon (;). Dieses teilt dem Interpreter mit, dass das Ende der Anweisung erreicht wurde und die zusammengehörigen Befehle jetzt ausgeführt werden können. Streng genommen kann das Semikolon in neueren Versionen von JavaScript weggelassen werden. Das ist allerdings nicht zu empfehlen da, je nach Interpreter Fehler entstehen können. Blöcke dagegen fassen mehrere Anweisungen in einer Gruppe zusammen – beispielsweise in Funktionen oder Schleifen. Diese zusammengehörigen Anweisungen werden in geschweifte Klammern { } OHNE abschliessendes Semikolon (;) eingeschlossen. Der JavaScript-Interpreter behandelt sie als Block respektive Einheit die als Ganzes abgearbeitet wird.

Im Innern unterscheiden sich Funktionen und Objekte darin, dass bei Funktionen die einzelnen Anweisungen mit Semikolon (`;`) abgeschlossen werden. Dagegen werden in Objekten die Eigenschaften und Methoden über den Doppelpunkt (`:`) zugewiesen (Zuweisungsoperator) und durch Kommas (`,`) statt Semikolon getrennt.

Methoden und Eigenschaften von Objekten lassen sich über die Punktnotation (Dot-Notation) ansprechen. Das erste Mal geschieht dies mit `$.writeln(dasObjekt.rechnen(5));`. Das `$`-Objekt wird von ExtendScript respektive Adobe zur Verfügung gestellt. Es enthält eine Reihe von Eigenschaften und Methoden für die Fehlerbehebung in Skripten, meist «Debugging» genannt. `writeln()` ist eine Methode des `$`-Objekts. Sie schreibt die übergebenen Argumente in den Klammern `()` in die JavaScript-Konsole des ExtendScript Toolkit. `dasObjekt.Rechnen(5)` ruft die Methode `rechnen` von `dasObjekt` auf, und übergibt die Zahl 5. Diese wird innerhalb von `rechnen` durch `uebergeben` referenziert und kann somit verwendet werden. `$.writeln(dasObjekt.rechnen(5));` macht also folgendes (von innen nach aussen): Methode `dasObjekt.rechnen(5)` aufrufen, warten bis die Methode das Ergebnis zurück gibt und dieses dann mittels `$.writeln()` in die JavaScript-Konsole schreiben.

Die Methode `dasObjekt.rechnen();` referenziert eine anonyme Funktion, erkennbar daran, dass nach dem Schlüsselwort `function` nicht ein Name sondern direkt die Klammern `()` stehen. `uebergeben` innerhalb dieser Klammern ist ein Parameter. Funktionen können mehrere Parameter haben. Sie werden durch Kommas getrennt. Parameter sind im Prinzip Namen, die Werte referenzieren, welche an die Funktion übergeben werden. Innerhalb der Funktion sind diese mit dem Parameternamen aufrufbar. In unserem Beispiel wird der Methode dasObjekt.rechnen(5) die Zahl 5 übergeben. Diese selbst wird als Argument bezeichnet. Der Parameter macht also das übergebene Argument innerhalb der Funktion unter einem Namen verfügbar. Ohne Parameter-Namen würde `5` zwar an die Funktion übergeben, wäre dann jedoch mangels Referenz innerhalb der Funktion nicht mehr auffindbar.

Innerhalb von `dasObjekt.rechnen();` gibt es die Eigenschaft `ergebnis`. Bei dieser wird das Schlüsselwort `this` angewendet, um auf die anderen Eigenschaften von `dasObjekt` zuzugreifen. In JavaScript gibt es *Closures* und *Scoping*. Vereinfacht formuliert sind beide Konzepte, die definieren, wie auf Eigenschaften und Methoden von Objekten zugegriffen werden kann. In unserem Beispiel sind `zahl1` und `zahl2` die Eigenschaften und `rechnen` die Methode von `dasObjekt`. Die Funktion von Rechnen ist damit eine Art virtuelles Unterobjekt von `dasObjekt`. Da jedoch `rechnen: function(){ ... }` durch die geschweiften Klammern `{ }` wiederum einen eigenen Block definiert, können die beiden Objekte nicht so ohne weiteres gegenseitig auf ihre Eigenschaften und Methoden zugreifen. 

`this` ist ein virtueller Zeiger auf das Objekt, in dessen Gültigkeitsbereich sich die aktuelle Stelle im Code befindet. Im gezeigten Beispiel beginnt der Gültigkeitsbereich von `dasObjekt` bei der öffnenden geschweiften Klammer `{` und endet mit der schliessenden geschweiften Klammer `}`. Die Methode `rechnen` gehört wie `zahl1` und `zahl2` zu `dasObjekt`. Damit wird sie über `this` ansprechbar.

Detaillierte deutsche Erklärungen zu [*Scoping*][6] und [*Closures*][6] bieten u. a. die Hilfeseiten von [mediaevent.de][8]. Für ganz exakte, allerdings meist englische, Erklärungen sind die Hilfeseiten des [Mozilla Developer Networks][9] empfehlenswert.

## Funktionen

Eine spezielle Form der Funktion ist eine Methode. Methoden sind Funktionen, die einem Objekt zugeordnet sind und nur in Verbindung mit diesem vorkommen können. Sie lassen sich ausschliesslich via Punktnotation (Dot-Notation) ansprechen. Zum Beispiel `document.write();`. `write()` ist eine Methode des Objekts `document`.

JavaScript-Anweisungen, die als Funktion definiert sind, werden beim Laden eines Skripts nicht automatisch durch den Interpreter ausgeführt. Dies geschieht erst, wenn sie im Code explizit aufgerufen werden.

JavaScript besitzt eine Reihe vordefinierter Funktionen. Diese lassen sich direkt, gegebenenfalls mit Parametern, aufrufen.

Funktionen werden mit dem Schlüsselwort `function` eingeführt, gefolgt von einer Deklaration und einem Klammernpaar `()`. Für die Deklaration respektive den Funktionsnamen gelten die gleichen Regeln wie bei Variablen-Namen.

Dem Klammernpaar können optional Parameter übergeben werden. Mehrere Parameter werden mittels Komma (`,`) von einander getrennt. Innerhalb einer Funktion stehen die Parameter als lokale Variablen zur Verfügung. Die Bezeichner sind damit auch nur innerhalb des *Scope* (= Gültigkeitbereich) der Funktion sichtbar. Die eigentlichen Anweisungen der Funktion, die sogenannte Implementation oder Implementierung, werden nachfolgend in geschweifte Klammern ({}) eingeschlossen. Sie bilden einen sogenannten «Block».

```text
             Bezeichner                                                       
                 │                                                            
Schlüsselwort    │     Parameter 1   Parameter 2                              
      │          │          │             │                                   
      │          │          │             │                                   
      ▼          ▼          ▼             ▼                                   
   function dieFunktion(uebergeben01, uebergeben02){                          
       return uebergeben01 + uebergeben02;                                    
   }     ▲                                                                    
         │                                                                    
         │                                                                    
         │                                                                    
         │                                                                    
         │                                                                    
    Rückgabewert                                                              




// uebergeben01 + uebergeben02 zusammenrechnen                              
// und direkt zurückgeben                                                   
// Ergebnis JavaScript Konsole: 5                                            
$.writeln(dieFunktion(2,3));                                                
                       ▲                                                    
                       │                                                    
                       │                                                    
           Argumente 1 & 2, getrennt durch Kommas  
```
Soll die Funktion einen Rückgabewert (Ergebnis) liefern, muss dieser über die Sprunganweisung `return [Rückgabewert]` zurückgegeben werden. `return` sollte dabei immer die letzte Anweisung sein. Denn nach dem Aufruf von `return` verlässt der Interpreter die Funktion. Nachfolgender Code wird nicht mehr ausgeführt und damit für das Programm unerreichbar (unreachable Code, logischer Fehler).

### Benannte und anonyme Funktionen

Im Gegensatz zur benannten Funktion hat eine anonyme Funktion keinen Namen (Deklaration). Der Verwendungszweck von anonymen Funktionen ist vielschichtig und hängt oft mit fortgeschrittenen Programmiertechniken zusammen. Etliche Frameworks setzen anonyme Funktionen intensiv ein. Sie können unter anderem automatisch, ohne speziellen Aufruf, ausgeführt werden (siehe auch [www.peterkropff.de][10].

	function([Parameterliste]){
	  [Anweisungen]
	}

### Innere Funktionen

JavaScript erlaubt das Verschachteln von Funktionen. Dabei wird eine Funktion direkt in eine andere Funktion hinein notiert (ähnlich wie innere Klassen bei Java). Wird so programmiert, gelten folgende Regeln:

* Die innere verschachtelte Funktion kann nur über die äussere aufgerufen werden und ist für alle anderen Zugriffe unzugänglich.
* Die innere Funktion kann die Variablen der äusseren Funktion verwenden.
* Die äussere Funktion hat keinen Zugriff auf die Variablen der inneren Funktion.
* ***Die innere Funktion wird als lokale Variable der äusseren Funktion angesehen.***

.

```javascript
function aussen(){
  var a = 1;
  function innen(){
    document.write(a);
  } 
  // Funktion «innen» im Scope von «aussen» aufrufen um 
  // auf die Variable «a» zuzugreifen.
  // innen() aufrufen wenn aussen() aufgerufen wird
  innen(); 
} 

// wenn aussen() aufgerufen wird, wird "automatisch" 
// innen() ausgeführt
aussen(); 
```

### Callback-Funktion

Eine Callback-Funktion, kurz Callback, ist eine JavaScript-Funktion, die einer Methode oder Funktion als Argument oder Option übergeben wird. Oftmals liefert sie als Rückgabewert eine Funktionsreferenz.

Eine Callback-Funktion muss eine bestimmte Struktur haben, damit sie funktioniert. Ein detailliertes [Beispiel][11] gibts auf den Hilfeseiten des [Mozilla Developer Networks][9].

**Einfach formuliert haben Callback-Funktionen drei Aufgaben: 1. Übergebene Argumente an die Funktionen in ihrem Innern weiterzuleiten, 2. Auf deren Rückmeldung (`return`) zu horchen und 3. die Rückmeldung (`return`) an den Aufrufer zurückzuleiten.**



[6]:http://www.mediaevent.de/JavaScript/globale-lokale-variablen.html
[7]:http://www.mediaevent.de/JavaScript/JavaScript-Funktionen-Weiter.html
[8]:http://www.mediaevent.de
[9]:https://developer.mozilla.org/de/
[10]:http://www.peterkropff.de/site/JavaScript/anonyme_funktionen.htm
[11]:https://developer.mozilla.org/de/docs/Mozilla/js-ctypes/Using_js-ctypes/Declaring_and_Using_Callbacks



