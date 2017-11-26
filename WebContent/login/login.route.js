angular.module('myApp').config(function($routeProvider) {
		$routeProvider
	
		.when("/", {
	    	templateUrl : "login/login.html",
	        controller : "login"
		})
		
		.when("/student", {
	    	templateUrl : "studentMode/studentmode.html",
	        controller : "studentMode"
	    
	    })

		.when("/studentCourseInfo", {
	    	templateUrl : "studentCourseInfo/courseinfo.html",
	        controller : "CourseInfo"
	    })
		
		.when("/instructorCourse", {
	    	templateUrl : "Admin_Mode/adminMode.html",
	        controller : "adminMode"
	    })

	    .when("/CourseInfo", {
	    	templateUrl : "adminCourseInfo/adminCourseInfo.html",
	        controller : "adminCourseInformation"
	    
	    })

	    .when("/createCourse", {
	    	templateUrl : "adminCourseCreate/adminCourseMaker.html",
	        controller : "courseMaker"
	    })
	    
		.when("/CourseEdit", {
	    	templateUrl : "adminCourseEdit/adminCourseEdit.html",
	        controller : "adminCourseEdit"
	    })
	    .when("/message", {
	    	templateUrl : "messageboard.html",
	        controller : "CourseInfo"
	    })

	    
});