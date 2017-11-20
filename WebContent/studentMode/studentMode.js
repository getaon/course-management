angular.module('myApp').controller("studentMode",function($http,$scope,$location){

	$("#course_list").show();

	$http.get("http://localhost/coursemanagementsystem/rest/course/getAllCourses")
		.then(function(response){
		$scope.studentCourses=response.data;
		courseId = $scope.studentCourses.id;
		console.log($scope.studentCourses);
		
	});
	
	$scope.courseInfo =function(index){
		console.log($scope.studentCourses[index].id);
		$http. get("http://localhost/coursemanagementsystem/rest/course/getSelectedCource?"
				+"id="+$scope.studentCourses[index].id)
		.then(function(response){
			$scope.courseSelected = response.data;
			console.log($scope.courseSelected);
			
			$location.path("/studentCourseInfo");
		});
	}			
	
	$scope.createCourse = function(){
		$(".sidemenu").hide();
		$("#headmenu").show();
		$("#course_list").hide();
		$(".courseUpdate").hide();
		$("#coursemaker").show();
		$("#login").hide();
		
	}
	
});
