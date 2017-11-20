
	var userId;
	var usertype;
	var courseId;
var app = angular.module("myApp", ["ngRoute"]).controller("myCtrl",
			function($http,$scope,$location,$interval,$anchorScroll){
		
		$scope.homeButton=function(){
			$("#headmenu").show();
			$(".sidemenu").show();
			
			if(usertype == "student"){
				$("#pluseButton").hide();

			}
			
			$location.path('/student');
		}
		
		$scope.logout=function(){
			$("#headmenu").hide();
			$(".sidemenu").hide();
			
			$location.path('/');
		}
		
		
		   $http.get("http://localhost/coursemanagementsystem/rest/tag/getAllTags")
			.then(function(response){
				$scope.tags = response.data;
				console.log($scope.tags);
		})
		
		$scope.myCourses = function(){
			$http. get("http://localhost/coursemanagementsystem/rest/course/getMyCourses?"
					+"user="+userId
					+"&usertype="+usertype)
			.then(function(response){
				$scope.studentCourses = response.data;
				
			})
		}
		
		$scope.Courses = function(index){
				console.log($scope.tags[index].id);
			$http. get("http://localhost/coursemanagementsystem/rest/course/getCoursesByTag?tag="
					+$scope.tags[index].id)
			.then(function(response){
				$scope.studentCourses = response.data;
				
			})
		}
		
	});
	
	