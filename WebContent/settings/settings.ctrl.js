angular.module('myApp').controller("settingsCtrl",
			function($scope,$location,$anchorScroll,repeatServices,$rootScope){

	$('#sideNav').hide();
	$('#scrollerNav').hide();
	$('#header').hide();
	$('#scroller').hide();
	
	repeatServices.courseArchive().then(function(response){
		$scope.courseArchive = response.data;
	})	

	$scope.unArchiveCourse = function (index){
		repeatServices.unArchiveCourse($scope.courseArchive[index].id)
					.then(function(response){
			
			repeatServices.courseArchive().then(function(response){
				$scope.courseArchive = response.data;
			})	

		})
	}
	
	 repeatServices.AllStudents().then(function(response){
	      $scope.students = response.data;
	  })
	  
	  repeatServices.AllInstructors().then(function(response){
  		  $scope.instructors = response.data;
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
	  
	  
	  
	  $rootScope.gotoAbout = function(){
		  $location.hash('Student_settingse');
		  $anchorScroll();
	}
	  $rootScope.gotoBlog = function(){
		  $location.hash('Instrustor_settingse');
		  $anchorScroll();
	}
	  $rootScope.gotoProjects = function(){
		  $location.hash('Category_settingse');
		  $anchorScroll();
	}
	  $rootScope.gotoContact = function(){
		  $location.hash('Archive_settingse');
		  $anchorScroll();
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
	 
	  $scope.editStudent = function(){
		  repeatServices.editStudent($scope.student_name,$scope.student_last_name,  
				  $scope.student_email, $scope.student_phone)
				  .then(function(response){
					  $scope.edit = response.data;
					  
				  })
	  }
	  
	  $scope.editInstructore = function(){
		  repeatServices.editInstructore($scope.instructor_name,$scope.instructor_last_name,  
				$scope.instructor_email, $scope.instructor_phone)
	  			.then(function(response){
	  			$scope.edit = response.data;
	  				  
	  			})
	  }

	  
});

