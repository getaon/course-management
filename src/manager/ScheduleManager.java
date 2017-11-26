package manager;

import java.util.List;

import javax.persistence.EntityManager;

import org.apache.openjpa.persistence.EntityManagerImpl;

import entity.Course;
import entity.Schedule;

public class ScheduleManager {
	private final EntityManager entityManager;

	public ScheduleManager(EntityManager entityManager) {
		this.entityManager = entityManager;
		((EntityManagerImpl)this.entityManager).getBroker().setAllowReferenceToSiblingContext(true); 
	}
	
	public void update(Schedule schedule) {
		entityManager.getTransaction().begin();
		entityManager.merge(schedule);
		entityManager.getTransaction().commit();
	}
	
	public void create(Schedule schedule) {
		entityManager.getTransaction().begin();
		entityManager.persist(schedule);
		entityManager.getTransaction().commit();
	}
	
	public void delete(Schedule schedule) {
		entityManager.getTransaction().begin();
		entityManager.remove(schedule);
		entityManager.getTransaction().commit();
	}
	
	public Schedule getScheduleById(Integer id) {
		return entityManager.find(Schedule.class, id);
	}
	
	public Schedule getSchedule(int id) {
		System.out.println("getSchedule manager");
		String sql ="SELECT s.id, s.date, s.starthour, s.endhour, s.courseid FROM coursemanagementsystem.schedule s "+
					" inner join coursemanagementsystem.course c on c.id = s.courseid "+
					" where s.courseid="+id+
					" and c.isactive=1";
		return (Schedule) entityManager.createNativeQuery(sql,Schedule.class).getSingleResult();
		
	}
	
	public Schedule addSchedule(String date,String starthour,String endhour,int courseid) {
		
		System.out.println("date---> " + date);
		System.out.println("starthour ----> " +starthour);
		System.out.println("endhour ---- >" + endhour);
		System.out.println("courseid ----> "+ courseid);
		
		Course course = ManagerHelper.getCourseManager().getCourseById(courseid);
		try {
			Schedule schedule = new Schedule(date,starthour,endhour,course);
			create(schedule);
			return schedule;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
}
