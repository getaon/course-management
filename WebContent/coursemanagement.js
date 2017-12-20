	var userId;
	var usertype;
var app = angular.module("myApp", ["ngRoute"]);
	
	app.controller("myCtrl",
		function($http,$scope,$location,$interval,$anchorScroll,$rootScope,repeatServices){

		$rootScope.gotoGeneral = function(){
			  $location.hash('CourseDetail');
			  $("#CourseDetail").css("style","margin-top: 100px;")
		      $anchorScroll();
		}
		
		$rootScope.gotoSyllabus = function(){
			  $location.hash('general');
			  $anchorScroll();
		}

		$rootScope.gotoSchedule = function(){
			  $location.hash('studentDescription');
		      $anchorScroll();
		}

		$rootScope.gotoPresentations = function(){
			$location.hash('syllabus');
		      $anchorScroll();
		}

		$rootScope.gotoMessage = function(){
			  $location.hash('message');
		      $anchorScroll();
		}
		
		$scope.setting = function(){

			$location.path("/settings");
		}
		
		repeatServices.AllTags().then(function(response){
				$rootScope.tags = response.data;
				console.log($scope.tags);
		});
		
		

		repeatServices.AllCourses().then(function(response){
				$rootScope.Courses = response.data;
		 })
		
		$scope.myCourses = function(){
			$("#myCourses").show();
			$("#Courses").hide();
			if(usertype == "student"){
				repeatServices.getMyCoursesStudent(userId).then(function(response){
					$rootScope.myCourses = response.data;
				})
				
			}else if(usertype == "instructor"){
				repeatServices.getMyCoursesInstructor(userId).then(function(response){
					$rootScope.myCourses  = response.data;
				})
				
			}
		}
	  
	    $scope.chooseTag = function(index){
			$("#myCourses").hide();
			$("#Courses").show();
	    	repeatServices.getCoursesByTag($scope.tags[index].id)
	    			.then(function(response){
				$rootScope.Courses = response.data;
			})
	     }
	
	  $scope.openNav = function () {
		    var x = document.getElementById("navDemo");
		    if (x.className.indexOf("w3-show") == -1) {
		        x.className += " w3-show";
		    } else { 
		        x.className = x.className.replace(" w3-show", "");
		    }
	   }
	  
	  $scope.homeButton = function (){
			$("#myCourses").hide();
			$("#Courses").show();
		  if(usertype == "student"){
			  
			  repeatServices.AllCourses().then(function(response){
					$rootScope.Courses = response.data;
			  })
			  
			  $("#sideNav").show();
			  $location.path('/student');
			  
		  }else if(usertype == "instructor"){

				repeatServices.AllCourses().then(function(response){
					$rootScope.Courses = response.data;
				})

			  $("#sideNav").show();	
			  $location.path('/instructorCourse');
		  }
	  }

	  $scope.logout = function (){
		  $("#layout").hide();
		  $("#header").hide();
		  $("#scroller").hide();
		  $("#logout").hide();
		  
		  $location.path('/');
	  }
	
});



	


				