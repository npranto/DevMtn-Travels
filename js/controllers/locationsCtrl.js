angular.module("devmtnTravel")
	.controller('locationsCtrl', function($scope, mainSrv){
		$scope.cities = mainSrv.travelInfo;
	})