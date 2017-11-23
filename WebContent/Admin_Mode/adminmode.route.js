
	angular.module('myApp').config(function($routeProvider) {
		$routeProvider

		.when("/instructorCourse", {
	    	templateUrl : "Admin_Mode/adminMode.html",

	        controller : "adminMode"
	    })
	});