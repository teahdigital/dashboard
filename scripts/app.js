(function(){
	'use strict';

	var app = angular.module('dashboard', []);

	app.controller('homeController', function($scope, $http){

		$http.get("data/projects.json").success(function(response) {
			$scope.projects = response;
		}); 

	});

	app.controller('navController', function($scope, $http){
		
		$http.get("data/clients.json").success(function(response) {
			$scope.clients = response;
		});

	});


})();