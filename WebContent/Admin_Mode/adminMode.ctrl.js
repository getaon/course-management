angular.module('myApp').controller("adminMode",function($http,$scope,$location,$rootScope){
		
	
	$('#sideNav').show();
		
	$http.get("http://localhost/coursemanagementsystem/rest/course/getAllCourses")
		.then(function(response){
		$scope.adminCourses=response.data;
		courseId = $scope.adminCourses.id;
		console.log($scope.adminCourses);
		
	});

	 $scope.myCourses = function(){
			$http.get("http://localhost/coursemanagementsystem/rest/course/getMyCourses?"
					+"user="+userId)
			.then(function(response){
				$scope.adminCourses = response.data;
				
			})
		}
	  
	 
		$scope.courseInfo =function(index){
			console.log($scope.adminCourses[index].id);
			$http. get("http://localhost/coursemanagementsystem/rest/course/getSelectedCource?"
					+"id="+$scope.adminCourses[index].id)
			.then(function(response){
				$scope.courseSelected = response.data;
				console.log($scope.courseSelected);
				$rootScope.courseSelected =  response.data;
				
				$location.path('/CourseInfo');
			});
		}			
		
		$scope.createCourse = function(){
			
			$location.path('/createCourse');
		}
	
		$scope.remove=function(index){
			var confirm1 =confirm('Are you sure?');
			
			if(confirm1==true){					
				var course = $scope.adminCourses[index].id;
				console.log(course);
				$http.get("http://localhost/coursemanagementsystem/rest/course/removeCourse?id="+course)
				.then(function(response){
					console.log(response.data);
						var response =response.data;
					
						$http.get("http://localhost/coursemanagementsystem/rest/Course/getAllCourses")
						.then(function(response){
							$scope.course = response.data;
							console.log($scope.course);
						});
						
				});
			}
		
		}
	
});