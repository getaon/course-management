
	angular.module('myApp').config(function($routeProvider) {
		$routeProvider
	
		.when("/adminMode", {
	    	templateUrl : "Admin_Mode/instructorCourse.html",
	        controller : "adminMode"
	    })
	});