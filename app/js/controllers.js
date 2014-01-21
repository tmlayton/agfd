'use strict';

var agfdApp = angular.module('agfdApp.controllers', []);

agfdApp.controller('AgfdCtrl', function($scope, $http) {
	$http.get('data/pillars.json').success(function(data) {
		$scope.pillars = data;
	});

	$http.get('data/posts.json').success(function(data) {
		$scope.posts = data;
	});

	$http.get('data/users.json').success(function(data) {
		$scope.users = data;
	});

	$scope.menuToggle = function() {
		$scope.open = !($scope.open);
	};

	$scope.random = function(n){
    return parseInt(Math.random()*n);
	};

	//Tabs
	$scope.tabs = ["Feed", "Activity", "Photos", "Settings"];
  $scope.selectedIndex = 0;
  $scope.itemClicked = function ($index) {
    $scope.selectedIndex = $index;
  };
});