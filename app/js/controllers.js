'use strict';

var agfdApp = angular.module('agfdApp.controllers', []);

agfdApp.controller('AgfdCtrl', function($scope, $http) {
	$http.get('model/pillars.json').success(function(data) {
		$scope.pillars = data;
	});

	$scope.menuToggle = function() {
		$scope.open = !($scope.open);
	};

	$scope.goToURL = function(url, target) {
		target = target || "_self";
		if (target && target == "_blank")
			window.open(url);
		else
			window.location.href = url;
	};

	$scope.focus = function(e) {
		e.target.focus();
	};
});