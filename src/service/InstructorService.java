package service;

import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import entity.Instructor;
import manager.Reply;
import manager.ManagerHelper;

@Path("/instructor")
public class InstructorService {

	@GET
	@Path("/getAllInstructors")
	public List<Instructor>getAllInstructors(){
		return ManagerHelper.getInstructorManager().getAllInstructors();
	}
	
	@GET
	@Path("/addInstructor")
	public Instructor addInstructor(@QueryParam("firstname")String firstname,
			@QueryParam("lastname")String lastname,@QueryParam("email")String email,
			@QueryParam("phone")String phone,@QueryParam("username")String username,
			@QueryParam("password")String password,@QueryParam("isactive")boolean isactive){
		   
		return ManagerHelper.getInstructorManager().addInstructor(firstname,lastname,
				email,phone,username,password,isactive);
	}
	
	@GET
	@Path("/updateInstructor")
	public Reply updateCustomer(@QueryParam("id") int id,@QueryParam("firstname")String firstname,
			@QueryParam("lastname")String lastname,
			@QueryParam("email")String email,@QueryParam("phone")String phone){
		return ManagerHelper.getInstructorManager().updateInstructor(id,firstname,lastname,email,phone);
	}
	
	@GET
	@Path("/removeInstructor")
	public Reply removeCustomer(@QueryParam("id") int id){
		return ManagerHelper.getInstructorManager().removeInstructor(id);
	}
}
