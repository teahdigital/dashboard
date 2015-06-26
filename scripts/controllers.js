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
  		var id = $routeParams.id;

		$http.get("http://localhost:8000/projects/"+id+"/").success(function(response) {
			$scope.projects = response;
		}); 

		$http.get("http://localhost:8000/clients/"+id+"/").success(function(response) {
			$scope.client = response;
		}); 

	}]);

}());