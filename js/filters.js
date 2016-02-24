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

agfdApp.filter('truncate', function() {
  return function(text, length, end) {
    if (isNaN(length))
      length = 10;

    if (end === undefined)
      end = "...";

    if (text.length <= length || text.length - end.length <= length) {
      return text;
    }
    else {
      return String(text).substring(0, length-end.length) + end;
    }
  };
});