(function () {
  'use strict';
	
	angular.module('appControllers')

 	.controller('navController', function($scope, $http){
		
		$http.get("http://localhost:8000/clients").success(function(response) {
			$scope.clients = response;
		});

	})

	.controller('homeController', function($scope, $http){

		$http.get("http://localhost:8000/projects").success(function(response) {
			$scope.projects = response;
		}); 

	})
	
	.controller('clientController', ['$scope','$routeParams','$http', function($scope, $routeParams, $http) {
  		var slug = $routeParams.slug;

		$http.get("http://localhost:8000/projects/"+slug+"/").success(function(response) {
			$scope.projects = response;
		}); 

		$http.get("http://localhost:8000/client/"+slug+"/").success(function(response) {
			$scope.client = response;
		}); 

	}]);

}());