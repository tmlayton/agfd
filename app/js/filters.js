'use strict';

/* Filters */

var agfdApp = angular.module('agfdApp.filters', []);

agfdApp.filter('interpolate', ['version', function(version) {
	return function(text) {
		return String(text).replace(/\%VERSION\%/mg, version);
	}
}]);