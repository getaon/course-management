var courseId;
angular.module("myApp").controller("studentMode",function($http,$scope,$location,$rootScope){
	
	$('#sideNav').show();
<<<<<<< HEAD
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
=======
	$('#scrollerNav').hide();

	$('#header').show();
	$('#scroller').hide();
>>>>>>> 9a9a37ec0e8226f590002a81ea5db79e756f4820

	
});
