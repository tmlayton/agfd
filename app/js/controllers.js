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
	$scope.tabs = [
		{
			name : "Feed",
			view : "feed.html"

		},
		{
			name : "Activity",
			view : "activity.html"

		},
		{
			name : "Photos",
			view : "photos.html"

		},
		{
			name : "Settings",
			view : "settings.html"

		}
	];

  $scope.selectedIndex = 0;
  $scope.selectTab = function ($index, view) {
    $scope.selectedIndex = $index;
    $scope.tabView = view;
  };

  $scope.toggleClass = function($event, className) {
		className = className || '';
		angular.element($event.target).parent().toggleClass(className);
	};
});