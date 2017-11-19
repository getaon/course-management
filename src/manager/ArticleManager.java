package manager;

import java.util.List;

import javax.persistence.EntityManager;
import org.apache.openjpa.persistence.EntityManagerImpl;
import entity.Article;


public class ArticleManager {
	private final EntityManager entityManager;

	public ArticleManager(EntityManager entityManager) {
		this.entityManager = entityManager;
		((EntityManagerImpl)this.entityManager).getBroker().setAllowReferenceToSiblingContext(true); 

	}

	public void update(Article article) {
		entityManager.getTransaction().begin();
		entityManager.merge(article);
		entityManager.getTransaction().commit();
	}
	
	public void create(Article article) {
		entityManager.getTransaction().begin();
		entityManager.persist(article);
		entityManager.getTransaction().commit();
	}
	
	public void delete(Article article) {
		entityManager.getTransaction().begin();
		entityManager.remove(article);
		entityManager.getTransaction().commit();
	}
	/**
	 * function gives you Article from DB by his id
	 * @param id
	 * @return
	 */
	public Article getArticleById(Integer id) {
		return entityManager.find(Article.class, id);
	}
	public List<Article> getArticleByCourse(Integer course) {
		String sql ="SELECT a.id,a.name,a.presentation FROM coursemanagementsystem.article a"
				+ " inner join coursemanagementsystem.coursearticle ca on ca.articleid = a.id"
				+ " inner join coursemanagementsystem.course c on c.article = ca.courseid "
				+ " where c.id="+course;
		return (List<Article>)entityManager.createNativeQuery(sql, Article.class).getResultList();
	}
	/**
	 * this function gives you all the Article from DB
	 * @return
	 */
	public List<Article>getAllArticles(){
		String sql = "SELECT * FROM coursemanagementsystem.article ";
		System.out.println("getAllArticlesManager");
		return (List<Article>)entityManager.createNativeQuery(sql,Article.class).getResultList();
	}
	
	/**
	 * function that adds new article to the list
	 * @param name
	 * @param presentation
	 * @return
	 */
	public Article addArticle(String name,String presentation){
		
			
		Article article = new Article(name,presentation);
		try {
			entityManager.getTransaction().begin();
			entityManager.persist(article);
			entityManager.getTransaction().commit();

			return article ;	
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		
	}
   public Reply removeArticle(int id){
		
	   Article article = getArticleById(id);
		try {
			entityManager.getTransaction().begin();
			entityManager.remove(article);
			entityManager.getTransaction().commit();
		return new Reply() ;	
		} catch (Exception e) {
			Reply r = new Reply();
			r.setId(Reply.FAIL_ID);
			r.setMsg(e.getMessage());
			return r;
		}
	}
   public Reply updateArticle(int id,String name,String presentation) {
	   Article article = getArticleById(id);
		try {
			entityManager.getTransaction().begin();
			entityManager.merge(article);
			entityManager.getTransaction().commit();
			return new Reply();
		} catch (Exception e) {
			Reply r = new Reply();
			r.setId(-1);
			r.setMsg(e.getMessage());
			return r;
		}

	}
}
