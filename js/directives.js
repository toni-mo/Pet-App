angular.module('petApp.directives', [])
	.directive('sideBar', function(){
		return {
			restrict: 'AEC',
			replace: true,
			templateUrl: 'views/sidebar.html',
			link: function(scope, elem, attrs){

				scope.showSidebar = function(){
					scope.displayMenu = true;
				};
			}
		};
	})
	.directive('modalWindow', function($window){
		return{
			restrict: 'AEC',
			replace: true,
			templateUrl: 'views/modal.html',
			link: function(scope, elem, attrs){
				
				scope.acceptHelp = function(){
					
					$window.open('https://angularjs.org/', '_blank');
					scope.showModal = false;
				};

				scope.declineHelp = function(){

					scope.showModal = false;
					console.log('Help is not needed');
				};
			}
		};
	});