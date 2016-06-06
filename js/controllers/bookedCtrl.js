angular.module("devmtnTravel")
	.controller('bookedCtrl', function($scope, mainSrv, $stateParams){
		
		var cities = mainSrv.travelInfo;
		console.log($stateParams);

		$scope.getCity = function(){
		for (var i = 0; i < cities.length; i++) {
			if(cities[i].id.toString() === $stateParams.id){
				$scope.city = cities[i];
			}
		}
		}
	});