
		var userId;
		var usertype;
		var courseId;
		var app = angular.module("myApp", []).controller("myCtrl",function($http,$scope,$location,$anchorScroll){
			
			
			$scope.gotoBottom = function(){
				  $location.hash('syllabus');

			      // call $anchorScroll()
			      $anchorScroll();
			}
			
			$scope.homeButton=function(){
				$("#login").hide();
				$(".sidemenu").show();
				$("#studentCourse").hide();
				$("#course_list").show();
				$(".div2").hide();
				$(".courseUpdate").hide();
				$("#pluseButton").hide();

			}
			
			$scope.logout=function(){
				$("#login").show();
				$(".sidemenu").hide();
				$("#course_list").hide();
				$("#studentCourse").hide();
				$("#course_list").hide();
				$(".div2").hide();
			}
			
			
			$scope.login = function(){
				   $http.get("http://localhost/coursemanagementsystem/rest/user/getFullUser?"
				   		   +"username="+$scope.username
				   		   +"&password="+$scope.password)
					      .then(function(response, $location) {
		 	     var fullUser = response.data;
		 		console.log(fullUser);
		 		userId = fullUser.id;
		 	    usertype = fullUser.type;
		 	    console.log(userId);
			    	
			    	if(fullUser.username == "undefined"){	
						alert("pleas enter user name and password");
						
					}else{
						if(fullUser != null){
		 				if(usertype == "student"){
		 					$("#headmenu").show();
		 					$("#course_list").show();
		 					$(".courseUpdate").hide();
		 					$("#login").hide();
		 					$("#plusButton").hide();
		 					$(".sidemenu").show();
		 					$(".sidemenu").show();
		 					
		 					if($scope.login.id != 0){
		 						
		 						$http.get("http://localhost/coursemanagementsystem/rest/course/getAllCourses")
		 							.then(function(response){
		 							$scope.studentCourses=response.data;
		 							courseId = $scope.studentCourses.id; 
		 							console.log($scope.studentCourses);
		 							
		 						});
		 						
		 						
		 						}

		 				}else
					        if(usertype == "instructor"){
					        	
					        	$("#headmenu").show();
					        	$(".sidemenu").show();
			 					$("#course_list").show();
			 					$(".courseUpdate").show();
			 					$("#login").hide();
			 					$(".sidemenu").show();
			 					
			 					if($scope.login.id != 0){
			 						
			 						
			 						$http.get("http://localhost/coursemanagementsystem/rest/course/getAllCourses")
			 							.then(function(response){
			 							$scope.studentCourses=response.data;
			 							courseId = $scope.studentCourses.id;
			 							console.log($scope.studentCourses);
			 							
			 						});
		 						}
			 					
					        }else
				       		 if(usertype == "admin"){
				       			window.location = 'http://localhost/coursemanagementsystem/coursemaker/coursemaker.html';
							}else{
								alert("user name and password incorrect");
								
								$("#forgetpassword").show();
					 		}
					 	}
					}		
				});	
			};
				
			$scope.courseInfo =function(index){
				console.log($scope.studentCourses[index].id);
				$http. get("http://localhost/coursemanagementsystem/rest/course/getSelectedCource?"
						+"id="+$scope.studentCourses[index].id)
				.then(function(response){
					$scope.courseSelected = response.data;
					console.log($scope.courseSelected);
				});
				
				$("#course_list").hide();
				$("#studentCourse").show();
				$(".sidemenu").hide();
				
	
			}	
				
			$scope.createCourse = function(){
				$(".sidemenu").hide();
				$("#headmenu").show();
				$("#course_list").hide();
				$(".courseUpdate").hide();
				$("#coursemaker").show();
				$("#login").hide();
				
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
		
		