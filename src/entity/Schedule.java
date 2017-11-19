package entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Schedule {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String date;
	private String starthour;
	private String endhour;
	@ManyToOne
	@JoinColumn(name="courseid")
	private Course courseid;
	
	
	public Schedule(){
	}
	
	public Schedule( String date,String starthour,String endhour, Course courseid){
		this.date=date;
		this.starthour=starthour;
		this.endhour=endhour;
		this.courseid=courseid;
	}
	public Schedule(int id, String date,String starthour,String endhour, Course courseid){
		this.id=id;
		this.date=date;
		this.starthour=starthour;
		this.endhour=endhour;
		this.courseid=courseid;
	}
	
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getStarthour() {
		return starthour;
	}
	public void setStarthour(String starthour) {
		this.starthour = starthour;
	}
	public String getEndhour() {
		return endhour;
	}
	public void setEndhour(String endhour) {
		this.endhour = endhour;
	}
	public Course getCourseid() {
		return courseid;
	}
	public void setCourseid(Course courseid) {
		this.courseid = courseid;
	}
}
