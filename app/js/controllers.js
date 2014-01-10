'use strict';

var agfdApp = angular.module('agfdApp.controllers', []);

agfdApp.controller('AgfdCtrl', function($scope, $http) {
	$http.get('model/pillars.json').success(function(data) {
		$scope.pillars = data;
	});

	$scope.menuToggle = function() {
		$scope.open = !($scope.open);
	};

});