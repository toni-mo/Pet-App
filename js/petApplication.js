angular.module('petApp', ['ngRoute', 'ngAnimate', 'petApp.controllers', 'petApp.directives'])
	.config(['$routeProvider', function($routeProvider){

		$routeProvider
			.when('/cats', {
				templateUrl: 'views/cats.html',
				activetab: 'cats',
			})
			.when('/dogs', {
				templateUrl: 'views/dogs.html',
				activetab: 'dogs'
			})
			.when('/horses', {
				templateUrl: 'views/horses.html',
				activetab: 'horses'
			})
			.when('/contact', {
				templateUrl: 'views/contact.html',
				activetab: 'contact',
				controller: 'ContactController'
			})
			.otherwise({
				redirectTo: '/cats'
			});

	}]);