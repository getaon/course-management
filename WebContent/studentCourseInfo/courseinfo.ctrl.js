angular.module('myApp').controller("CourseInfo",
			function($http,$scope,$location,$interval,$anchorScroll,repeatServices){
	
	$scope.register = function(courseid){
		$http.get("http://localhost/coursemanagementsystem/rest/studentCourse/register?"
			+ "studentid="+userId
			+ "&courseid="+courseid).then(function(response){
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