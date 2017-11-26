angular.module('myApp').controller("adminCourseInformation",
				function($http,$scope,$location,$anchorScroll,repeatServices){

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
	
	repeatServices.instructorCourse($scope.courseSelected.id).then(function(response){
		var reply = response.data;

		if(reply != null){
			
			$scope.hideRegistertion = true;
		}else if(reply == null){
			$scope.registertion = true;
		}
	})

	$scope.register = function(courseid){
		$http.get("http://localhost/coursemanagementsystem/rest/courseInstructor/addCourseInstructor?"
			+ "instructorId="+userId
			+ "&courseId="+courseid).then(function(response){
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