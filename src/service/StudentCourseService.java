package service;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

import entity.StudentCourse;
import manager.ManagerHelper;
import manager.Reply;

@Path("/studentCourse")
public class StudentCourseService {
	
		@GET
		@Path("/getStudentCourseById")
		public StudentCourse getStudentCourseById(@QueryParam("id") int id) {
			return ManagerHelper.getStudentCourseManager().getStudentCourseById(id);
		}
		

		@GET
		@Path("/studentCourseVerefiy")
		public StudentCourse studentCourseVerefiy(@QueryParam("id") int id,
				@QueryParam("id") int userId) {
			return ManagerHelper.getStudentCourseManager().studentCourseVerefiy(id,userId);
		}
		
		@GET
		@Path("/getAllStudentCourse")
		public List<StudentCourse> getAllStudentCourse() {
			return ManagerHelper.getStudentCourseManager().getAllStudentCourse();
		}
		
		@GET
		@Path("/register")
		public StudentCourse register(@QueryParam("studentid") int studentid, @QueryParam("courseid") int courseid) {
			return ManagerHelper.getStudentCourseManager().register(studentid, courseid);
		}
		
		@GET
		@Path("/removeStudentCourse")
		public Reply removeStudentCourse(@QueryParam("id") int id) {
			return ManagerHelper.getStudentCourseManager().removeStudentCourse(id);
		}
}
