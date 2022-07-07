package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface sitzplan_repository 
		extends JpaRepository <sitzplan, sitzplan> {
			//Existiert einfach, ist das Repository für sitzplan
}

