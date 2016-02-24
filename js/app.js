'use strict';


// Declare app level module which depends on filters, and services
angular.module('agfdApp', [
  'ngRoute',
  'ngTouch',
  'agfdApp.filters',
  'agfdApp.services',
  'agfdApp.directives',
  'agfdApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  //sign up
  $routeProvider.when('/', {templateUrl: 'partials/sign-up/pillars.html', controller: 'AgfdCtrl'});
  $routeProvider.when('/sign-up', {templateUrl: 'partials/sign-up/facebook-or-email.html', controller: 'AgfdCtrl'});
  $routeProvider.when('/photo', {templateUrl: 'partials/sign-up/photo.html', controller: 'AgfdCtrl'});
  $routeProvider.when('/photo-edit', {templateUrl: 'partials/sign-up/photo-edit.html', controller: 'AgfdCtrl'});

  //log in
  $routeProvider.when('/log-in', {templateUrl: 'partials/log-in.html', controller: 'AgfdCtrl'});

  //profile
  $routeProvider.when('/profile', {templateUrl: 'partials/profile/profile.html', controller: 'AgfdCtrl'});

  //pages
  $routeProvider.when('/blog', {templateUrl: 'partials/pages/blog.html', controller: 'AgfdCtrl'});
  $routeProvider.when('/faq', {templateUrl: 'partials/pages/faq.html', controller: 'AgfdCtrl'});
  $routeProvider.when('/about', {templateUrl: 'partials/pages/about.html', controller: 'AgfdCtrl'});
  $routeProvider.when('/careers', {templateUrl: 'partials/pages/careers.html', controller: 'AgfdCtrl'});
  $routeProvider.when('/contact', {templateUrl: 'partials/pages/contact.html', controller: 'AgfdCtrl'});
  $routeProvider.when('/privacy', {templateUrl: 'partials/pages/privacy.html', controller: 'AgfdCtrl'});
  $routeProvider.when('/terms', {templateUrl: 'partials/pages/terms.html', controller: 'AgfdCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);