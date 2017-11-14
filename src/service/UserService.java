package service;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

import entity.User;
import manager.ManagerHelper;

@Path("/user")
public class UserService {
	
	
	@GET
	@Path("/getUserById")
	public User getUserById(@QueryParam("id")Integer id){
		return ManagerHelper.getUserManager().getUserById(id);
	}
	
	@GET
	@Path("/getFullUser")
	public User getFullUser (@QueryParam("username")String username,@QueryParam("password") String password){
		return ManagerHelper.getUserManager().getFullUser(username, password);
	}
	
	@GET
	@Path("/addUser")
	public User addUser(@QueryParam("username")String username,@QueryParam("password") String password,
								@QueryParam("username")String type){
		return ManagerHelper.getUserManager().addUser(username, password,type);
	}


}
