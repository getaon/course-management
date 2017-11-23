
	angular.module('myApp').config(function($routeProvider) {
		$routeProvider
	
<<<<<<< HEAD
		.when("/adminMode", {
	    	templateUrl : "Admin_Mode/instructorCourse.html",
=======
		.when("/instructorCourse", {
	    	templateUrl : "Admin_Mode/adminMode.html",
>>>>>>> b83c8814589cc5991e2addd71f598d979a93d2ae
	        controller : "adminMode"
	    })
	});