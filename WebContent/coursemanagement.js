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
		$http.get("http://localhost/coursemanagementsystem/rest/tag/getAllTags")
			.then(function(response){
				$rootScope.tags = response.data;
				console.log($scope.tags);
		});

		repeatServices.AllCourses().then(function(response){
				$rootScope.Courses = response.data;
		 })
		
		$scope.myCourses = function(){
			
			if(usertype == "student"){
				$http.get("http://localhost/coursemanagementsystem/rest/course/getMyCoursesStudent?"
						+"user="+userId)
				.then(function(response){
					$rootScope.Courses = response.data;
				})
				
			}else if(usertype == "instructor"){
				$http.get("http://localhost/coursemanagementsystem/rest/course/getMyCoursesInstructor?"
						+"user="+userId)
				.then(function(response){
					$rootScope.Courses = response.data;
				})
				
			}
		}
		
		$scope.courseInfo =function(index){
			
			if(usertype == "student"){
				$http. get("http://localhost/coursemanagementsystem/rest/course/getSelectedCource?"
						+"id="+$scope.Courses[index].id)
				.then(function(response){

					$rootScope.studentSelection =  response.data;
						
					$http.get("http://localhost/coursemanagementsystem/rest/schedule/getSchedule?id="+$scope.studentSelection.id)
					.then(function(response) {
						console.log(response.data);
						$rootScope.scheduleSelected = response.data;
					});	
					
					$location.path('/studentCourseInfo');
				});
				
			}else if(usertype == "instructor"){
				$http. get("http://localhost/coursemanagementsystem/rest/course/getSelectedCource?"
						+"id="+$scope.Courses[index].id)
				.then(function(response){
					console.log(response.data);
					$rootScope.courseSelected = response.data;
					$http. get("http://localhost/coursemanagementsystem/rest/article/getArticleByCourse?"	
							+"course="+$scope.courseSelected.id)
							.then(function(response){
					$rootScope.presentationCourse = response.data;
					
							})

					$http.get("http://localhost/coursemanagementsystem/rest/schedule/getSchedule?id="+$scope.courseSelected.id)
					.then(function(response) {
						$rootScope.schedules= response.data;
						console.log(schedules);


					});	


					$location.path('/CourseInfo');
				});
			}
			
		}			

	  
	    $scope.chooseTag = function(index){
			$http.get("http://localhost/coursemanagementsystem/rest/course/getCoursesByTag?tag="
					+$scope.tags[index].id)
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


	


				