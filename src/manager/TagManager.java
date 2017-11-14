package manager;

import java.util.List;

import javax.persistence.EntityManager;

import org.apache.openjpa.persistence.EntityManagerImpl;

import entity.Instructor;
import entity.Tag;
import entity.User;

public class TagManager {
	private final EntityManager entityManager;

	public TagManager(EntityManager entityManager) {
		this.entityManager = entityManager;
		((EntityManagerImpl) this.entityManager).getBroker().setAllowReferenceToSiblingContext(true); 
	}
	
	public Tag getTagById(Integer id){
		return entityManager.find(Tag.class, id);
	}

	public List<Tag> getAllTags() {
			try{
				String sql = "select id,name from coursemanagementsystem.tag ";
				return (List<Tag>)entityManager.createNativeQuery(sql,Tag.class).getResultList();
			}catch (Exception e) { 
				// TODO: handle exception
				return null;
			}
			
	}
	

}
