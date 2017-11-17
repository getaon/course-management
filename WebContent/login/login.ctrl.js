angular.module('myApp').controller("login",function($http,$scope){
	
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
					$(".sidemenu").show();
					$(".sidemenu").show();
					
					if($scope.login.id != 0){
						
						$http.get("http://localhost/coursemanagementsystem/rest/course/getAllCourses")
							.then(function(response){
							$scope.studentCourses=response.data;
							courseId = $scope.studentCourses.id; 
							console.log($scope.studentCourses);
							
						});
						
						window.location = 'http://localhost/coursemanagementsystem/appMenu.html#!/student';
						
						
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
							window.location = 'http://localhost/coursemanagementsystem/appMenu.html#!/instructorCourse';	 						
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
		
	
});