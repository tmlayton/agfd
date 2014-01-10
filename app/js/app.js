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
  $routeProvider.when('/', {templateUrl: 'partials/pillars.html', controller: 'Pillars'});
  $routeProvider.when('/sign-up', {templateUrl: 'partials/sign-up.html', controller: 'SignUp'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
