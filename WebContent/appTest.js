app.factory("repeatServices", function($http){
var response = {};


    response.AllCourses = function(){
			return $http.get("http://localhost/coursemanagementsystem/rest/course/getAllCourses");
	}
    response.removeCourse = function(courseid){
    return $http.get("http://localhost/coursemanagementsystem/rest/course/removeCourse?id="+courseid);
    }
    response.selectedCource = function(courseid){
    return $http.get("http://localhost/coursemanagementsystem/rest/course/getSelectedCource?"
			+"id="+courseid)
    }
    response.unArchiveCourse = function(index){
		return $http.get("http://localhost/coursemanagementsystem/rest/course/unRemoveCourse?id="+index);
    }

    response.courseArchive = function(){
		return $http.get("http://localhost/coursemanagementsystem/rest/course/getArchiveCourses");
    }
    
    response.createCourse = function(name,instructor){
    	return $http.get("http://localhost/coursemanagementsystem/rest/course/addCourseTitle?name="+name
				+"&instructorid="+instructor
				+"&isactive=true");
    }
    
    response.updateCourse = function(course_id,course_name,course_instructor,course_description,course_date,course_location,course_tag){
		return $http.get("http://localhost/coursemanagementsystem/rest/course/updateCourse?id="
			+course_id+"&name="+course_name
			+"&instructorid="+course_instructor+
			"&description="+course_description
			+"&date="+course_date+"&location="
			+course_location+"&tag="
			+course_tag+"&articles=test&isactive=true")
	}
	
    response.addStudent = function(student_name,student_last_name,  
    					student_email, student_phone, student_user_name,
    					student_password){
		return $http.get("http://localhost/coursemanagementsystem/rest/student/addStudent?" 
			+"firstname="+student_name
			+"&lastname="+student_last_name
			+"&email="+student_email
			+"&phone="+student_phone
			+"&username="+student_user_name
			+"&password="+student_password
			+"&isactive=true");
	 }

   response.addInstructor = function(instructor_name,instructor_last_name,  
		  				instructor_email, instructor_phone, instructor_user_name,
  			  		instructor_password){
    	return $http.get("http://localhost/coursemanagementsystem/rest/instructor/addInstructor?" 
    			+"firstname="+instructor_name
    			+"&lastname="+instructor_last_name
    			+"&email="+instructor_email
    			+"&phone="+instructor_phone
    			+"&username="+instructor_user_name
    			+"&password="+instructor_password
		    	+"&isactive=true");
    }
   response.editInstructore = function (userId) {
		return $http.get("localhost/coursemanagementsystem/rest/instructor/updateInstructor?id="+userId
				+"&firstname="+instructor_name
				+"&lastname="+instructor_last_name
				+"&email="+instructor_email
				+"&phone="+instructor_phone+"&isactive=true")
	}

   response.AllStudents= function(){
    	return $http.get("http://localhost/coursemanagementsystem/rest/student/getAllStudents");
    }
   
   response.AllInstructors= function(){
	   return $http.get("http://localhost/coursemanagementsystem/rest/instructor/getAllInstructors");
   }

	response.AllTags= function(){
		return 	$http.get("http://localhost/coursemanagementsystem/rest/tag/getAllTags");
	}

	response.addTag= function(category_name){
			console.log(category_name);
		return 	$http.get("http://localhost/coursemanagementsystem/rest/tag/addTag?"
							+"name="+category_name);
	}
	
	response.getCoursesByTag= function(tagid){
		return $http.get("http://localhost/coursemanagementsystem/rest/course/getCoursesByTag?tag="+tagid);
	}
			
	response.studentCourse= function(courseid){
		return 	$http.get("http://localhost/coursemanagementsystem/rest/studentCourse/studentCourseVerefiy?"
				+"id="+courseid + "&userId="+userId);
	}
	
	response.instructorCourse= function(courseid,userId){
		return 	$http.get("http://localhost/coursemanagementsystem/rest/courseInstructor/getInstructorCourse?"
				+"courseId="+courseid + "&instructorId="+userId);		
	}
	
	response.editStudent = function (userId) {
		return $http.get("localhost/coursemanagementsystem/rest/student/updateStudent?id="+userId
				+"&firstname="+student_name
				+"&lastname="+student_last_name
				+"&email="+student_email
				+"&phone="+student_phone)
	}
	
	response.editInstructore = function (userId) {
		return $http.get("localhost/coursemanagementsystem/rest/instructor/updateInstructor?id="+userId
				+"&firstname="+instructor_name
				+"&lastname="+instructor_last_name
				+"&email="+instructor_email
				+"&phone="+instructor_phone)
	}
	
	response.getArticleByCourse = function(courseid){
		return $http. get("http://localhost/coursemanagementsystem/rest/article/getArticleByCourse?"	
			+"course="+courseid);
	}
	
	response.getMyCoursesInstructor = function(userId){
		return $http.get("http://localhost/coursemanagementsystem/rest/course/getMyCoursesInstructor?"
			+"user="+userId)
	}
	
	response.getMyCoursesStudent = function(userId){
		return $http.get("http://localhost/coursemanagementsystem/rest/course/getMyCoursesStudent?"
				+"user="+userId)
	}
	
	response.getSelectedCource = function(courseid){
		return $http. get("http://localhost/coursemanagementsystem/rest/course/getSelectedCource?"
				+"id="+courseid)
	}
	
	response.getScheduleByCourseId = function(courseid){
		return $http.get("http://localhost/coursemanagementsystem/rest/schedule" 
							+"/getScheduleByCourseId?courseId="+courseid);
	}
	
	response.getAllStudents = function(){
		return $http.get("http://localhost/coursemanagementsystem/rest/student/getAllStudents")
	}
	
	response.getAllArticles = function(){
		return $http.get("http://localhost/coursemanagementsystem/rest/article/getAllArticles")
	}
	
	
	response.addCourse = function(course_id,course_description,course_date,
										course_location,course_tag,syllabus){
		return $http.get("http://localhost/coursemanagementsystem/rest/course/addCourse?" 
				+"courseId="+course_id
				+"&description="+course_description
				+"&date="+course_date
				+"&location="+course_location
				+"&tag="+course_tag
				+"&syllabus="+syllabus
				+"&isactive=true")
	}
	
	
	response.getById = function(fullUserId){
		return $http.get("http://localhost/coursemanagementsystem/rest/instructor/getById?"
			 +"id="+fullUserId)
	}
	
	response.login = function(username,password){
		return $http.get("http://localhost/coursemanagementsystem/rest/user/getFullUser?"
		   		   +"username="+username
		   		   +"&password="+password)
	}
	
	response.registerCourse = function(userId,courseid){
		return $http.get("http://localhost/coursemanagementsystem/rest/courseInstructor/addCourseInstructor?"
				+ "instructorId="+userId
				+ "&courseId="+courseid) 
	}
	

	return response;
});
