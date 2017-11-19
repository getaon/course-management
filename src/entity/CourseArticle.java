package entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class CourseArticle {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@ManyToOne
	@JoinColumn(name="courseid")
	private Course courseid;
	@ManyToOne
	@JoinColumn(name="articleid")
	private Article articleid;
	
	public CourseArticle() {
		
	}
    public CourseArticle(Course courseid,Article articleid) {
     this.courseid= courseid;	
     this.articleid= articleid;	
		
	}
    public CourseArticle(int id,Course courseid,Article articleid) {
    	this.id = id;
    	this.courseid= courseid;	
        this.articleid= articleid;	
   		
    }
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Course getCourseid() {
		return courseid;
	}
	public void setCourseid(Course courseid) {
		this.courseid = courseid;
	}
	public Article getArticleid() {
		return articleid;
	}
	public void setArticleid(Article articleid) {
		this.articleid = articleid;
	}
	
}
