	var userId;
	var usertype;
var app = angular.module("myApp", ["ngRoute"]).controller("myCtrl",
			function($http,$scope,$location,$interval,$anchorScroll,$rootScope){

	
	$http.get("http://localhost/coursemanagementsystem/rest/tag/getAllTags")
	.then(function(response){
		$scope.tags = response.data;
		console.log($scope.tags);
	});
	
	  $scope.chooseTag = function(index){
			console.log($scope.tags[index].id);

			$http.get("http://localhost/coursemanagementsystem/rest/course/getCoursesByTag?tag="
					+$scope.tags[index].id)
			.then(function(response){
				$scope.studentCourses = response.data;
				console.log($scope.studentCourses = response.data);

				$rootScope.studentCourses = response.data;
				
			})
	  }
	  
	  $scope.homeButton = function (){
		  if(usertype == "student"){
			  $("#sideNav").show();
			  $location.path('/student');
			  
		  }else if(usertype == "instructor"){
			  $("#sideNav").show();	
			  $location.path('/instructorCourse');
		  }
	  }
	  
	  $scope.logout = function (){
		  $("#layout").hide();
		  $("#sideNav").hide();
		  
		  $location.path('/');
		  
	  }
		
	
});


	


				