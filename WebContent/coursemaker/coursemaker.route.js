angular.module('myApp').config(function($routeProvider) {
		$routeProvider
	
		.when("/CourseMaker", {
	    	templateUrl : "coursemaker/coursemaker.html",
	        controller : "myCtrl"
	    
	    })
	});