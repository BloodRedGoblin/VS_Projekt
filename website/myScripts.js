function change(id) {
	//Method to get the computed CSS properties and values ofa HTML element
	var Obj = window.getComputedStyle(id, null);
	
	//Abfrage: Ist Element blau? | ja: wechsel zu rot rgb(200, 0, 0) | nein: wechsle zu blau rgb(0, 100, 200)
	if( Obj.getPropertyValue("background-color") == "rgb(50, 150, 250)" ){
		id.style.backgroundColor = "rgb(250, 50, 50)";
	}
	else if( Obj.getPropertyValue("background-color") == "rgb(250, 50, 50)" ) {
		id.style.backgroundColor = "rgb(50, 150, 250)";
	}
}

function hoverin(id) {
	var Obj = window.getComputedStyle(id, null);
	
	if( Obj.getPropertyValue("background-color") == "rgb(0, 100, 200)"){
		id.style.backgroundColor = "rgb(50, 150, 250)"
	}
	else if( Obj.getPropertyValue("background-color") == "rgb(200, 0, 0)"){
		id.style.backgroundColor = "rgb(250, 50, 50)";
	}
}

function hoverout(id) {
	var Obj = window.getComputedStyle(id, null);
	
	if( Obj.getPropertyValue("background-color") == "rgb(50, 150, 250)"){
		id.style.backgroundColor = "rgb(0, 100, 200)";
	}
	else if( Obj.getPropertyValue("background-color") == "rgb(250, 50, 50)"){
		id.style.backgroundColor = "rgb(200, 0, 0)";
	}
}