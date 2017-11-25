var courseId;
angular.module("myApp").controller("studentMode",function($http,$scope,$location,$rootScope){
	
	$('#sideNav').show();
	$('#scrollerNav').hide();

	$('#header').show();
	$('#scroller').hide();
/*	
	console.log($scope.studentSelection.id + "<----- studentCourse id");
	$http.get("http://localhost/coursemanagementsystem/rest/studentCourse/getStudentCourseById?"
			+"id="+$scope.studentSelection.id).then(function(response){
				
				var reply = response.data;
				
		if(reply != null){
			$(".registertion").show();
		}		
    });*/
	
});
