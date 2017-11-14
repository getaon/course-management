package service;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

import entity.Course;

import manager.ManagerHelper;
import manager.Reply;

@Path("/course")
public class CourseService {

	
	@GET
	@Path("/get")
	public Course getCustomerById(@QueryParam("id") int id){
		return ManagerHelper.getCourseManager().getCourseById(id);
	}
	
	@GET
	@Path("/getAllCourses")
	public List<Course>getAllCourses(){
		System.out.println("getAllCoursesService");
		return ManagerHelper.getCourseManager().getAllCourses();
	}
	
	@GET
	@Path("/getCoursesByTag")
	public List<Course>getCoursesByTag(@QueryParam("tag")int tag){
		return ManagerHelper.getCourseManager().getCoursesByTag(tag);
	}
	@GET
	@Path("/getMyCourses")
	public List<Course>getMyCourses(@QueryParam("user")int user){
		return ManagerHelper.getCourseManager().getMyCourses(user);
	}
	
	@GET
	@Path("/geActiveCourses")
	public List<Course>geACtiveCourses(){
		return ManagerHelper.getCourseManager().geACtiveCourses();
	}
	
	@GET
	@Path("/removeCourse")
	public Reply removeCourse(@QueryParam("id")int id,@QueryParam("id")int name){
		System.out.println("course id ---> "+id);
		return ManagerHelper.getCourseManager().removeCourse(id);
	}
	
	@GET
	@Path("/updateCourse")
	public Reply updateCourse(@QueryParam("id")int id,@QueryParam("name")String name,
			@QueryParam("instructorid")int instructorid,@QueryParam("description")String description,
			@QueryParam("date")String date,@QueryParam("location")String location,
			@QueryParam("tag")int tag,@QueryParam("articles")String articles,
			@QueryParam("isactive")boolean isactive){
		return ManagerHelper.getCourseManager().updateCourse(id, name, instructorid, description,date, location, tag, articles, isactive);
	}
	
	@GET
	@Path("/addCourse")
	public Course addCourse(@QueryParam("name")String name,@QueryParam("instructorid")int instructorid,@QueryParam("description")String description,
			@QueryParam("date")String date,@QueryParam("location")String location,@QueryParam("tag")int tag,@QueryParam("articles")String articles,
			@QueryParam("isactive")boolean isactive){
		return ManagerHelper.getCourseManager().addCourse(name, instructorid, description,date, location, tag, articles, isactive);
	}
	
	@GET
	@Path("/getSelectedCource")
	public Course getSelectedCource(@QueryParam("id")int id) {
		return ManagerHelper.getCourseManager().getSelectedCource(id);
	}
	
}