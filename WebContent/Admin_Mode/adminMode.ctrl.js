angular.module('myApp').controller("adminMode",
			function($http,$scope,$location,$rootScope,repeatServices){
	
	$('#sideNav').show();
	$('#scrollerNav').hide();

	$('#header').show();
	$('#scroller').hide();
	
	$('#datepicker').show();
	$('#dateExp').hide();

	
	 	$scope.courseEdit =function(index){
	 		$('#datepicker').hide();
	 		$('#dateExp').show();
		
	 		console.log($scope.Courses[index].id);
			$http.get("http://localhost/coursemanagementsystem/rest/course/getSelectedCource?"
					+"id="+$scope.Courses[index].id)
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
			});
			
			$location.path('/CourseEdit');
		}			

		$scope.createCourse = function(){
			
			$location.path('/createCourse');
		}
	
		$scope.remove = function(index){
			var confirm1 =confirm('Are you sure?');
			
			if(confirm1==true){					

				var course = $scope.Courses[index].id;
					$http.get("http://localhost/coursemanagementsystem/rest/course/removeCourse?id="+course)
					.then(function(response){
						var reply =response.data;
						console.log(reply);

						
						if(reply.id == 0){
							repeatServices.AllCourses().then(function(response){
								$rootScope.Courses = response.data;
							})
		
						}else{
							console.log("didnt removed");
						}
					});
				
			}
		}
		
		
		
});