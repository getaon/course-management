angular.module('myApp').controller("adminCourseEdit",function($http,$scope,$location,$anchorScroll,repeatServices){
	
	$('#sideNav').hide();
	$('#view').css("width", "100%");
	
	
//scroller
	
	$scope.gotoGeneral = function(){
		  $location.hash('general');
	      $anchorScroll();
	}
	
	$scope.gotoSyllabus = function(){
		  $location.hash('syllabus');
	      $anchorScroll();
	}

	$scope.gotoSchedule = function(){
		  $location.hash('schedule');
	      $anchorScroll();
	}

	$scope.gotoPresentations = function(){
		  $location.hash('presentations');
	      $anchorScroll();
	}

	$scope.gotoMessage = function(){
		  $location.hash('message');
	      $anchorScroll();
	}
	
	repeatServices.AllTags().then(function(response){
		$scope.alltags = response.data;
	})
	
	repeatServices.AllInstructors().then(function(response) {
    console.log(response.data);
    	$scope.allinstructors = response.data;
    });	
	
	repeatServices.getAllStudents().then(function(response) {
		console.log(response.data);
    	$scope.allstudents = response.data;
    });

	repeatServices.getAllArticles().then(function(response) {
		console.log(response.data);
		$scope.allarticles = response.data;
	});
	
	
	$scope.edit = function(){
		
		repeatServices.updateCourse($scope.courseEdit.id,$scope.name,$scope.instructor,$scope.description,
				$('#datepicker').val(),$scope.location,$scope.tag)
					.then(function(response) {
					console.log(response.data);
					$scope.newcourse = response.data;
					console.log("newcourse---->"+$scope.newcourse);
					console.log("response.msg---->"+response.data.msg);
								
			if(response.data.msg=="ok"){
	    		$scope.courseEdit.name = $scope.name;
	    		$scope.courseEdit.instructor.id = $scope.instructor;
	    		$scope.courseEdit.location = $scope.location;
	    		$scope.courseEdit.description = $scope.description;
	    		$scope.courseEdit.startdate = $scope.date;
	    		$scope.courseEdit.tag.id = $scope.tag;
	    		$scope.courseEdit.article = $scope.article;
				
			 }else{
				 alert("The course was not updated!");
			 }
		});
		
	}
	
	
});	