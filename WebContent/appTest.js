app.factory("repeatServices", function($http){
var response = {};


    response.AllCourses = function(){
			return $http.get("http://localhost/coursemanagementsystem/rest/course/getAllCourses");
	}

    response.courseArchive = function(){
		return $http.get("http://localhost/coursemanagementsystem/rest/course/getArchiveCourses");
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

	response.studentCourse= function(courseid){
		return 	$http.get("http://localhost/coursemanagementsystem/rest/studentCourse/studentCourseVerefiy?"
				+"id="+courseid + "&userId="+userId);
	}
	
	response.instructorCourse= function(courseid){
		return 	$http.get("http://localhost/coursemanagementsystem/rest/courseInstructor/getInstructorCourse?"
				+"courseId="+courseid + "&instructorId="+userId);
	}
	
	return response;
});
