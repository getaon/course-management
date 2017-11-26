angular.module('myApp').controller("CourseInfo",
			function($http,$scope,$location,$interval,$anchorScroll,repeatServices){
	
	$('#sideNav').hide();
	$('#scrollerNav').show();

	$('#header').hide();
	$('#scroller').show();
	
	repeatServices.studentCourse($scope.studentSelection.id).then(function(response){
		var reply = response.data;
		
		console.log(reply);
		
		if(reply.length == 0){
			
			$scope.registertion = true;
		}else if(reply != null){
			$scope.hideRegistertion = true;
		}
	})
	


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