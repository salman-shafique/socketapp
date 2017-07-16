app.controller('MainController', ['socket','$scope',function(socket,$scope) {

	
	$scope.tagline = 'To the moon and back!';
	socket.emit('test','this is nre message');
	socket.on('receive-message',function(revMessage){
		console.log(revMessage)
	});	

}]);