angular.module('myApp').controller("adminCourseInformation",function($http,$scope,$location,$anchorScroll){

	$('#sideNav').hide();
	$('#scrollerNav').show();

	$('#header').hide();
	$('#scroller').show();
//scroller
	
	$scope.gotoGeneral = function(){
		  $location.hash('general');
	      $anchorScroll();
	}
	
	$scope.gotoSyllabus = function(){
		  $location.hash('syllabus');
	      $anchorScroll();
	}

	$scope.gotoSchedule = function(){
		  $location.hash('schedule');
	      $anchorScroll();
	}

	$scope.gotoPresentations = function(){
		  $location.hash('presentations');
	      $anchorScroll();
	}

	$scope.gotoMessage = function(){
		  $location.hash('message');
	      $anchorScroll();
	}
	
	
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
	
	$http.get("http://localhost/coursemanagementsystem/rest/tag/getAllTags")
	.then(function(response) {
		console.log(response.data);
		$scope.alltags = response.data;
	});	
	
	$http.get("http://localhost/coursemanagementsystem/rest/article/getAllArticles")
	.then(function(response) {
		console.log(response.data);
		$scope.allarticles = response.data;
	});	
	$scope.create = function(){
		var date = $('#datepicker').datepicker({dateFormat: 'yy-mm-dd'}).val();
		$http.get("http://localhost/coursemanagementsystem/rest/Course/addCourse?name="+$scope.name+"&instructorid="+$scope.instructor+"&description="+$scope.description+"&date="+date+"&location="+$scope.location+"&tag="+$scope.tag+"&article="+$scope.article+"&syllabus="+$scope.syllabus+"&isactive=true")
		.then(function(response) {
			console.log(response.data);
			$scope.newcourse = response.data;
			console.log($scope.newcourse);
		});
	}
	
	
});	