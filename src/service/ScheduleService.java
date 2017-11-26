package service;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

import entity.Course;
import entity.Schedule;
import manager.ManagerHelper;

@Path("/schedule")
public class ScheduleService {
	
	
	@GET
	@Path("/get")
	public Schedule getScheduleById(@QueryParam("id") int id){
		return ManagerHelper.getScheduleManager().getScheduleById(id);
	}
	
	@GET
	@Path("/getSchedule")
	public Schedule getSchedule(@QueryParam("id") int id){
		System.out.println("getSchedule service");
		return ManagerHelper.getScheduleManager().getSchedule(id);
	}
	
	@GET
	@Path("/addSchedule")
	public Schedule addSchedule(@QueryParam("date") String date,@QueryParam("starthour") String starthour,@QueryParam("endhour") String endhour,@QueryParam("courseid") int courseid){
		System.out.println("addSchedule service");
		
		System.out.println("date---> " + date);
		System.out.println("starthour ----> " +starthour);
		System.out.println("endhour ---- >" + endhour);
		System.out.println("courseid ----> "+ courseid);
		return  ManagerHelper.getScheduleManager().addSchedule(date, starthour, endhour, courseid);
	}

}
