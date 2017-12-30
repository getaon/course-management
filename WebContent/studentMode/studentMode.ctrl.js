var courseId;
angular.module("myApp").controller("studentMode",function($http,$scope,$location,$rootScope,repeatServices){
	
	$scope.courseInfo =function(index){
		
			repeatServices.getSelectedCource($scope.Courses[index].id)
					.then(function(response){
				$rootScope.studentSelection =  response.data;
				
			repeatServices.getScheduleByCourseId($scope.studentSelection.id)
			.then(function(response) {
					console.log(response.data);
					$rootScope.scheduleSelected = response.data;
				});	
			
			});
			
	
	  $location.path('/studentCourseInfo');
	  
	}
	
	$scope.myCourses = function (){
		repeatServices.getMyCoursesStudent(userId)
				.then(function(response){
					
					$scope.studentCourses = response.data;
					console.log(response.data);
					
					$rootScope.Courses = $scope.studentCourses.courseid;
				})
	}
		
	

	/*	repeatServices.getSelectedCource($scope.Courses[index].id)
			.then(function(response){
				$rootScope.courseSelected = response.data;
		
				repeatServices.getArticleByCourse($scope.courseSelected.id)
						.then(function(response){
							$rootScope.presentationCourse = response.data;
				})
				
				repeatServices.getScheduleByCourseId($scope.courseSelected.id)
						.then(function(response) {
								console.log(response.data);
							$rootScope.schedules = response.data;
				});	

			});	*/
		
	

});
