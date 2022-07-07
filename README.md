**Vorwort**
Dann hab ich auch mal dieses GitHub genutzt das all die Profis sonst nutzen.
Das Projekt ist infolge meines Studiums für das Modul Verteilte Systeme verstanden und hat VIEL luft nach oben, 
allerdings drückte die Zeit ein wenig dank den Prüfungen.

@Authors: / - / - /

**Frontend Readme**
Frontend ist ebenso erreichbar über https://vs-projekt-git.pages.dev/
gehostet von Cloudflare über mein github repository

github: https://github.com/BloodRedGoblin/VS_Projekt

ansonsten gibt es nicht besonders viel zum Frontend zu sagen außer:
1) der Code ist auskommentiert, falls es fragen gibt 
2) es sind lediglich die GET und PUT Operationen implementiert
Grund: POST und DELETE waren nicht vorgesehen für den normalen User und einen
alternativen User (admin) zu implementieren hätte den Aufwand auf allen Bereichen
(Frontend, Backend, Datenbank) gesteigert weswegen wir uns dagegen entschieden
haben, da es einfach zu knapp ist damit anzufangen

**Backend Readme**
Zur Entwicklung des Backends wurde Spring-tool-suite-4-4.15.1 verwendet.

Uninteressanter block folgt, falls man das Projekt importieren mag
Erstellung: 
1) Spring Projekt
2) Type: Maven Project, Java Version: 17, Packaging: Jar, Language: Java
3) Spring Version: 2.7.1
4) Dependencies: Spring Data JPA, Oracle Driver, Spring Web Services

**Datenbank Readme**
Als Datenbank wurde eine lokale Datenbank mithilfe von Oracle 18c aufgesetzt,
diese können natürlich nach eigener konfiguration angepasst werden bei der Erstellung

Nachdem die Datenbank aufgesetzt wurde kann das Skript im SQLDeveloper geöffnet 
und durchgelaufen werden

Aufbau Skript
- löschen Tabelle (auskommentiert)
- erstellen Tabelle
- Dummy Daten insert
