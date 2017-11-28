app.filter('course_list', function() {
	console.log("filter is working");
		return function(input, start) {
	        start = +start; //parse to int
	        return input.slice(start);
	    }
});
