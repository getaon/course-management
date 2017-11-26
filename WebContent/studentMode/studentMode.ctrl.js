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

		$scope.courseInfo =function(index){
			console.log($scope.studentCourses[index].id);
			$http. get("http://localhost/coursemanagementsystem/rest/course/getSelectedCource?"
					+"id="+$scope.studentCourses[index].id)
			.then(function(response){
				$scope.courseSelected = response.data;
				console.log($scope.courseSelected);
				
				$rootScope.studentSelection = response.data;
				
				$location.path('/studentCourseInfo');
			});
		}			
		
		$scope.createCourse = function(){
			$location.path('');
		}
	
});
