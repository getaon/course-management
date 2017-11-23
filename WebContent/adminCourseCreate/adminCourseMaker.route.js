angular.module('myApp').config(function($routeProvider) {
		$routeProvider
	
		.when("/createCourse", {
	    	templateUrl : "adminCourseCreate/adminCourseMaker.html",
	        controller : "courseMaker"
	    })
	});