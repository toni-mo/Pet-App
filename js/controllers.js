angular.module('petApp.controllers', [])
	.controller('MainController', ['$scope', '$route', '$window', function($scope, $route, $window){
		
		$scope.route = $route;

	}])
	.controller('ContactController', ['$scope', function($scope){

		$scope.message = {};

		$scope.sendMessage = function(){
			alert("Message is successfuly sent!\n"+"email: "+$scope.message.email+"\n"+"text: "+$scope.message.text);
		};

	}]);