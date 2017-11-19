package service;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

import entity.Article;
import entity.Chat;
import entity.Course;
import manager.ManagerHelper;

@Path("/chat")
public class ChatService {

	
	public static EntityManagerFactory entitymanagerfactory = Persistence.createEntityManagerFactory("coursemanagementsystem");
	public static EntityManager entitymanager = entitymanagerfactory.createEntityManager();
	
	
	@GET
	@Path("/get")
	public Chat getChatById(@QueryParam("id") int id){
		return ManagerHelper.getChatManager().getChatById(id);
	}
	
	@GET
	@Path("/getAllChat")
	public List<Chat>getAllChat(){
		System.out.println("getAllChatsService");
		return ManagerHelper.getChatManager().getAllChat();
	}
	
	@GET
	@Path("/addInstructorChat")
	public Chat addInstructorChat(@QueryParam("comment")String comment,@QueryParam("date")String date,
			@QueryParam("instructorid")int instructorid){
		return ManagerHelper.getChatManager().addInstructorChat(comment,date,instructorid);
	}
	
	@GET
	@Path("/addStudentChat")
	public Chat addStudentChat(@QueryParam("comment")String comment,@QueryParam("date")String date,
			@QueryParam("studentid")int studentid){
		return ManagerHelper.getChatManager().addStudentChat(comment,date,studentid);
	}
	
}
