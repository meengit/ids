---
layout: default
permalink: /schleifen/
title: Schleifen & Iteration
---

## Kontrollstrukturen in JavaScript (Schleifen)

Kontrollstrukturen sind die klassische Anwendung von logischen und vergleichenden Operatoren in einer Programmiersprache. Mit ihnen kann der Programmierer Entscheidungen über den weiteren Ablauf eines Programms oder Scripts vorgeben, wenn bestimmte Bedingungen eintreten. In JavaScript gibt es, wie in vielen anderen Sprachen, drei Arten von Kontrollflussanweisungen:
1. **Entscheidungsanweisungen**: Wählen auf Grund einer Bedingung einen Programmfluss aus;
2. **Schleifen**: bzw. Iterationsanweisungen: Wiederholen eine bestimmte Anzahl an Anweisungen;
3. **Sprunganweisungen**: Verlassen eine umgebende Struktur.

### if-Bedingung 

	if(Bedingung){
	  [Anweisung A]
	}
	else { //Optional 
	  [alternative Anweisung B]
	}
	
Wenn die Bedingung wahr ist, wird `[Anweisung A]` ausgeführt - ansonsten die `[alternative Anweisung B]`. Die `(Bedingung)` ist ein Vergleich, der sowohl `true` als auch `false` sein kann oder der boolesche Wert selbst. Zur Definition des Vergleichs werden in der Regel Vergleichsoperatoren verwendet.

Der `else`-Abschnitt ist optional. Wird er nicht notiert, wird bei einer nicht erfüllten `if`-Bedingung keine alternative Anweisung aufgerufen, sondern der Code direkt weiter abgearbeitet. Wenn der `if`-Zweig bereits ausgeführt wurde, wird der `else`-Zweig nicht ausgeführt. Ein detailliertes [Beispiel][12] gibts auf den Hilfeseiten des [Mozilla Developer Networks][9].

### switch-case

	switch([Auswahl]){
	  
	  case [Fall 1]:
	    ...
	    break;
	  case [Fall 2]:
	    ...
	    break;
	  default:
	    ...
	} 

Die `switch-case`-Anweisung ist auf das Unterscheiden von mehreren Fällen ausgelegt. Zwar wäre dies auch mit einer `if-else`-Bedingung möglich, doch lässt sich die Abfrage mit `switch-case` eleganter abbilden. Das Schlüsselwort `switch` leitet die Fallunterscheidung ein. Die nachfolgenden runden Klammern `( )` umschliessen eine Testvariable oder ein übergebener Ausdruck. Dieser dient zur Fallunterscheidung und kann ein beliebiger Datentyp sein der in JavaScript erlaubt ist. 
Die einzelnen Fälle werden mit dem Schlüsselwort `case` eingeleitet – gefolgt von einem konkreten Testwert der geprüft werden soll. Nach dem Doppelpunkt werden die im Trefferfall auszuführenden Anweisungen notiert.

Theoretisch lassen sich die Anweisungen in einem `case`-Zweig als Block in geschweiften Klammern `{ }` notieren. Meist wird jedoch darauf verzichtet.

Die Anweisung `break`, am Schluss jedes Blockes, ist eine Sprunganweisung. Das `switch-case`-Konstrukt ist eine Fall-Through-Anweisung. `break` verhindert, dass nach dem Erreichen des Endes eines Blocks die nachfolgenden Anweisungen in weiteren Blöcken ausgeführt werden. Stattdessen springt sie ans Ende der Struktur.

Der letzte Block ist meist der `default`-Zweig. Er ist eine Standardreaktion und wird ausgeführt, wenn kein `case`-Fall zutrifft. Als letzter Block kann auch ein `case`-Fall notiert werden – wenn kein `default`-Fall gewünscht ist. `break` ist im letzten Fall, egal ob `default` oder `case` überflüssig.

Obwohl in der Praxis `case` meist in Verbindung mit `break` verwendet wird, ist break nicht zwingend notwendig. Dieses Verhalten des Durchfallens/Weitermachens kann ein wesentlicher Vorteil gegenüber der `if-else`-Anweisung sein (unterschiedliche Einstiegs-/Ausstiegspunkte möglich).

Neben `break` kann zudem u.a. auch mit `return` gearbeitet werden. Der grosse Nachteil der Programmflusssteuerung mit `switch-case` ist, dass nur diskrete Fälle unterschieden werden können. Es ist nur ein Vergleich auf exakte Gleichheit möglich. Vergleiche wie «grösser als» oder «kleiner als» wie bei `if-else` gehen nicht. Zudem können nicht mehrere Werte gemeinsam getestet werden.

Ein detailliertes [Beispiel][13] gibts auf den Hilfeseiten des [Mozilla Developer Networks][9] – wobei die Anweisung `console.log()` im Adobe ExtendScript Toolkit jeweils durch `$.writeln()` ersetzt werden muss.

### while-Schleife

	while(Bedingung){
	  [Anweisung]
	}

Die `while`-Schleife ist eine Iterationsanweisung. Sie führt am Anfang eines Blocks eine Prüfung einer Bedingung durch und wiederholt diese so lange, bis die Bedingung nicht mehr zutrifft. Damit ist sie kopfgesteuert (auch «abweisend» genannt). Jede `while`-Schleife braucht dabei in ihrem Innern einen Mechanismus, mit dem die Schleife abgebrochen resp. aus der Schleife ausgestiegen werden kann. Dadurch besteht die Gefahr, dass aus Versehen eine Endlosschleife erzeugt wird. Ist diese nicht gewollt, kann nicht der gesamte Programmcode abgearbeitet werden ,da der Interpreter in der Schleife hängen bleibt (und diese endlos immer wieder von vorne abarbeitet).

Es gibt zwei grundsätzliche Varianten, um aus einer `while`-Schleife auszusteigen:

a. In der [Bedingung] einer `while`-Schleife wird eine Variable geprüft, welche im Innern der Schleife mit jedem Durchlauf verändert wird – zum Beispiel numerisch erhöht oder verringert. Trifft die veränderte Variable in der Bedingung nach dem x-ten Durchlauf der Schleife nicht mehr zu, indem ihr Wert zu gross oder zu klein geworden ist, bricht die Schleife ab.

b. Die Schleife wird mit einer Sprunganweisung wie `break`, `return` oder `throw` (bei der Arbeit mit Ausnahmen im Umgang mit Fehlern) verlassen. So ein Abbruch aus dem Innern der Schleife ist insbesondere in Verbindung mit dem Prüfen einer Bedingung über `if` im Innern von `while` sinnvoll.

Ein detailliertes [Beispiel][14] gibts auf den Hilfeseiten des [Mozilla Developer Networks][9] – wobei die Anweisung `console.log()` im Adobe ExtendScript Toolkit jeweils durch `$.writeln()` ersetzt werden muss.

### do-while-Schleife

	do{
	  [Anweisungen]
	}
	while([Bedingung]);

Die `do-while`-Schleife ist eine Variante der `while`-Schleife. Sie unterscheidet sich einzig darin, dass die in `do` notierten [Anweisungen] auf jeden Fall 1x ausgeführt werden, bevor die [Bedingung] erstmalig in `while` überprüft wird. Damit ist die `do-while`-Schleife fussgesteuert (auch annehmend genannt).

Ein detailliertes [Beispiel][15] gibts auf den Hilfeseiten des [Mozilla Developer Networks][9] – wobei die Anweisung `console.log()` im Adobe ExtendScript Toolkit jeweils durch `$.writeln()` ersetzt werden muss.

### for-Schleife

	for(Zählvariable; Bedingung; Veränderung Zählvariable;){
	  [Anweisungen]
	}

Die erste Angabe in der Klammer nach dem Schlüsselwort `for` gibt die Zählvariable an und initialisiert sie mit einem Startwert. Danach folgt (getrennt durch `;`) die Abbruchbedingung und dann (getrennt durch `;`) die Wertveränderung der Zählvariable. Ist der Wert der Zählvariable nicht mehr zutreffend, wird die `for`-Schleife abgebrochen.

Die `for`-Schleife hat den Vorteil, dass an zentraler Stelle alle Werte definiert werden können. Der vorzeitige Abbruch einer `for`-Schleife aus dem Innern, zum Beispiel mit einer Sprunganweisung wie `break`, ist allerdings möglich.

Ein detailliertes [Beispiel][16] gibts auf den Hilfeseiten des [Mozilla Developer Networks][9].

### for-in Schleife 

	for([Index] in [Datenfeld/Objekt]){
	 [Anweisung]
	}

Die `for-in` Schleife ist eine Variante der `for`-Schleife. Sie wird vor allem im Zusammenhang mit Datenfeldern und Objekten verwendet. Die `for-in` Schleife dient allein der Iteration durch Arrays/Datenfelder oder Objekte. Bei einem Array durchläuft die `for-in` Schleife alle Elemente eines Arrays. Bei Objekten durchläuft die `for-in` Schleife alle Eigenschaften eines Objekts. [Index] ist dabei der Platzhalter für den Index (numerisch oder assoziativ) und das [Datenfeld/Objekt] der dem Index zugeordnete Inhalt.

Ein detailliertes [Beispiel][17] gibts auf den Hilfeseiten des [Mozilla Developer Networks][9].

### `break` und `continue`

Mit `break` wird eine Schleife respektive deren Abarbeitung sofort abgebrochen. Dagegen bricht `continue` nur den gegenwärtigen Schleifendurchlauf an dessen Position ab und initiiert unmittelbar den nächsten Schleifendurchlauf. Das heisst, mit `continue` lassen sich bestimmte Teile einer verschachtelten Schleife ignorieren ohne dass diese komplett abgebrochen wird (ohne aus der Schleife «auszusteigen»).

*(Wird nach `break`, getrennt durch einen Doppelpunkt, ein Label angegeben (`break: [label]`), springt das Script nach dem Abbruch der Schleife direkt zur Position des `[label]` im Script. Der Name des `[label]` ist dabei frei wählbar. Die Funktion wird allerdings nicht von allen Interpretern richtig unterstützt und birgt zudem die Gefahr von «Spaghetti-Code».)*

[9]:https://developer.mozilla.org/de/
[12]:https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/if...else
[13]:https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/switch
[14]:https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/schleifen_und_iterationen#while_Anweisung
[15]:https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/schleifen_und_iterationen#do...while_Anweisung
[16]:https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/schleifen_und_iterationen#for_Anweisung
[17]:https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/schleifen_und_iterationen#for...in_Anweisung