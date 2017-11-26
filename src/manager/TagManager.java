package manager;

import java.util.List;

import javax.persistence.EntityManager;

import org.apache.openjpa.persistence.EntityManagerImpl;

import entity.Course;
import entity.Instructor;
import entity.Student;
import entity.Tag;
import entity.User;

public class TagManager {
	private final EntityManager entityManager;

	public TagManager(EntityManager entityManager) {
		this.entityManager = entityManager;
		((EntityManagerImpl) this.entityManager).getBroker().setAllowReferenceToSiblingContext(true); 
	}
	
	public void update(Tag tag) {
		entityManager.getTransaction().begin();
		entityManager.merge(tag);
		entityManager.getTransaction().commit();
	}

	public void create(Tag tag) {
		entityManager.getTransaction().begin();
		entityManager.persist(tag);
		entityManager.getTransaction().commit();
	}

	public void delete(Tag tag) {
		entityManager.getTransaction().begin();
		entityManager.remove(tag);
		entityManager.getTransaction().commit();
	}

	public Tag getTagById(Integer id){
		return entityManager.find(Tag.class, id);
	}

	public List<Tag> getAllTags() {
			try{
				String sql = "select id,name from coursemanagementsystem.tag ";
				return (List<Tag>)entityManager.createNativeQuery(sql,Tag.class).getResultList();
			}catch (Exception e) { 
				
				return null;
			}
			
	}
	public Tag addTag(String name) {
		try{
			
			Tag Tag = new Tag(name);
				create(Tag);
				return Tag;
				
		}catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
public Reply removeTag(int id){
		try {
			Tag tag = getTagById(id);
			entityManager.getTransaction().begin();
			entityManager.remove(tag);
			entityManager.getTransaction().commit();
		return new Reply() ;	
		} catch (Exception e) {
			Reply r = new Reply();
			r.setId(Reply.FAIL_ID);
			r.setMsg(e.getMessage());
			return r;
		}
	}
 
	
}
