package manager;

import java.util.List;

import javax.persistence.EntityManager;
import org.apache.openjpa.persistence.EntityManagerImpl;

import entity.Article;
import entity.Course;
import entity.CourseInstructor;
import entity.Instructor;
import entity.Student;
import entity.StudentCourse;
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
	public List <Course> getAllCourses(){
		String sql = " SELECT * FROM coursemanagementsystem.course c "
			 	+ " inner join coursemanagementsystem.instructor i on c.instructor = i.id"
			 	+ " inner join coursemanagementsystem.tag t on c.tag = t.id "
			 	+ " where c.isactive = 1 and i.isactive = 1 ";
		return (List<Course>)entityManager.createNativeQuery(sql,Course.class).getResultList();
	}
	
	/**
	 * this function gives you all the course from DB
	 * @return
	 */
	public List<Course> getArchiveCourses(){
		String sql = " SELECT * FROM coursemanagementsystem.course c "
			 	+ " inner join coursemanagementsystem.instructor i on c.instructor = i.id"
			 	+ " inner join coursemanagementsystem.tag t on c.tag = t.id "
			 	+ "	where c.isactive=0";
		return (List<Course>)entityManager.createNativeQuery(sql,Course.class).getResultList();
	}
	/**
	 * this function gives you courses by tag from DB 
	 * @param tag
	 * @return
	 */
	public List<Course>getCoursesByTag(int tag){
		String sql = " SELECT c.id,c.name,c.instructor,c.date,c.description, "
					+ " c.syllabus, c.location,c.tag,c.isactive FROM course c "
					+ " inner join coursemanagementsystem.tag t on c.tag = t.id "
					+ " inner join coursemanagementsystem.instructor i on c.instructor = i.id"
					+ " where c.tag = "+tag+" and c.isactive = 1";
		
		return (List<Course>)entityManager.createNativeQuery(sql,Course.class).getResultList();
	}
	
	/**
	 * this function gives you courses from DB by the user
	 * @param user
	 * @return
	 */
	public List<StudentCourse> getMyCoursesStudent(int user){

		String sql = "";
		String s="";
			s ="select * from coursemanagementsystem.student where user="+user;
			Student studentid =(Student)entityManager.createNativeQuery(s,Student.class).getSingleResult();
		
			sql = "SELECT * FROM coursemanagementsystem.studentcourse sc"+
					" inner join coursemanagementsystem.course c on sc.courseid = c.id"+
					" inner join coursemanagementsystem.student s on sc.studentid = s.id"+
					" inner join coursemanagementsystem.user u on s.user = u.id"+
					" where sc.studentid="+studentid.getId() +" and c.isactive = 1";
			
			return (List<StudentCourse>)entityManager.createNativeQuery(sql,StudentCourse.class).getResultList();
	}
	
	/**
	 * this function gives you courses from DB by the user
	 * @param user
	 * @return
	 */
	public List<CourseInstructor> getMyCoursesInstructor(int user){
			String s="select * from coursemanagementsystem.instructor where user="+user;
			Instructor instrustor = (Instructor)entityManager.createNativeQuery(s,Instructor.class).getSingleResult();
			
			String sql = "SELECT * FROM coursemanagementsystem.courseinstructor ci"+
					" inner join coursemanagementsystem.course c on ci.courseid = c.id"+
					" inner join coursemanagementsystem.instructor i on ci.instructorid= i.id"+
					" where ci.instructorid="+instrustor.getId()+" and c.isactive = 1";
			 
			 return (List<CourseInstructor>)entityManager.createNativeQuery(sql,CourseInstructor.class).getResultList();
	}
	
	/**
	 * function that gives you the active courses from DB
	 * @return
	 */
	public List<Course>getActiveCourses(){
		String sql = "SELECT c.id,c.name,c.instructor,c.description,c.date,"+
					" c.location,c.tag,c.isactive FROM course c"+
					" where current_date() <= c.startdate where isactive = 1";
		return (List<Course>)entityManager.createNativeQuery(sql,Course.class).getResultList();
	}
	
	
	/**
	 * this function get course and delete him from DB
	 * @param id
	 * @return
	 */
	public Reply removeCourse(int id){
		try{

			Course course = ManagerHelper.getCourseManager().getCourseById(id);
			course.setIsactive(false);
			update(course);
			
			Reply r = new Reply();
				r.setId(0);
				r.setMsg(Reply.OK_STR);
			return r; 
		}catch(Exception e){
			e.printStackTrace();
			Reply r = new Reply();
				r.setId(-1);
				r.setMsg("faild");
			return r;
		}
		
	}
	
	/**
	 * this function activate a course that has been 
	 * removed or finished
	 * @param id
	 * @return
	 */
	public Reply unRemoveCourse(int id){
		try{

			Course course = ManagerHelper.getCourseManager().getCourseById(id);
			course.setIsactive(true);
			update(course);
			
			 
			return new Reply(); 
		}catch(Exception e){
			e.printStackTrace();
			Reply r = new Reply();
				r.setId(-1);
				r.setMsg("faild");
			return r;
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
					String location,int tagid,boolean isactive){
		
		Instructor instructor = ManagerHelper.getInstructorManager().getById(instructorid);
		Tag tag = ManagerHelper.getTagManager().getTagById(tagid);
		
		try{
			Course course = new Course(id,name,instructor, description,date,location,tag ,isactive);
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
	public Course addCourse(int courseId, String description,String date,String location,
			int tagid,String syllabus,boolean isactive){
		try{
			Tag tag = ManagerHelper.getTagManager().getTagById(tagid);
					
			Course course = new Course(description, date , location, tag, syllabus , isactive);
			course.setId(courseId);
			update(course);
			return course;
		}catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	
	}
	
	public Course addCourseTitle(String name, int instructorid, boolean isactive) {
			try{
				
				Instructor instructor = ManagerHelper.getInstructorManager().getById(instructorid);
				Course course = new Course();
					course.setName(name);
					course.setInstructor(instructor);
					course.setIsactive(isactive);
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
						" c.location, c.tag, c.isactive from coursemanagementsystem.course c "+ 
						" where id ="+id+" and isactive = 1";
			return (Course)entityManager.createNativeQuery(sql, Course.class).getSingleResult();
			
		}catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
