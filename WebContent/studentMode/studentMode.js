angular.module('myApp').controller("studentMode",function($http,$scope){

	$scope.courseInfo =function(index){
		console.log($scope.studentCourses[index].id);
		$http. get("http://localhost/coursemanagementsystem/rest/course/getSelectedCource?"
				+"id="+$scope.studentCourses[index].id)
		.then(function(response){
			$scope.courseSelected = response.data;
			console.log($scope.courseSelected);
		});
		
		$("#course_list").hide();
		$("#studentCourse").show();
		$(".sidemenu").hide();
		

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
