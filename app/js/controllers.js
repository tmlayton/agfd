'use strict';

var agfdApp = angular.module('agfdApp.controllers', []);

agfdApp.controller('PillarsCtrl', function($scope, $http) {
	$http.get('model/pillars.json').success(function(data) {
		$scope.pillars = data;
	});
});