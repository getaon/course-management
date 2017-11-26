package manager;

import java.util.List;

import javax.persistence.EntityManager;
import org.apache.openjpa.persistence.EntityManagerImpl;

import entity.Course;
import entity.CourseInstructor;
import entity.Instructor;
import entity.Student;
import entity.StudentCourse;

public class CourseInstructorManager {
	
	private final EntityManager entityManager;

	public CourseInstructorManager(EntityManager entityManager) {
		this.entityManager = entityManager;
		((EntityManagerImpl)this.entityManager).getBroker().setAllowReferenceToSiblingContext(true); 			
	}
	
	public void update(CourseInstructor courseInstructor) {
		entityManager.getTransaction().begin();
		entityManager.merge(courseInstructor);
		entityManager.getTransaction().commit();
	}

	public void create(CourseInstructor courseInstructor) {
		entityManager.getTransaction().begin();
		entityManager.persist(courseInstructor);
		entityManager.getTransaction().commit();
	}

	public void delete(CourseInstructor courseInstructor) {
		entityManager.getTransaction().begin();
		entityManager.remove(courseInstructor);
		entityManager.getTransaction().commit();
	}
	public CourseInstructor  get(Integer  id) {
		return entityManager.find(CourseInstructor.class, id);
	}
	
	/**
	 * function create associate  between course and instructor...
	 * @param courseId
	 * @param instructorId
	 * @return
	 */
	public CourseInstructor addCourseInstructor(int courseId, int instructorId) {
		try {
		String s = "select * from coursemanagementsystem.instructor "
				+ "	where user="+instructorId; 
		Instructor instructor = (Instructor)entityManager.createNativeQuery(s, Instructor.class).getSingleResult();
		Course course = ManagerHelper.getCourseManager().getCourseById(courseId);

			CourseInstructor courseInstructor = new CourseInstructor(course,instructor);
				create(courseInstructor);
			return courseInstructor;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}

	}
	/**
	 * function delete associate  between course and instructor...
	 * @param courseId
	 * @param instructorId
	 * @return
	 */
	public Reply removeCourseInstructor(int id) {
		try {
			CourseInstructor courseInstructor = get(id);
			entityManager.getTransaction().begin();
			entityManager.remove(courseInstructor);
			entityManager.getTransaction().commit();
			return new Reply();
		} catch (Exception e) {
			Reply r = new Reply();
			r.setId(-1);
			r.setMsg(e.getMessage());
			return r;
		}
	}
	/**
	 * this function bring all associate CourseInstructor...
	 * @param courseId
	 * @param instructorId
	 * @return
	 */
	public List<CourseInstructor> getAllCourseInstructor() {
		String sql = "SELECT * from coursemanagementsystem.courseinstructor ";
		return (List<CourseInstructor>) entityManager.createNativeQuery(sql, CourseInstructor.class).getResultList();
	}
	/**
	 * function that bring the connection of instructor courses
	 * @param courseId
	 * @param instructorId
	 * @return
	 */
	public CourseInstructor getInstructorCourse(int courseId, int instructorId) {
		try{
			
			String s = "select * from coursemanagementsystem.instructor "
					+ "	where user="+instructorId;
			Instructor instructor= (Instructor)entityManager.createNativeQuery(s, Instructor.class).getSingleResult();
			 
				String sql = "select * from coursemanagementsystem.studentcourse "
						+ "where courseid="+courseId+" and studentid="+instructor.getId();

		return (CourseInstructor)entityManager.createNativeQuery(sql, CourseInstructor.class).getSingleResult();
		}catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
