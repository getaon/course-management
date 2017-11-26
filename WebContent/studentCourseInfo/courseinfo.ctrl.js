angular.module('myApp').controller("CourseInfo",function($http,$scope,$location,$interval,$anchorScroll){
	
	$('#sideNav').hide();
	$('#scrollerNav').show();

	$('#header').hide();
	$('#scroller').show();
	

/*
 * גטהון עדיין עובד על זה 
 * 
 * 	console.log($scope.studentSelection.id + "<----- studentCourse id");
	$http.get("http://localhost/coursemanagementsystem/rest/studentCourse/studentCourseVerefiy?"
			+"id="+$scope.studentSelection.id
			+ "&userId="+userId).then(function(response){
				
				var reply = response.data;
		
    });
*/

	$scope.register = function(courseid){
		$http.get("http://localhost/coursemanagementsystem/rest/studentCourse/register?"
			+ "studentid="+userId
			+ "&courseid="+courseid).then(function(response){
				var registered = response.data;
				
				if(registered.id != null){
					$(".registertion").hide();
				}else{
					console.log("regestertion did not happend!");
					$(".registertion").show();
				}
			})
	}

});