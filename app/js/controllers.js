'use strict';

var agfdApp = angular.module('agfdApp.controllers', []);

agfdApp.controller('AgfdCtrl', function($scope, $http) {
	$http.get('model/pillars.json').success(function(data) {
		$scope.pillars = data;
	});

	$http.get('model/samples.json').success(function(data) {
		$scope.samples = data;
	});

	$scope.menuToggle = function() {
		$scope.open = !($scope.open);
	};

	$scope.random = function(n){
    return parseInt(Math.random()*n);
	};
});