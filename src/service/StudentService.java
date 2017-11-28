package service;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

import entity.Instructor;
import entity.Student;
import manager.ManagerHelper;
import manager.Reply;

@Path("/student")
public class StudentService {
	
	@GET
	@Path("/getStudentById")
	public Student getStudentById(@QueryParam("id") int id) {
		return ManagerHelper.getStudentManager().getStudentById(id);
	}
	
	@GET
	@Path("/getAllStudents")
	public List<Student> getAllStudents() {
		return ManagerHelper.getStudentManager().getAllStudents();
	}
	
	@GET
	@Path("/getStudentsByCource")
	public List<Student> getStudentsByCource(@QueryParam("course") int course) {
		return ManagerHelper.getStudentManager().getStudentsByCource(course);
	}
	
	@GET
	@Path("/addStudent")
	public Student addStudent(@QueryParam("firstname") String firstname,
			@QueryParam("lastname") String lastname, @QueryParam("email") String email,
			@QueryParam("phone") String phone, @QueryParam("username") String username,
			@QueryParam("password") String password,@QueryParam("isactive") boolean isactive) {
		return (Student) ManagerHelper.getStudentManager().addStudent(firstname, lastname,
						email, phone, username,password, isactive);
	}
	
	@GET
	@Path("/updateStudent")
	public Reply updateStudent(@QueryParam("id") int id,@QueryParam("firstname") String firstname,@QueryParam("lastname") String lastname,@QueryParam("email") String email,@QueryParam("phone") String phone) {
		return ManagerHelper.getStudentManager().updateStudent(id,firstname,lastname,email,phone);
	}
	
	@GET
	@Path("/removeStudent")
	public Reply removeStudent(@QueryParam("id") int id) {
		return ManagerHelper.getStudentManager().removeStudent(id);
	}
}
