angular.module('myApp').config(function($routeProvider) {
		$routeProvider
	
		.when("/CourseEdit", {
	    	templateUrl : "adminCourseEdit/adminCourseEdit.html",
	        controller : "adminCourseEdit"
	    })
	});