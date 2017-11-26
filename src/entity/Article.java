package entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Article {
	
	@Id  
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	
	private String presentation;
	@ManyToOne 
	@JoinColumn(name="courseid")
	private Course courseid;  
	
	public Article(){
	}
	
	public Article(String name,String presentation,Course courseid){
		this.name=name;
		this.presentation=presentation;
		this.courseid=courseid;
	}
	
	public Article(int id ,String name,String presentation,Course courseid){
		this.id=id;
		this.name=name;
		this.presentation=presentation;
		this.courseid=courseid;
	}

	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPresentation() {
		return presentation;
	}
	public void setPresentation(String presentation) {
		this.presentation = presentation;
	}

	public Course getCourseid() {
		return courseid;
	}

	public void setCourseid(Course courseid) {
		this.courseid = courseid;
	}
	
	
}