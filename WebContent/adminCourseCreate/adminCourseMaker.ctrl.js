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
	
	$http.get("http://localhost/coursemanagementsystem/rest/student/getAllStudents")
    .then(function(response) {
    console.log(response.data);
    	$scope.allstudents = response.data;
    });

	$http.get("http://localhost/coursemanagementsystem/rest/article/getAllArticles")
	.then(function(response) {
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
		var date = $('#datepicker').datepicker({dateFormat: 'yy-mm-dd'}).val();
		$http.get("http://localhost/coursemanagementsystem/rest/course/addCourse?courseId="+$scope.courseTitle.id
				+"&description="+$scope.description
				+"&date="+date+"&location="+$scope.location
				+"&tag="+$scope.tag+"&syllabus="+$scope.syllabus+"&isactive=true")
		.then(function(response) {
			console.log(response.data);
			$rootScope.newcourse = response.data;
			console.log($rootScope.newcourse);
			
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