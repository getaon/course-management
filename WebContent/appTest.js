app.factory("repeatServices", function($http){
var response = {};


	 response.AllCourses = function(){
			return $http.get("http://localhost/coursemanagementsystem/rest/course/getAllCourses");
	}

	response.AllTags= function(){
		return 	$http.get("http://localhost/coursemanagementsystem/rest/tag/getAllTags");
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
