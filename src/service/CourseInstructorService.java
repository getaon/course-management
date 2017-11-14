package service;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

import entity.CourseInstructor;
import manager.ManagerHelper;
import manager.Reply;

@Path("/courseInstructor")
public class CourseInstructorService {
	
	@GET
	@Path("/get")
	public CourseInstructor getCourseInstructor(@QueryParam("id") int id) {
		return ManagerHelper.getCourseInstructorManager().get(id);
	}
	@GET
	@Path("/addCourseInstructor")
	public CourseInstructor addCourseInstructor(@QueryParam("courseId") int courseId,
			@QueryParam("instructorId") int instructorId) {
		return ManagerHelper.getCourseInstructorManager().addCourseInstructor(courseId,instructorId);
	}
	@GET
	@Path("/removeCourseInstructor")
	public Reply removeCourseInstructor(@QueryParam("id") int id) {
		return ManagerHelper.getCourseInstructorManager().removeCourseInstructor(id);
	}
	@GET
	@Path("/getAllCourseInstructor")
	public List<CourseInstructor> getAllCourseInstructor() {
		return ManagerHelper.getCourseInstructorManager().getAllCourseInstructor();
	}
}
