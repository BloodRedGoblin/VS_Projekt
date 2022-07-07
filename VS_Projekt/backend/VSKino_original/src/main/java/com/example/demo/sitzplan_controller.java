package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;


@RestController
@CrossOrigin //benötigt für berechtigung sitzplan anzusteuern
@RequestMapping(path = "sitzplan") //speichert sitzplan unter localhost:XXXX/sitzplan
public class sitzplan_controller {

		private final sitzplan_service sitzplanService;
		
		public sitzplan_controller(sitzplan_service sitzplanService) {
			this.sitzplanService = sitzplanService;
		}
		
		//für GET - Daten abrufen
		@GetMapping
		public List <sitzplan> getSitzplan() {
			return sitzplanService.getSitzplan();
		}
		
		//für PUT - Daten updaten
	    @PutMapping
	    public List<sitzplan> addSitzplan(@RequestBody List<sitzplan> sitzplan) {
	    	return sitzplanService.updateSitzplan(sitzplan);
	    }
		

}

