angular.module("myApp").controller("login",function($http,$scope,$location){
	
	$scope.login = function(){
		   $http.get("http://localhost/coursemanagementsystem/rest/user/getFullUser?"
		   		   +"username="+$scope.username
		   		   +"&password="+$scope.password)
			      .then(function(response) {
	     var fullUser = response.data;
		console.log(fullUser);
		userId = fullUser.id;
	    usertype = fullUser.type;
	    console.log(userId);
	    	
	    	if(fullUser.username == "undefined"){	
				alert("pleas enter user name and password");
				
			}else if(fullUser != null){
					$("#layout").show();
					$("#sideNav").show();
			}
				if(usertype == "student"){
						
						$location.path("/student");

				}else if(usertype == "instructor"){
					
					$location.path("/instructorCourse");

				}else if(usertype == "admin"){
		       			window.location = 'http://localhost/coursemanagementsystem/coursemaker/coursemaker.html';
				
				}else{
						alert("user name and password incorrect");
						
						$("#forgetpassword").show();
		 		}
			 	});
			}		
	
});