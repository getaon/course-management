package manager;

import java.util.List;

import javax.persistence.EntityManager;
import org.apache.openjpa.persistence.EntityManagerImpl;
import entity.Course;
import entity.Instructor;
import entity.Tag;

public class CourseManager {
	private final EntityManager entityManager;

	public CourseManager(EntityManager entityManager) {
		this.entityManager = entityManager;
		((EntityManagerImpl)this.entityManager).getBroker().setAllowReferenceToSiblingContext(true); 

	}

	public void update(Course course) {
		entityManager.getTransaction().begin();
		entityManager.merge(course);
		entityManager.getTransaction().commit();
	}
	
	public void create(Course course) {
		entityManager.getTransaction().begin();
		entityManager.persist(course);
		entityManager.getTransaction().commit();
	}
	
	public void delete(Course course) {
		entityManager.getTransaction().begin();
		entityManager.remove(course);
		entityManager.getTransaction().commit();
	}
	/**
	 * function gives you course from DB by his id
	 * @param id
	 * @return
	 */
	public Course getCourseById(Integer id) {
		return entityManager.find(Course.class, id);
	}
	/**
	 * this function gives you all the course from DB
	 * @return
	 */
	public List<Course>getAllCourses(){
		String sql = "SELECT c.id,c.name,c.instructor,c.description,c.location, "
				 	+"c.tag,c.article,c.isactive FROM coursemanagementsystem.course c "
				 	+ " inner join coursemanagementsystem.instructor i on c.instructor = i.id"
				 	+ " inner join coursemanagementsystem.tag t on c.tag = t.id "
				 	+ " where c.isactive = 1 and i.isactive = 1 ";
		System.out.println("getAllCoursesManager");
		return (List<Course>)entityManager.createNativeQuery(sql,Course.class).getResultList();
	}
	/**
	 * this function gives you courses by tag from DB 
	 * @param tag
	 * @return
	 */
	public List<Course>getCoursesByTag(int tag){
		String sql = " SELECT c.id,c.name,c.instructor,c.date,c.description, "
					+ " c.syllabus, c.location,c.tag,c.article,c.isactive FROM course c "
					+ " inner join coursemanagementsystem.tag t on c.tag = t.id "
					+ " inner join coursemanagementsystem.instructor i on c.instructor = i.id"
					+ " inner join coursemanagementsystem.article a on c.article = a.id "
					+ " where c.tag = "+tag+" and c.isactive = 1";
		
		return (List<Course>)entityManager.createNativeQuery(sql,Course.class).getResultList();
	}
	
	/**
	 * this function gives you courses from DB by the user
	 * @param user
	 * @return
	 */
	public List<Course> getMyCourses(int user){

		String sql = "SELECT c.id,c.name,c.instructor,c.description,c.date, "+
				 	" c.location,c.tag,c.article,c.isactive "+
				 	" FROM coursemanagementsystem.studentcourse sc"+
					" inner join coursemanagementsystem.course c on sc.coursesid = c.id"+
					" inner join coursemanagementsystem.student s on sc.studentid = s.id"+
					" inner join coursemanagementsystem.user u on s.user = u.id"+
					" where s.user ="+user+" and c.isactive = 1";
		   return (List<Course>)entityManager.createNativeQuery(sql,Course.class).getResultList();

		   
	}
	
	/**
	 * function that gives you the active courses from DB
	 * @return
	 */
	public List<Course>geACtiveCourses(){
		String sql = "SELECT c.id,c.name,c.instructor,c.description,c.date,"+
					" c.location,c.tag,c.articles,c.isactive FROM course c"+
					" where current_date() <= c.startdate where isactive = 1";
		return (List<Course>)entityManager.createNativeQuery(sql,Course.class).getResultList();
	}
	
	
	/**
	 * this function get course and delete him from DB
	 * @param id
	 * @return
	 */
	public Reply removeCourse(int id){
		id=3;
		System.out.println("id ---> "+id);
		try{
			String sql = "update coursemanagementsystem.course "+
					" set isactive = 0 "
					+ " where id ="+id;
			return (Reply)entityManager.createNativeQuery(sql,Course.class).getSingleResult();
		}catch(Exception e){
			e.printStackTrace();
			return null;
		}
		
	}

	/**
	 * function that get course and save it on DB
	 * @param id
	 * @param name
	 * @param instructor
	 * @param description
	 * @param startdate
	 * @param enddate
	 * @param location
	 * @param tag
	 * @param articles
	 * @param isactive
	 * @return
	 */
	public Reply updateCourse(int id,String name,int instructorid,String description,String date,
					String location,int tagid,String articles,boolean isactive){
		
		Instructor instructor = ManagerHelper.getInstructorManager().getById(instructorid);
		Tag tag = ManagerHelper.getTagManager().getTagById(tagid);
		
		try{
			Course course = new Course(id,name,instructor, description,date,location,tag,articles,isactive);
			update(course);
			
			return new Reply();
		}catch (Exception e) {
			e.printStackTrace();
			Reply r = new Reply();
			r.setId(Reply.FAIL_ID);
			r.setMsg(e.getMessage());
			return r;
		}
	}
	
	/**
	 * function that created course and put that in the DB 
	 * @param name
	 * @param instructor
	 * @param description
	 * @param startdate
	 * @param enddate
	 * @param location
	 * @param tag
	 * @param articles
	 * @param isactive
	 * @return
	 */
	public Course addCourse(String name,int instructorid,String description,String date,String location,
			int tagid,String articles,boolean isactive){
		
			Instructor instructor = ManagerHelper.getInstructorManager().getById(instructorid);
			Tag tag = ManagerHelper.getTagManager().getTagById(tagid);
					
		try{
		
		Course course = new Course(name, instructor, description, date , location, tag, articles,isactive);
		create(course);
		return course;
	}catch (Exception e) {
		e.printStackTrace();
		return null;
	}
	
}
	/**
	 * this function gives the course are selected by user
	 * @param id
	 * @return
	 */
	public Course getSelectedCource(int id) {
		try{
			String sql = "select c.id,c.name, c.instructor, c.description, c.syllabus, "+
						" c.location, c.tag, c.article, c.isactive from coursemanagementsystem.course c "+ 
						" where id ="+id+" and isactive = 1";
			return (Course)entityManager.createNativeQuery(sql, Course.class).getSingleResult();
			
		}catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
}