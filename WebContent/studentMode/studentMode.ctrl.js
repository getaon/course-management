var courseId;
angular.module("myApp").controller("studentMode",function($http,$scope,$location,$rootScope){
	
	$('#sideNav').show();

	/*
	$http.get("http://localhost/coursemanagementsystem/rest/course/getAllCourses")
		.then(function(response){
		$scope.studentCourses=response.data;
		courseId = $scope.studentCourses.id;
		console.log($scope.studentCourses);
		
	});
		
	 $scope.myCourses = function(){
			$http.get("http://localhost/coursemanagementsystem/rest/course/getMyCourses?"
					+"user="+userId)
			.then(function(response){
				$scope.studentCourses = response.data;
				
			})
	}
	  */

	$('#scrollerNav').hide();

	$('#header').show();
	$('#scroller').hide();


	
});
