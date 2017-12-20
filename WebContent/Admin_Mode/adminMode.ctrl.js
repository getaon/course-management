angular.module('myApp').controller("adminMode",
			function($http,$scope,$location,$rootScope,repeatServices){
	
	$('#sideNav').show();
	$('#scrollerNav').hide();

	$('#header').show();
	$('#scroller').hide();
	
	$('#datepicker').show();
	$('#dateExp').hide();
	
	 repeatServices.AllInstructors().then(function(response){
		  $scope.allinstructors = response.data;
	  })
	  
	$scope.popUp = function(){
		$('#courseTitle').dialog({
	        autoOpen: true,
	        title: 'Set Course Name And Instructor'
	    });
	}
	 	$scope.courseEdit =function(index){
	 		$('#datepicker').hide();
	 		$('#dateExp').show();
		
	 		console.log($scope.Courses[index].id);
			
	 		repeatServices.selectedCource($scope.Courses[index].id)
			.then(function(response){
				
				
				$scope.courseEdit =  response.data;
				
				$rootScope.name = $scope.courseEdit.name;
				$rootScope.allinstructors = $scope.courseEdit.instructor.id;
				$rootScope.location = $scope.courseEdit.location;
				$rootScope.description = $scope.courseEdit.description;
				$rootScope.date = $scope.courseEdit.startdate;
				$rootScope.dateExpretion = $scope.courseEdit.startdate;
				$rootScope.alltags = $scope.courseEdit.tag.id;
				$rootScope.article = $scope.courseEdit.article;
	
			});
			
			$location.path('/CourseEdit');
		}			

		$scope.createCourse = function(){
			  repeatServices.createCourse($scope.name,$scope.instructor).then(function(response){
				  $rootScope.courseTitle = response.data;
			  })
			  
			  $('#courseTitle').dialog("destroy");
			$location.path('/createCourse');
		}
		$scope.currentPage = 0;
		    $scope.pageSize = 9;
		   
		    $scope.numberOfPages=function(){
		    	 repeatServices.AllCourses().then(function(response){
		   		  $scope.Courses  = response.data;		   		  
		    	});
		    		return Math.ceil($scope.Courses.length/$scope.pageSize); 
		    }
		$scope.remove = function(index){
			var confirm1 =confirm('Are you sure?');
			
			if(confirm1==true){					

				var course = $scope.Courses[index].id;
				
				repeatServices.removeCourse(course).then(function(response){
						var reply =response.data;
						console.log(reply);

						
						if(reply.id == 0){
							repeatServices.AllCourses().then(function(response){
								$rootScope.Courses = response.data;
							})
		
						}else{
							console.log("didnt removed");
						}
					});
				
			}
		}
		
		
		
});