package entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Chat {
	    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String comment;
	
	private String date;
	@ManyToOne
	@JoinColumn(name="instructor")
	private Instructor instructorid;
	@ManyToOne
	@JoinColumn(name="student")
	private Student studentid;

	
	
	public Chat(){
	}


	public Chat(String comment, String date, Instructor instructorid) {
	this.comment = comment;
	this.date = date;
	this.instructorid = instructorid;

	}
	public Chat(String comment, String date, Student studentid) {
		this.comment = comment;
		this.date = date;
		this.studentid = studentid;
		}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public Instructor getInstructorid() {
		return instructorid;
	}

	public void setInstructorid(Instructor instructorid) {
		this.instructorid = instructorid;
	}

	public Student getStudentid() {
		return studentid;
	}

	public void setStudentid(Student studentid) {
		this.studentid = studentid;
	}

}