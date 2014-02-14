'use strict';

var agfdApp = angular.module('agfdApp.controllers', []);

agfdApp.controller('AgfdCtrl', function($rootScope, $scope, $http, $location, $anchorScroll) {
	$http.get('data/pillars.json').success(function(data) {
		$scope.pillars = data;
	});

	$http.get('data/posts.json').success(function(data) {
		$scope.posts = data;
	});

	$http.get('data/users.json').success(function(data) {
		$scope.users = data;
	});

	$rootScope.loggedIn = false;
	$scope.logIn = function() {
		$rootScope.loggedIn = true;
	};
	$scope.logOut = function() {
		$rootScope.loggedIn = false;
	};

	$scope.open = false;
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
  $rootScope.selectTab = function ($index, view) {
    $scope.selectedIndex = $index;
    $scope.tabView = view;
  };

  $scope.toggleClass = function($event, className, toParent) {
		className = className || '';
		toParent ? angular.element($event.target).parent().toggleClass(className) : angular.element($event.target).toggleClass(className);
	};

	$scope.$on("$locationChangeStart", function(event, next, current) { 
		$scope.open = false;
		$anchorScroll();
	});

	$scope.scrollTo = function(ypos) {
     window.scrollTo(0,ypos);
  };

  $scope.location = $location;
  $scope.getUser = function () {
  	return ((($location.search()).u) ? ($location.search()).u : 0);
  };

  $scope.isMe = function(uid) {
  	var myID = 0; //scope variable or function to get your user ID;
  	return (uid == myID);
  }
});