var app = angular.module('userProfiles');

app.controller('MainController', ['$scope','mainService', function($scope, mainService) {

	$scope.getUsers = function() {
		//$scope.users = mainService.getUsers();

		////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////
		//////// All we are doing here is calling the mainService.getUsers function, 
		//////// and saying that once we finish that function, THEN define $scope.users.
		////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////

		mainService.getUsers().then(function(response){
			$scope.users = response.data.data;
		});
	};


	$scope.getUsers();

}]);