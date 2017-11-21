angular.module('myApp').config(function($routeProvider) {
		$routeProvider
	
		.when("/CourseInfo", {
	    	templateUrl : "adminCourseInfo/adminCourseInfo.html",
	        controller : "adminCourseInformation"
	    
	    })
	});