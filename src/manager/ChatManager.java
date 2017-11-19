package manager;

import java.util.List;

import javax.persistence.EntityManager;
import org.apache.openjpa.persistence.EntityManagerImpl;
import entity.Chat;
import entity.Instructor;
import entity.Student;

public class ChatManager {
	private final EntityManager entityManager;

	public ChatManager(EntityManager entityManager) {
		this.entityManager = entityManager;
		((EntityManagerImpl)this.entityManager).getBroker().setAllowReferenceToSiblingContext(true); 

	}

	public void update(Chat chat) {
		entityManager.getTransaction().begin();
		entityManager.merge(chat);
		entityManager.getTransaction().commit();
	}
	
	public void create(Chat chat) {
		entityManager.getTransaction().begin();
		entityManager.persist(chat);
		entityManager.getTransaction().commit();
	}
	
	public void delete(Chat chat) {
		entityManager.getTransaction().begin();
		entityManager.remove(chat);
		entityManager.getTransaction().commit();
	}
	/**
	 * function gives you Chat from DB by his id
	 * @param id
	 * @return
	 */
	public Chat getChatById(Integer id) {
		return entityManager.find(Chat.class, id);
	}
	
	/**
	 * this function gives you all the Chat from DB
	 * @return
	 */
	public List<Chat>getAllChat(){
		String sql = "SELECT * FROM coursemanagementsystem.chat ";
		System.out.println("getAllChatManager");
		return (List<Chat>)entityManager.createNativeQuery(sql,Chat.class).getResultList();
	}
	public Chat addInstructorChat(String comment,String date,int instructorid){
		
		Instructor instructor = ManagerHelper.getInstructorManager().getById(instructorid);
		Chat chat = new Chat(comment,date,instructor);
		
		try {
			entityManager.getTransaction().begin();
			entityManager.persist(chat);
			entityManager.getTransaction().commit();
			return chat ;	
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		
	}
public Chat addStudentChat(String comment,String date,int studentid){
		
		Student student = ManagerHelper.getStudentManager().getStudentById(studentid);
		Chat chat = new Chat(comment,date,student);
		
		try {
			entityManager.getTransaction().begin();
			entityManager.persist(chat);
			entityManager.getTransaction().commit();
			return chat ;	
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		
	}
   
}
