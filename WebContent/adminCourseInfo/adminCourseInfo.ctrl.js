angular.module('myApp').controller("adminCourseInformation",function($http,$scope,$location,$anchorScroll){

	$('#sideNav').hide();
	$('#scrollerNav').show();

	$('#header').hide();
	$('#scroller').show();
	
	$http.get("http://localhost/coursemanagementsystem/rest/instructor/getAllInstructors")
    .then(function(response) {
    console.log(response.data);
    	$scope.allinstructors = response.data;
    });	
	
	$http.get("http://localhost/coursemanagementsystem/rest/student/getAllStudents")
    .then(function(response) {
    console.log(response.data);
    	$scope.allstudents = response.data;
    });
	
	$http.get("http://localhost/coursemanagementsystem/rest/article/getAllArticles")
	.then(function(response) {
		console.log(response.data);
		$scope.allarticles = response.data;
	});	
	
});	