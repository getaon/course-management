angular.module('myApp').controller("settingsCtrl",
			function($scope,$location,$anchorScroll,repeatServices){
	
	  repeatServices.AllInstructors().then(function(response){
  		  $scope.instructors = response.data;
  	  })

	  repeatServices.AllTags().then(function(response){
			$scope.tags = response.data;
	  })

	  $scope.addInstructor = function (){
	 	  repeatServices.addInstructor($scope.instructor_name,$scope.instructor_last_name,  
	  			  $scope.instructor_email, $scope.instructor_phone,
	  			  $scope.instructor_user_name, $scope.instructor_password)
	  			  		.then(function(response){

	  			  repeatServices.AllInstructors().then(function(response){
			  		  $scope.instructors = response.data;
			  	  })

		  })
	  }
	  
	  $scope.addStudent = function (){
	 	  repeatServices.addStudent($scope.student_name,$scope.student_last_name,  
	  			  $scope.student_email, $scope.student_phone,
	  			  $scope.student_user_name, $scope.student_password)
	  			  		.then(function(response){
		  			$scope.newStudent = response.data;
  			  			
		  })
	  }

	  repeatServices.AllTags().then(function(response){
			$scope.tags = response.data;
	  })

	  $scope.addCategory = function(){
		  repeatServices.addTag($scope.category_name).then(function(response){
			  
			  repeatServices.AllTags().then(function(response){
					$scope.tags = response.data;
			  })
		  })
	  }
});

