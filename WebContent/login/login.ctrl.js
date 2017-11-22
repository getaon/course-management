angular.module("myApp").controller("login",function($http,$scope,$location,$rootScope){
	
	$scope.login = function(){
		   $http.get("http://localhost/coursemanagementsystem/rest/user/getFullUser?"
		   		   +"username="+$scope.username
		   		   +"&password="+$scope.password)
			      .then(function(response) {
	     var fullUser = response.data;
		console.log(fullUser);
		userId = fullUser.id;
	    usertype = fullUser.type;
	    $rootScope.loginName = fullUser.username; 
	    console.log(userId);
	    	
	    	if(fullUser.username == "undefined"){	
				alert("pleas enter user name and password");
				
			}
	    	if(fullUser != null){
			
				if(usertype == "student"){
					$("#layout").show();
					$("#sideNav").show();
			
						$location.path("/student");

				}else if(usertype == "instructor"){
					$("#layout").show();
					$("#sideNav").show();
					$location.path("/instructorCourse");

				}else if(usertype == "admin"){
		       			window.location = 'http://localhost/coursemanagementsystem/coursemaker/coursemaker.html';
				
				}else{
						alert("user name and password incorrect");
						
		 		 }
	    		} 
		      });
			}		
	
});