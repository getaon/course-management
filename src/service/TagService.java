package service;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

import entity.Tag;
import manager.ManagerHelper;
import manager.Reply;

@Path("/tag")
public class TagService {

	@GET
	@Path("/getTagById")
	public Tag getUserById(@QueryParam("id")Integer id){
		return ManagerHelper.getTagManager().getTagById(id);
	}
	
	@GET
	@Path("/getAllTags")
	public List<Tag> getAllTags(){
		return ManagerHelper.getTagManager().getAllTags();
	}
	@GET
	@Path("/addTag")
	public Tag addTag(@QueryParam("name")String name){
		return ManagerHelper.getTagManager().addTag(name);
	}
	@GET
	@Path("/removeTag")
	public Reply removeTag(@QueryParam("id")int id){
		return ManagerHelper.getTagManager().removeTag(id);
	}
}
