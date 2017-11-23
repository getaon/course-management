angular.module('myApp').controller("adminCourseEdit",function($http,$scope,$location,$anchorScroll){
	
	$('#sideNav').hide();
	$('#view').css("width", "100%");
	
	
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
	
	$scope.edit = function(){
		
		var date = $('#datepicker').datepicker({dateFormat: 'yy-mm-dd'}).val();
		$http.get("http://localhost/coursemanagementsystem/rest/course/updateCourse?id="+$scope.courseSelected1.id+"&name="+$scope.name+"&instructorid="+$scope.instructor+"&description="+$scope.description+"&date="+date+"&location="+$scope.location+"&tag="+$scope.tag+"&articles=test&isactive=true")
		.then(function(response) {
			console.log(response.data);
			$scope.newcourse = response.data;
			console.log($scope.newcourse);
			
			if(response.msg=="ok"){
	    		$scope.courseSelected1.name = $scope.name;
	    		$scope.courseSelected1.instructor = $scope.instructor;
	    		$scope.courseSelected1.location = $scope.location;
	    		$scope.courseSelected1.description = $scope.description;
	    		$scope.courseSelected1.date = $scope.date;
	    		$scope.courseSelected1.tag = $scope.tag;
	    		$scope.courseSelected1.article = $scope.article;
				
			 }else{
				 alert("The course was not updated!");
			 }
		});
		
	}
	
	
});	