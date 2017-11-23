	var userId;
	var usertype;
var app = angular.module("myApp", ["ngRoute"]).controller("myCtrl",
			function($http,$scope,$location,$interval,$anchorScroll,$rootScope){

	
	$http.get("http://localhost/coursemanagementsystem/rest/tag/getAllTags")
	.then(function(response){
		$scope.tags = response.data;
		console.log($scope.tags);
	});
	
			$http.get("http://localhost/coursemanagementsystem/rest/course/getAllCourses")
			.then(function(response){
				$rootScope.studentCourses =response.data;
			courseId = $rootScope.studentCourses.id;
			console.log($rootScope.studentCourses);
			
		});
		
		 $scope.myCourses = function(){
				$http.get("http://localhost/coursemanagementsystem/rest/course/getMyCourses?"
						+"user="+userId)
				.then(function(response){
					$rootScope.studentCourses = response.data;
					
				})
		}
		  
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
	  
	  $scope.openNav = function () {
		    var x = document.getElementById("navDemo");
		    if (x.className.indexOf("w3-show") == -1) {
		        x.className += " w3-show";
		    } else { 
		        x.className = x.className.replace(" w3-show", "");
		    }
	   }
		
	
});


	


				