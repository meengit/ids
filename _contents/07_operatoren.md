---
layout: default
permalink: /operatoren/
title: Operatoren
---

Ein **Operator** ist ein Symbol bzw. Token, das angibt, welche Operation in einem Ausdruck ausgeführt werden soll. Die Elemente, Literale oder Variablen, mit welchen eine solche Operation durchgeführt werden wird, nennt man **Operanden**. 

Ein detailliertes [Beispiel][18] gibts auf den Hilfeseiten des [Mozilla Developer Networks][9].

### Arithmetische Operatoren

Arithmetische Operatoren brauchen immer zwei Zahlenoperanden und liefern als Ergebnis einer arithmetischen Operation eine neue Zahl als Wert.

Operator | Bedeutung | Beschreibung | Beispiel |
---------|-----------|--------------|----------|
`+` | Addition | Addition von zwei Zahlen oder numerischen Variablen | `3 + 4`|
`-` | Subtraktion | Subtraktion von zwei Zahlen oder numerischen Variablen | `4 - 3` |
`-` | Negierung | Einstellige arithmetische Negierung | `-3`|
`*` | Multiplikation | Multiplikation von zwei Zahlen oder numerischen Variablen | `2 * 3` |
`/` | Division | Division von zwei Zahlen oder numerischen Variablen | `2 / 3` |
`%` | Modulo | Gibt den Rest einer Division zurück (**ACHTUNG: Mögliche Rundungsprobleme bei Gleitkommazahlen!**) | `15 % 9 (= 6)` |
`++` | Inkrement | Operator erhöht den Wert des Operanden um 1 | wert++ |
`--` | Dekrement | Operator vermindert den Wert des Operanden um 1 | wert-- |
WICHTIG | Inkrement, Dekrement | **WICHTIG**: `++i` = Operator **vor** Operanden -> Manipulation des Wertes **vor** dessen Verwendung, `i++` = Operator **nach** Operanden -> Manipulation des Wertes **nach** dessen Verwendung | |

**Punkt-vor-Strich-Regel**: Gilt auch in JavaScript – inkl. die Verwendung von Klammern für arithmetische Operationen.

### Boolesche Operatoren

Mit boolschen Ausdrücken lassen sich unter anderem Bedingungen, Zustände oder Operanden vergleichen. 

Operator | Bedeutung | Beschreibung | Beispiel | Ergebnis |
---------|-----------|--------------|----------|----------|
`!=` | Ungleichheit | Vergleich, ob zwei Operanden nicht identisch sind, Ergebnis: `true` wenn nicht gleich | `8 != 4 + 4` | `false` |
`!==` | Typungleichheit | Vergleich, ob zwei Operanden entweder im Wert oder im Typ nicht identisch sind, Ergebnis: `true` wenn eines zutrifft | `'4' !== 4` | true |
`<` | Kleiner-als | Vergleich, ob erster Operand kleiner als zweiter, Ergebnis: `true` wenn erster kleiner | 5 < 6 | `true` |
`<=` | Kleiner-als-oder-gleich | Vergleich, ob erster Operand kleiner oder gleich dem zweiten ist, Ergebnis: `true` wenn eines zutrifft | `6 <= 6`| `true` |
`==` | Gleichheit | Vergleich, ob zwei Operanden gleich sind, Ergebnis: `true` wenn gleich | `4 + 4 == 8`| `true` |
`===` | Identität | Vergleich, ob zwei Operanden im Wert und Typ gleich, Ergebnis: `true` wenn beide zutreffen | `'4' === 4` | `false` |
`>` | Grösser-als | Vergleich, ob erster Operator grösser als Zweiter, Ergebnis: `true` wenn Erster grösser | `5 > 6` | `false` |
`>=` | Grösser-als-oder-gleich | Vergleich, ob erster Operand grösser oder gleich dem Zweiten, Ergebnis: `true` wenn eines zutrifft | `5 >= 6` | `false` | 

#### Logische Operatoren

Logische Operatoren dienen der Verknüpfung von booleschen Werten beziehungsweise booleschen Ausdrücken. Das Ergebnis einer solchen Verknüpfung ist wiederum ein boolscher Wert.

Operator | Bedeutung | Beschreibung | Beispiel | Ergebnis |
---------|-----------|--------------|----------|----------|
`&&` | logisches AND bzw. UND | Operator vergleicht zwei Ausdrücke, Ergebnis: `true` wenn beide Ausdrücke mit wahrem Ergebnis | `(4 + 4 == 8) && (2 + 3 == 5)` | `true` |
`||` | logisches OR bzw. ODER | Operator vergleicht zwei Ausdrücke, Ergebnis: `true` wenn ein Ausdruck oder beide Ausdrücke ein wahres Ergebnis haben | `(4 + 4 == 7) || (2 + 3 == 5)` | `true` |
`!` | logisches NOT bzw. NICHT | Operator dreht logischen Wert um, Ergebnis: `true` wird zu `false` und entgegengesetzt | `!(4 + 4 == 8)` | false |
`?:` | ENTWEDER-ODER-Bedingung | Abkürzung der `if-else`-Entscheidung, vergleicht Wert vor dem `?` mit Werten nach dem `?`, Ergebnis: `true` = Wert vor `:` wird zurückgegeben, `false` = Wert nach `:` wird zurückgegeben | `(3 < 4) ? 'ja':'nein'` | `'ja'` |

#### Zuweisungsoperatoren

Neben dem direkten Zuweisungsoperator (`=`) gib es in JavaScript **arithmetische Zuweisungsoperatoren**. Sie bauen auf dem Gleichheitsoperator mit vorangestelltem Token auf und sind als Abkürzung von arithmetischen Operationen zu verstehen.

Operator | Bedeutung | Beispiel | Erklärung der Anweisung | Alternative |
---------|-----------|----------|-------------------------|-------------| 
`+=` | Additions- und Zuweisungsoperator | `a += 5` | Wert von `a` wird um `5`  erhöht | `a = a + 5;` |
`-=` | Subtraktions- und Zuweisungsoperator | `a -= 10` | Wert von `a` wird um 10 reduziert | `a = a - 10;` |
`*=` | Multiplikations- und Zuweisungsoperator | `a *= 5` | Wert von `a` multipliziert mit `5` | `a = a * 5` |
`/=` | Divisions- und Zuweisungsoperator | `a /= 2` | Wert von `a` geteilt durch `2` | `a = a / 2` |
`%=` | Modulo- und Zuweisungsoperator | `a %= 5` | Wert von `a` modulo dem Wert `5` | `a = a % 5` |
`=` | Direkter Zuweisungsoperator | `a = 5` | Wert von `a` ist `5` |  |

[9]:https://developer.mozilla.org/de/
[18]:https://developer.mozilla.org/de/docs/JavaScript/Guide/Ausdruecke_und_Operatoren