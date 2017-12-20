angular.module('myApp').controller("courseMaker",
			function($http,$scope,$rootScope,$location,$anchorScroll,repeatServices){
	
	$('#sideNav').hide();
	$('#scrollerNav').show();

	$('#header').hide();
	$('#scroller').show();
	
	  repeatServices.AllTags().then(function(response){
			$scope.alltags = response.data;
	  })
	  
	  repeatServices.AllInstructors().then(function(response){
		  $scope.allinstructors = response.data;
	  })
	
	repeatServices.getAllStudents().then(function(response) {
    console.log(response.data);
    	$scope.allstudents = response.data;
    });

	  repeatServices.AllTags().then(function(response) {
		console.log(response.data);
		$scope.allarticles = response.data;
	});
	
	  $scope.createSchedule = function(){
			
			console.log($("#scheduleDatepicker").val());
			console.log($("#starthour").val());
			console.log($("#endhour").val());
			console.log($scope.courseTitle.id);
			
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
					
						console.log(response.data);
					$rootScope.newcourse = response.data;
					console.log($scope.newcourse);
		});
	}
	
	/*$scope.createArticle = function(){
		$http.get("http://localhost/coursemanagementsystem/rest/article/addArticle?name=program&presentation=&courseid=3
	*/
	
	$scope.add = function() {
	    var f = document.getElementById('file').files[0],
	        r = new FileReader();

	    r.onloadend = function(e) {
	      var data = e.target.result;
	      //send your binary data via $http or $resource or do anything else with it
	    }

	    r.readAsBinaryString(f);
	}
	
});	