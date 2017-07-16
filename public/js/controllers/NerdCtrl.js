app.controller('NerdController', function($scope,$http) {

	$scope.tagline = 'Nothing beats a pocket protector!';

		$http({
		  method: 'GET',
		  url: 'http://localhost:3000/getUser',
		 headers: {
		   'Content-Type': 'application/json; charset=utf-8'
		 },
		}).then(function successCallback(response) {
		   console.log(response)
		  }, function errorCallback(response) {
		    
		  });




	$scope.addUser=function(userdata){
		console.log(userdata)
// Simple GET request example:
		$http({
		  method: 'POST',
		  url: 'http://localhost:3000/addUser',
		 headers: {
		   'Content-Type': 'application/json; charset=utf-8'
		 },
		 data: { data: userdata }
		}).then(function successCallback(response) {
		   console.log(response)
		  }, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });		
	}


});