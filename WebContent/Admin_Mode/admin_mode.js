
var app = angular.module("myApp", ["ngRoute"]);

app.controller("instructorCourse",function($scope,$http){
	$http. get("http://localhost:8080/coursemanagementsystem/rest/Course/getAllCourses")
	.then(function(response){
		$scope.course=response.data;
		
	});
	
	
	$scope.remove=function(index){
		var confirm1 =confirm('Are you sure?');
		
		if(confirm1==true){					
			var course = $scope.course[index];
			$http.get("http://localhost:8080/coursemanagementsystem/rest/Course/updateCourse?"
					+"id="+course.id
					+"&name="+course.name
					+"&instructor="+course.instructor
					+"&description="+course.description
					+"&date"+course.date
					+"&location="+course.location
					+"&tag"+course.tag
					+"&articles="+course.articles
					+"&isactive=0")
			.then(function(response){
				console.log(response.data);
					var response =response.data;
				
					$http.get("http://localhost:8080/coursemanagementsystem/rest/Course/getAllCourses")
					.then(function(response){
						$scope.course = response.data;
						console.log($scope.course);
					});
					
			});
		}
		
	};
	
	$scope.editCourse=function(index){
/*		var index = getSelectedIndex(index);
*/		var a = $scope.course[index];
		
		$("#dialog").dialog({
			autoOpen: true,
		});		
		
		$scope.id = a.id;
		$scope.name = a.name;
		$scope.instructorCourse = a.instructor.id;
		$scope.description = a.description;
		$scope.date = a.date;
		$scope.location = a.location;
		$scope.tagid = a.tag.id;
		$scope.articles = a.articles;
		$scope.isactive = a.isactive;
		
		$http.get("http://localhost:8080/coursemanagementsystem/rest/Tag/getAllTag")
		.then(function(response){
			$scope.tag = response.data;
			console.log($scope.tag);
		});
		
		$scope.edit=function () {
			$http.get("http://localhost:8080/coursemanagementsystem/rest/Course/updateCourse?id="+$scope.id
					+"&name="+$scope.name
					+"&instructorid="+$scope.instructorCourse
					+"&description="+$scope.description
					+"&date="+ $("#date").val()
					+"&location="+$scope.location
					+"&tag="+$scope.tagid
					+"&articles="+$scope.articles+
					"&isactive="+$scope.isactive)
			.then(function(response) {
				var response = response.data;
				if(response.msg=="ok"){
					$http.get("http://localhost:8080/coursemanagementsystem/rest/Course/getAllCourses")
					.then(function(response){
						$scope.course = response.data;
						console.log($scope.course);
					});
					
					$scope.name ='';
					$scope.instructorCourse ='';
					$scope.description ='';
					$scope.date ='';
					$scope.location ='';
					$scope.tagid ='';
					$scope.articles ='';
					$scope.isactive ='';
				}else{
					alert("its not update !!")
				}
			});
		}
		function getSelectedIndex(id){
			for(var i=0; i<$scope.course.length; i++)
				if($scope.course[i].id==id)
					return id;
				return -1;	
		};
			
	}
	
	$http.get("http://localhost:8080/coursemanagementsystem/rest/Instructor/getAllInstructors")
	.then(function(response){
		$scope.instructor = response.data;
		console.log($scope.instructor);
	});
});