angular.module('myApp').controller("studentCourseInfo",function($http,$scope,$location,$interval,$anchorScroll){
	
	//scroller
	
	$scope.gotoGeneral = function(){
		  $location.hash('general');
	      $anchorScroll();
	}
	
	$scope.gotoSyllabus = function(){
		  $location.hash('syllabus');
	      $anchorScroll();
	}

	$scope.gotoSchedule = function(){
		  $location.hash('schedule');
	      $anchorScroll();
	}

	$scope.gotoPresentations = function(){
		  $location.hash('presentations');
	      $anchorScroll();
	}

	$scope.gotoMessage = function(){
		  $location.hash('message');
	      $anchorScroll();
	}
	
});