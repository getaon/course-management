app.factory("repeatServices", function($http){
var response = {};
	
	
	response.AllCourses = function(){
		return $http.get("http://localhost/coursemanagementsystem/rest/course/getAllCourses");
	}
	
	return response;
});
