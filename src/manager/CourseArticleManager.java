package manager;

import java.util.List;

import javax.persistence.EntityManager;

import org.apache.openjpa.persistence.EntityManagerImpl;

import entity.Article;
import entity.Course;
import entity.CourseArticle;
import entity.Student;
import entity.StudentCourse;


public class CourseArticleManager {
	
	private final EntityManager entityManager;

	public CourseArticleManager(EntityManager entityManager) {
		this.entityManager = entityManager;
		((EntityManagerImpl) this.entityManager).getBroker().setAllowReferenceToSiblingContext(true); 
	}
	
	public void update(CourseArticle courseArticle) {
		entityManager.getTransaction().begin();
		entityManager.merge(courseArticle);
		entityManager.getTransaction().commit();
	}

	public void create(CourseArticle courseArticle) {
		entityManager.getTransaction().begin();
		entityManager.persist(courseArticle);
		entityManager.getTransaction().commit();
	}

	public void delete(CourseArticle courseArticle) {
		entityManager.getTransaction().begin();
		entityManager.remove(courseArticle);
		entityManager.getTransaction().commit();
	}
	
	/**
	 * function that finds an (course to article) connection 
	 * @param id
	 * @return
	 */
	public CourseArticle getCourseArticleById(Integer id) {
		return entityManager.find(CourseArticle.class, id);
	}
	
	/**
	 * create associate  course to article
	 * @param studentid
	 * @param courseid
	 * @return
	 */
	public CourseArticle createCourseArticle(int courseid,int articleid){
		
		Course course = ManagerHelper.getCourseManager().getCourseById(courseid);
		Article article = ManagerHelper.getArticleManager().getArticleById(articleid);
		
		CourseArticle courseArticle = new CourseArticle(course,article);
		try {
			entityManager.getTransaction().begin();
			entityManager.persist(courseArticle);
			entityManager.getTransaction().commit();
		return courseArticle ;	
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	
	}
	/*
	*//**
	 * remove the attaching (course to article)
	 * @param id
	 * @return
	 */
	public Reply removeCourseArticle(int id){
		
		CourseArticle courseArticle = getCourseArticleById(id);
		try {
			entityManager.getTransaction().begin();
			entityManager.remove(courseArticle);
			entityManager.getTransaction().commit();
		return new Reply() ;	
		} catch (Exception e) {
			Reply r = new Reply();
			r.setId(Reply.FAIL_ID);
			r.setMsg(e.getMessage());
			return r;
		}
	}
	
	 /**
	 * bring me list of all the attached (course to article)
	 * @return
	 */
	public List<CourseArticle> getAllCourseArticle() {
		String sql = "SELECT * from coursemanagementsystem.coursearticle";
		return (List) entityManager.createNativeQuery(sql, CourseArticle.class).getResultList();
	}
}
