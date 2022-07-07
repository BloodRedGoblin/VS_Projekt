//Hilfsvariable um schreibaufwand zu sparen
const api_url = 'http://localhost:8080/sitzplan'; 

//Hilfsvariablen zur übersicht der farbgestaltungen im code
const red = "rgb(200, 0, 0)";
const green = "rgb(0, 200, 0)";
const blue = "rgb(0, 100, 200)";
const highlighted_blue = "rgb(50, 150, 250)";
const highlighted_green = "rgb(50, 250, 50)";

//Hilfsvariablen zur verarbeitung der Daten
var p_status = [];
var temp = [];

// holt sich die benötigten Daten vom Backend
async function fetchAPIData(){
	
	//fetchen und speichern der Daten
	const response = await fetch(api_url);
	const data = await response.json();
	
	//Abfrage: Welche Plätze sind als bereits reserviert markiert? Reservierte Plätze werden nun rot
	if(data[0].freieplaetze == 1){
		document.getElementById("p1").style.backgroundColor = red;
		p_status[0] = 1;
	}
	if(data[1].freieplaetze == 1){
		document.getElementById("p2").style.backgroundColor = red;
		p_status[1] = 1;
	}
	if(data[2].freieplaetze == 1){
		document.getElementById("p3").style.backgroundColor = red;
		p_status[2] = 1;
	}
	if(data[3].freieplaetze == 1){
		document.getElementById("p4").style.backgroundColor = red;
		p_status[3] = 1;
	}
	if(data[4].freieplaetze == 1){
		document.getElementById("p5").style.backgroundColor = red;
		p_status[4] = 1;
	}
	if(data[5].freieplaetze == 1){
		document.getElementById("p6").style.backgroundColor = red;
		p_status[5] = 1;
	}
	if(data[6].freieplaetze == 1){
		document.getElementById("p7").style.backgroundColor = red;
		p_status[6] = 1;
	}
	if(data[7].freieplaetze == 1){
		document.getElementById("p8").style.backgroundColor = red;
		p_status[7] = 1;
	}
	if(data[8].freieplaetze == 1){
		document.getElementById("p9").style.backgroundColor = red;
		p_status[8] = 1;
	}
	if(data[9].freieplaetze == 1){
		document.getElementById("p10").style.backgroundColor = red;
		p_status[9] = 1;
	}
	if(data[10].freieplaetze == 1){
		document.getElementById("p11").style.backgroundColor = red;
		p_status[10] = 1;
	}
	if(data[11].freieplaetze == 1){
		document.getElementById("p12").style.backgroundColor = red;
		p_status[11] = 1;
	}
	if(data[12].freieplaetze == 1){
		document.getElementById("p13").style.backgroundColor = red;
		p_status[12] = 1;
	}
	if(data[13].freieplaetze == 1){
		document.getElementById("p14").style.backgroundColor = red;
		p_status[13] = 1;
	}
	if(data[14].freieplaetze == 1){
		document.getElementById("p15").style.backgroundColor = red;
		p_status[14] = 1;
	}
	
	for(var i=0; i < data.length; i++){
		temp[i] = data[i];
	}
}

//Beim Laden der seite wird fetchAPIData aufgerufen - onload event
window.addEventListener("load", function (event) {
  fetchAPIData();
});

// onClick funktion für blaue und grüne div-elemente - die Plätze
function change(id) {
	//Methode um die CSS Eigenschafte und Werte eines HTML Elementes zu erhalten
	var Obj = window.getComputedStyle(id, null);
	
	//Abfrage: Ist element Blau? dann wird es grün - und andersherum
	if( Obj.getPropertyValue("background-color") == highlighted_blue ){
		id.style.backgroundColor = highlighted_green;
	}
	else if( Obj.getPropertyValue("background-color") == highlighted_green ) {
		id.style.backgroundColor = highlighted_blue;
	}
}

// Hover-effekt funktion für blaue und grüne div-elemente - die Plätze 
function hoverin(id) {
	var Obj = window.getComputedStyle(id, null);
	
	if( Obj.getPropertyValue("background-color") == blue){
		id.style.backgroundColor = highlighted_blue;
	}
	else if( Obj.getPropertyValue("background-color") == green){
		id.style.backgroundColor = highlighted_green;
	}
}

// Hover-effekt funktion für blaue und grüne div-elemente - die Plätze 
function hoverout(id) {
	var Obj = window.getComputedStyle(id, null);
	
	if( Obj.getPropertyValue("background-color") == highlighted_blue){
		id.style.backgroundColor = blue;
	}
	else if( Obj.getPropertyValue("background-color") == highlighted_green){
		id.style.backgroundColor = green;
	}
}

// Funktion zum reservieren 
async function reservieren() {

	// Abfrage, welche Plätze zum reservieren markiert wurden + einspeichern in temp-variable 
	if( document.getElementById("p1").style.backgroundColor == green ){
		temp[0].freieplaetze = "1";
	}
	if( document.getElementById("p2").style.backgroundColor == green ){
		temp[1].freieplaetze = "1";
	}
	if( document.getElementById("p3").style.backgroundColor == green ){
		temp[2].freieplaetze = "1";
	}
	if( document.getElementById("p4").style.backgroundColor == green ){
		temp[3].freieplaetze = "1";
	}
	if( document.getElementById("p5").style.backgroundColor == green ){
		temp[4].freieplaetze = "1";
	}
	if( document.getElementById("p6").style.backgroundColor == green ){
		temp[5].freieplaetze = "1";
	}
	if( document.getElementById("p7").style.backgroundColor == green ){
		temp[6].freieplaetze = "1";
	}
	if( document.getElementById("p8").style.backgroundColor == green ){
		temp[7].freieplaetze = "1";
	}
	if( document.getElementById("p9").style.backgroundColor == green ){
		temp[8].freieplaetze = "1";
	}
	if( document.getElementById("p10").style.backgroundColor == green ){
		temp[9].freieplaetze = "1";
	}
	if( document.getElementById("p11").style.backgroundColor == green ){
		temp[10].freieplaetze = "1";
	}
	if( document.getElementById("p12").style.backgroundColor == green ){
		temp[11].freieplaetze = "1";
	}
	if( document.getElementById("p13").style.backgroundColor == green ){
		temp[12].freieplaetze = "1";
	}
	if( document.getElementById("p14").style.backgroundColor == green ){
		temp[13].freieplaetze = "1";
	}
	if( document.getElementById("p15").style.backgroundColor == green ){
		temp[14].freieplaetze = "1";
	}

	// PUT zum updaten, welche Plätze sind reserviert werden 
	fetch(api_url, {
		method: "PUT",
		headers: { 'Content-Type': 'application/json'},
		body: JSON.stringify(temp),
	});
	
	// User Benarichtigung + reload der seite um Änderungen direkt anzuzeigen 
	alert("Reservierung wurde verarbeitet");
	location.reload();
}

// Hover-effekt funktion für blau/lila buttons - Reservieren / Return 
function hoverin2(id){
	var Obj = window.getComputedStyle(id, null);
	id.style.backgroundColor = "rgb(30,30,150)";	
}

// Hover-effekt funktion für blau/lila buttons - Reservieren / Return 
function hoverout2(id){
	var Obj = window.getComputedStyle(id, null);
	id.style.backgroundColor = "rgb(70,70,190)";
}