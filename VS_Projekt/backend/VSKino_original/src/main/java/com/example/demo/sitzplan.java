package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table
public class sitzplan {
	
	@Id
	@SequenceGenerator(
			name = "test",
			sequenceName = "test",
			allocationSize = 1
	)
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "test"
	)

	//sitzplan parameter
	private int sitzplan_id;
	private char freieplaetze;

	//sitzplan getter/setter
	public int getSitzplan_id() {
		return sitzplan_id;
	}
	public void setSitzplan_id(int sitzplan_id) {
		this.sitzplan_id = sitzplan_id;
	}
	public char getFreieplaetze() {
		return freieplaetze;
	}
	public void setFreieplaetze(char freieplaetze) {
		this.freieplaetze = freieplaetze;
	}
	
	
	//toString-funktion
	@Override
	public String toString() {
		return 	"sitzplan {" + "nr = " + sitzplan_id + ",   p_status = " + freieplaetze + '}';
	}


}
