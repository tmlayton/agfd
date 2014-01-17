'use strict';


// Declare app level module which depends on filters, and services
angular.module('agfdApp', [
  'ngRoute',
  'agfdApp.filters',
  'agfdApp.services',
  'agfdApp.directives',
  'agfdApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/pillars.html', controller: 'AgfdCtrl'});
  $routeProvider.when('/sign-up', {templateUrl: 'partials/sign-up.html', controller: 'AgfdCtrl'});
  $routeProvider.when('/photo', {templateUrl: 'partials/photo.html', controller: 'AgfdCtrl'});
  $routeProvider.when('/photo-edit', {templateUrl: 'partials/photo-edit.html', controller: 'AgfdCtrl'});
  $routeProvider.when('/faq', {templateUrl: 'partials/faq.html', controller: 'AgfdCtrl'});
  $routeProvider.when('/privacy', {templateUrl: 'partials/privacy.html', controller: 'AgfdCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
