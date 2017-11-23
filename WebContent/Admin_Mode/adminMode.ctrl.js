angular.module('myApp').controller("adminMode",function($http,$scope,$location,$rootScope){
		
	
	$('#sideNav').show();
	
	$('#datepicker').show();
	$('#dateExp').hide();
		
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
	  

	 	$scope.courseEdit =function(index){
	 		
	 		$('#datepicker').hide();
	 		$('#dateExp').show();
			/*function getSelectedIndex(id){
				for(var i=0; i<$scope.adminCourses.length; i++)
					if($scope.adminCourses[i].id==id)
						return i;
					return -1;	
			};*/
			
			console.log($scope.adminCourses[index].id);
			$http.get("http://localhost/coursemanagementsystem/rest/course/getSelectedCource?"
					+"id="+$scope.adminCourses[index].id)
			.then(function(response){
				$scope.courseSelected1 = response.data;
				console.log($scope.courseSelected1);
				$rootScope.courseSelected1 =  response.data;
				
				$scope.name = $scope.courseSelected1.name;
				$scope.allinstructors = $scope.courseSelected1.instructor.id;
				$scope.location = $scope.courseSelected1.location;
				$scope.description = $scope.courseSelected1.description;
				$scope.date = $scope.courseSelected1.startdate;
				$scope.dateExpretion = $scope.courseSelected1.startdate;
				$scope.alltags = $scope.courseSelected1.tag.id;
				$scope.article = $scope.courseSelected1.article;
				
				console.log("name--->"+$scope.name);
				console.log("instructor--->"+$scope.allinstructors);
				console.log("location--->"+$scope.location);
				console.log("description--->"+$scope.description);
				console.log("date--->"+$scope.date);
				console.log("tag--->"+$scope.alltags);
				console.log("article--->"+$scope.article);
				
				$location.path('/CourseEdit');
			});
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
					var response1 =response.data;
					console.log(response1);
					
						$http.get("http://localhost/coursemanagementsystem/rest/course/getAllCourses")
						.then(function(response){
							$scope.course = response.data;
							console.log($scope.course);
						});
						
				});
			}
		
		}
	
});