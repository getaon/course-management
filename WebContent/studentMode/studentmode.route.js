
	angular.module('myApp').config(function($routeProvider) {
		$routeProvider
	
		.when("/student", {
	    	templateUrl : "./studentMode/studentmode.html",
	        controller : "studentMode"
	    
	    })
	});