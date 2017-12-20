angular.module('myApp').controller("adminCourseInformation",
				function($http,$scope,$location,$anchorScroll,repeatServices,$rootScope){

	repeatServices.AllInstructors().then(function(response) {
    console.log(response.data);
    	$scope.allinstructors = response.data;
    });	
	
	repeatServices.getAllStudents().then(function(response) {
    console.log(response.data);
    	$scope.allstudents = response.data;
    });
	
	repeatServices.getAllArticles().then(function(response) {
		console.log(response.data);
		$scope.allarticles = response.data;
	});	
		
	
});	