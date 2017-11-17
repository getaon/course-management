	angular.module('myApp').config(function($routeProvider) {
		$routeProvider
	
		.when("/studentCourseInfo", {
	    	templateUrl : "studentCourseInfo/courseinfo.html",
	        controller : "studentCourseInfo"
	    
	    })
	});