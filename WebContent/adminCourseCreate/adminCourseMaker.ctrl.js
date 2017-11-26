angular.module('myApp').controller("courseMaker",
			function($http,$scope,$rootScope,$location,$anchorScroll,repeatServices){
	
	$('#sideNav').hide();
	$('#scrollerNav').show();

	$('#header').hide();
	$('#scroller').show();
	
	  repeatServices.AllTags().then(function(response){
			$scope.alltags = response.data;
	  })

	$http.get("http://localhost/coursemanagementsystem/rest/instructor/getAllInstructors")
    .then(function(response) {
    console.log(response.data);
    	$scope.allinstructors = response.data;
    });	
	
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
	
	$scope.rows = [];

    $scope.addDynamically = function() {

      $scope.rows.push({

        pick: false,

        date: "",

        datePlaceholder: "Date",

        startPlaceholder: "Start Hour",
        
        endPlaceholder: "End Hour",

        start: "",
        
        end: ""

      });

    };

	
	
	$scope.create = function(){
		var date = $('#datepicker').datepicker({dateFormat: 'yy-mm-dd'}).val();
		$http.get("http://localhost/coursemanagementsystem/rest/course/addCourse?name="+$scope.name
				+"&instructorid="+$scope.instructor
				+"&description="+$scope.description
				+"&date="+date+"&location="+$scope.location
				+"&tag="+$scope.tag+"&article=1&syllabus="+$scope.syllabus+"&isactive=true")
		.then(function(response) {
			console.log(response.data);
			$scope.newcourse = response.data;
			console.log($scope.newcourse);
			
			console.log($("#scheduleDatepicker").val());
			console.log($scope.starthour);
			console.log($scope.endhour);
			console.log($scope.newcourse.id);
			
			$http.get("http://localhost/coursemanagementsystem/rest/schedule/addSchedule?"
					+ "date="+$("#scheduleDatepicker").val()
					+ "&starthour="+$("#starthour").val()
					+ "&endhour="+$("#endhour").val()
					+ "&courseid="+$scope.newcourse.id)
			.then(function(response){
				$scope.newschedule = response.data;
				console.log($scope.newschedule);
			});
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