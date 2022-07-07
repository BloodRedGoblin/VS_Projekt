package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.boot.CommandLineRunner;


@SpringBootApplication
@RestController
public class VsKinoOriginalApplication implements CommandLineRunner {
 
	//startfunktion
	public static void main(String[] args) {
		SpringApplication.run(VsKinoOriginalApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		//existiert einfach, die anwendung läuft hier
	}

}
