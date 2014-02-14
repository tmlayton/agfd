'use strict';

/* Filters */

var agfdApp = angular.module('agfdApp.filters', []);

agfdApp.filter('interpolate', ['version', function(version) {
	return function(text) {
		return String(text).replace(/\%VERSION\%/mg, version);
	}
}]);

agfdApp.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});

agfdApp.filter('abbr', function () {
	return function(input) {
		return input.substr(0,1) + ".";
  };
});