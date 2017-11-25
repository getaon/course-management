app.factory("repeatServices", function($http){
var response = {};


	 response.AllCourses = function(){
			return $http.get("http://localhost/coursemanagementsystem/rest/course/getAllCourses");
	}

	response.AllTags= function(){
		return 	$http.get("http://localhost/coursemanagementsystem/rest/tag/getAllTags");
	}
	
	return response;
});
