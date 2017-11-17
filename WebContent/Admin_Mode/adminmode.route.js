
	angular.module('myApp').config(function($routeProvider) {
		$routeProvider
	
		.when("/instructorCourse", {
	    	templateUrl : "Admin_Mode/instructorCourse.html",
	        controller : "adminMode"
	    })
	});