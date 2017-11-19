package service;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

import entity.Article;
import entity.Course;
import manager.ManagerHelper;
import manager.Reply;

@Path("/article")
public class ArticleService {

	
	public static EntityManagerFactory entitymanagerfactory = Persistence.createEntityManagerFactory("coursemanagementsystem");
	public static EntityManager entitymanager = entitymanagerfactory.createEntityManager();
	
	
	@GET
	@Path("/get")
	public Article getArticleById(@QueryParam("id") int id){
		return ManagerHelper.getArticleManager().getArticleById(id);
	}
	
	@GET
	@Path("/getAllArticles")
	public List<Article>getAllArticles(){
		System.out.println("getAllArticlesService");
		return ManagerHelper.getArticleManager().getAllArticles();
	}
	
	@GET
	@Path("/getArticleByCourse")
	public List<Article> getArticleByCourse(@QueryParam("course")int course){
		return ManagerHelper.getArticleManager().getArticleByCourse(course);
	}
	
	
	@GET
	@Path("/removeArticle")
	public Reply removeArticle(@QueryParam("id")int id){
		return ManagerHelper.getArticleManager().removeArticle(id);
	}
	
	
	@GET
	@Path("/addArticle")
	public Article addArticle(@QueryParam("name")String name,@QueryParam("presentation")String presentation){
		return ManagerHelper.getArticleManager().addArticle(name,presentation);
	}
	@GET
	@Path("/updateArticle")
	public Reply updateArticle(@QueryParam("id")int id,@QueryParam("name")String name,@QueryParam("presentation")String presentation){
		return ManagerHelper.getArticleManager().updateArticle(id,name,presentation);
	}
}
