angular.module('myApp').controller("CourseInfo",function($http,$scope,$location,$interval,$anchorScroll){
	
	$('#sideNav').hide();
	$('#scrollerNav').show();

	$('#header').hide();
	$('#scroller').show();

	$scope.register = function(courseid){
		$http.get("http://localhost/coursemanagementsystem/rest/studentCourse/register?"
					+ "studentid="+userId
					+ "courseid="+courseid).then(function(response){
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