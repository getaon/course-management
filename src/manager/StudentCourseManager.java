package manager;

import java.util.List;

import javax.persistence.EntityManager;

import org.apache.openjpa.persistence.EntityManagerImpl;

import entity.Course;
import entity.Student;
import entity.StudentCourse;

public class StudentCourseManager {
	
	private final EntityManager entityManager;

	public StudentCourseManager(EntityManager entityManager) {
		this.entityManager = entityManager;
		((EntityManagerImpl) this.entityManager).getBroker().setAllowReferenceToSiblingContext(true); 
	}
	
	public void update(StudentCourse studentcourse) {
		entityManager.getTransaction().begin();
		entityManager.merge(studentcourse);
		entityManager.getTransaction().commit();
	}

	public void create(StudentCourse studentcourse) {
		entityManager.getTransaction().begin();
		entityManager.persist(studentcourse);
		entityManager.getTransaction().commit();
	}

	public void delete(StudentCourse studentcourse) {
		entityManager.getTransaction().begin();
		entityManager.remove(studentcourse);
		entityManager.getTransaction().commit();
	}
	
	
	public StudentCourse getStudentCourseById(Integer id) {
		return (StudentCourse)entityManager.find(StudentCourse.class, id);
	}

	
	/**
	 * function that finds an (student to course) connection 
	 * @param id
	 * @return
	 */
	public StudentCourse studentCourseVerefiy(Integer id, int userId) {
		try{
		
			String s = "select * from coursemanagementsystem.student "
					+ "	where user="+userId;
			Student student = (Student)entityManager.createNativeQuery(s, Student.class).getSingleResult();
			 
				String sql = "select * from coursemanagementsystem.studentcourse "
						+ "where courseid="+id+" and studentid="+student.getId();

		return (StudentCourse)entityManager.createNativeQuery(sql, StudentCourse.class).getSingleResult();
		}catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/**
	 * attaching student to course
	 * @param studentid
	 * @param courseid
	 * @return
	 */
	public StudentCourse register(int studentid, int courseid){
		try {

		String s = "select * from coursemanagementsystem.student "
				+ "	where user="+studentid;
		Student student = (Student)entityManager.createNativeQuery(s, Student.class).getSingleResult();

		Course course = ManagerHelper.getCourseManager().getCourseById(courseid);
		StudentCourse studentcourse = new StudentCourse(student, course);
			
		create(studentcourse);

		return studentcourse ;	
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	
	}
	
	/**
	 * remove the attaching (student to course)
	 * @param id
	 * @return
	 */
	public Reply removeStudentCourse(int id){
		
		StudentCourse studentcourse = getStudentCourseById(id);
		try {
			entityManager.getTransaction().begin();
			entityManager.remove(studentcourse);
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
	 * bring me list of all the attached (student to course)
	 * @return
	 */
	public List<StudentCourse> getAllStudentCourse() {
		String sql = "SELECT * from coursemanagementsystem.studentcourse";
		return (List) entityManager.createNativeQuery(sql, StudentCourse.class).getResultList();
	}
}
