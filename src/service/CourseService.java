package service;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

import entity.Article;
import entity.Course;
import entity.CourseInstructor;
import entity.StudentCourse;
import manager.ManagerHelper;
import manager.Reply;

@Path("/course")
public class CourseService {

	
	@GET
	@Path("/getCourseById")
	public Course getCourseById(@QueryParam("id") int id){
		return ManagerHelper.getCourseManager().getCourseById(id);
	}
	
	@GET
	@Path("/getAllCourses")
	public List<Course>getAllCourses(){
		return ManagerHelper.getCourseManager().getAllCourses();
	}
	
	@GET
	@Path("/getArchiveCourses")
	public List<Course>getArchiveCourses(){
		return ManagerHelper.getCourseManager().getArchiveCourses();
	}

	@GET
	@Path("/getCoursesByTag")
	public List<Course>getCoursesByTag(@QueryParam("tag")int tag){
		return ManagerHelper.getCourseManager().getCoursesByTag(tag);
	}
	@GET
	@Path("/getMyCoursesStudent")
	public List<StudentCourse> getMyCoursesStudent(@QueryParam("user") int user){
		return ManagerHelper.getCourseManager().getMyCoursesStudent(user);
	}
	
	@GET
	@Path("/getMyCoursesInstructor")
	public List<CourseInstructor>getMyCoursesInstructor(@QueryParam("user") int user){
		return ManagerHelper.getCourseManager().getMyCoursesInstructor(user);
	}
	
	@GET
	@Path("/getActiveCourses")
	public List<Course>getActiveCourses(){
		return ManagerHelper.getCourseManager().getActiveCourses();
	}
	
	@GET
	@Path("/removeCourse")
	public Reply removeCourse(@QueryParam("id")int id){
		return ManagerHelper.getCourseManager().removeCourse(id);
	}
	
	@GET
	@Path("/unRemoveCourse")
	public Reply unRemoveCourse(@QueryParam("id")int id){
		return ManagerHelper.getCourseManager().unRemoveCourse(id);
	}
	
	@GET
	@Path("/updateCourse")
	public Reply updateCourse(@QueryParam("id")int id,@QueryParam("name")String name,
			@QueryParam("instructorid")int instructorid,@QueryParam("description")String description,
			@QueryParam("date")String date,@QueryParam("location")String location,
			@QueryParam("tag")int tag,
			@QueryParam("isactive")boolean isactive){
		return ManagerHelper.getCourseManager().updateCourse(id, name, instructorid, description,date, location, tag, isactive);
	}
	
	@GET
	@Path("/addCourse")
	public Course addCourse(@QueryParam("courseId")int courseId,@QueryParam("description")String description,
			@QueryParam("date")String date,@QueryParam("location")String location,@QueryParam("tag")int tag,
			@QueryParam("syllabus")String syllabus,@QueryParam("isactive")boolean isactive){
		return ManagerHelper.getCourseManager().addCourse(courseId,description,date, location, tag, syllabus, isactive);
	}
	
	@GET
	@Path("/addCourseTitle")
	public Course addCourseTitle(@QueryParam("name")String name,@QueryParam("instructorid")int instructorid,
						@QueryParam("isactive")boolean isactive){
		return ManagerHelper.getCourseManager().addCourseTitle(name, instructorid,isactive);
	}
	
	@GET
	@Path("/getSelectedCource")
	public Course getSelectedCource(@QueryParam("id")int id) {
		return ManagerHelper.getCourseManager().getSelectedCource(id);
	}
	
}
