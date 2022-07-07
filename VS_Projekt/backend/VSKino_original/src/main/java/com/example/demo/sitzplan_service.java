package com.example.demo;

import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class sitzplan_service {

	private final sitzplan_repository sitzplanRepository;
	
	public sitzplan_service(sitzplan_repository sitzplan_repository) {
		this.sitzplanRepository = sitzplan_repository;
	}
	
	//GET-methode leitet hierhin weiter
	public List<sitzplan> getSitzplan() {
		return sitzplanRepository.findAll();
	}

	//PUT-methode leitet hierhin weiter
	public List<sitzplan> updateSitzplan(List<sitzplan> sitzplan) {
		// TODO Auto-generated method stub
		return sitzplanRepository.saveAll(sitzplan);
	}


}

