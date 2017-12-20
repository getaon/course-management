angular.module('myApp').controller("courseMaker",
			function($http,$scope,$rootScope,$location,$anchorScroll,repeatServices){
	
	  repeatServices.AllTags().then(function(response){
			$scope.alltags = response.data;
	  })
	  
	  repeatServices.AllInstructors().then(function(response){
		  $scope.allinstructors = response.data;
	  })
	
	$http.get("http://localhost/coursemanagementsystem/rest/student/getAllStudents")
    .then(function(response) {

    	$scope.allstudents = response.data;
    });

	$scope.createSchedule = function(){
			
			$http.get("http://localhost/coursemanagementsystem/rest/schedule/addSchedule?"
					+ "date="+$("#scheduleDatepicker").val()
					+ "&starthour="+$("#starthour").val()
					+ "&endhour="+$("#endhour").val()
					+ "&courseid="+$scope.courseTitle.id)
			.then(function(response){
				$scope.newSchedule= response.data;
				console.log($scope.newSchedule);
				

				
				  repeatServices.getScheduleByCourseId($scope.courseTitle.id).then(function(response){
						$scope.schedules= response.data;
				  })
				
				$('input[type=date]').val('');
				$('input[type=time]').val('');
			});
		}

	
	$scope.create = function(){
		repeatServices.addCourse($scope.courseTitle.id,$scope.description,$('#datepicker').val(),
				$scope.location,$scope.tag,$scope.syllabus)
					.then(function(response) {
					
					$rootScope.newcourse = response.data;
			
			  repeatServices.getScheduleByCourseId($scope.courseTitle.id).then(function(response){
					$scope.schedules= response.data;
			  })
			
			$('input[type=date]').val('');
			$('input[type=time]').val('');
	});
  }	
	
});	