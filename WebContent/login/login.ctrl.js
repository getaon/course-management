angular.module("myApp").controller("login",
			function($http,$scope,$location,$rootScope,repeatServices){
	
	$scope.login = function(){
		
		repeatServices.login($scope.username,$scope.password)
			      .then(function(response) {
	     var fullUser = response.data;
		console.log(fullUser);
		userId = fullUser.id;
		usertype = fullUser.type;

	    console.log(userId);
	    console.log(usertype);
	    	
	    
	    	if(fullUser.username == "undefined"){	
				alert("pleas enter user name and password");
				
			}
	    	if(fullUser != null){
	    		 
				if(usertype == "student"){
					
					$("#layout").show();
					$("#sideNav").show();

					repeatServices.AllCourses().then(function(response){
						$rootScope.Courses = response.data;
					})
					
					repeatServices.getById(fullUser.id).then(function(response) {
			    	  $rootScope.loginName = response.data;
						    	  
  			        });
				    
			
						$location.path("/student");

				}else if(usertype == "instructor"){
					$("#layout").show();
					$("#sideNav").show();

					repeatServices.AllCourses().then(function(response){
						$rootScope.Courses = response.data;
					})
					
					repeatServices.getById(fullUser.id).then(function(response) {
			    	  $rootScope.loginName = response.data;
						    	  
  			        });

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