package service;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

import entity.CourseArticle;
import entity.StudentCourse;
import manager.ManagerHelper;
import manager.Reply;

@Path("/courseArticle")
public class CourseArticleService {
	
		@GET
		@Path("/getCourseArticleById")
		public CourseArticle getCourseArticleById(@QueryParam("id") int id) {
			return ManagerHelper.getCourseArticleManager().getCourseArticleById(id);
		}
		
		@GET
		@Path("/getAllCourseArticle")
		public List<CourseArticle> getAllCourseArticle() {
			return ManagerHelper.getCourseArticleManager().getAllCourseArticle();
		}
		
		@GET
		@Path("/removeCourseArticle")
		public Reply removeCourseArticle(@QueryParam("id") int id) {
			return ManagerHelper.getCourseArticleManager().removeCourseArticle(id);
		}
}
