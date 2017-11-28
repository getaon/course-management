angular.module('myApp').controller("adminCourseInformation",
				function($http,$scope,$location,$anchorScroll,repeatServices,$rootScope){

	$('#sideNav').hide();
	$('#scrollerNav').show();

	$('#header').hide();
	$('#scroller').show();
	
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
		
/*	repeatServices.instructorCourse($scope.courseSelected.id,userId).then(function(response){
				var reply = response.data;

		if(reply != null){
			
			$scope.hideRegistertion = true;
		}else if(reply == null){
			$scope.registertion = true;
		}
	})*/

	$scope.register = function(courseid){
		
		repeatServices.registerCourse(userId,courseid)
		/*
		$http.get("http://localhost/coursemanagementsystem/rest/courseInstructor/addCourseInstructor?"
			+ "instructorId="+userId
			+ "&courseId="+courseid)*/.then(function(response){
				var registered = response.data;
				
				if(registered != null){
					$scope.hideRegistertion = true;
				}else{
					console.log("regestertion did not happend!");
					$scope.registertion = true;
				}
		})
	}

	
});	