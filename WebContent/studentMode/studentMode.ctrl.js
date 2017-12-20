var courseId;
angular.module("myApp").controller("studentMode",function($http,$scope,$location,$rootScope,repeatServices){
	
	$scope.courseInfo =function(index){
		
		if(usertype == "student"){
			repeatServices.getSelectedCource($scope.Courses[index].id)
					.then(function(response){
				$rootScope.studentSelection =  response.data;
				
			repeatServices.getScheduleByCourseId($scope.studentSelection.id)
			.then(function(response) {
					console.log(response.data);
					$rootScope.scheduleSelected = response.data;
				});	
			
				$location.path('/studentCourseInfo');
			});
			
		}else if(usertype == "instructor"){
			repeatServices.getSelectedCource($scope.Courses[index].id)
			.then(function(response){
				$rootScope.courseSelected = response.data;
		
				repeatServices.getArticleByCourse($scope.courseSelected.id)
						.then(function(response){
							$rootScope.presentationCourse = response.data;
				})
				
					console.log("$scope.courseSelected.id--->"+$scope.courseSelected.id);
				repeatServices.getScheduleByCourseId($scope.courseSelected.id)
						.then(function(response) {
								console.log(response.data);
							$rootScope.schedules = response.data;
				});	

			});	
				$location.path('/CourseInfo');
			}
		}
	

});
