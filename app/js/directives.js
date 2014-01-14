'use strict';

/* Directives */

var agfdApp = angular.module('agfdApp.directives', []);

agfdApp.directive('appVersion', ['version', function(version) {
	return function(scope, elm, attrs) {
		elm.text(version);
	};
}]);

/**
 * @author Joe Gaudet - joe@learndot.com
 * @copyright  ©2012 Matygo Educational Incorporated operating as Learndot
 * @license  Licensed under MIT license (see LICENSE.md)
 */
agfdApp.directive('fastClick', function ($parse, Modernizr) {

  'use strict';

  return {
    restrict: 'A',

    link: function (scope, element, attrs) {
      
      var fn = $parse(attrs.fastClick);
      var canceled = false;

      var clickFunction = function (event) {
        if (!canceled) {
          scope.$apply(function () {
            fn(scope, {$event: event});
          });
        }
      };

      if (Modernizr.touch) {

        element.on('touchstart', function (event) {
        	canceled = false;
        });

        element.on('touchend', function (event) {
          event.stopPropagation();
          clickFunction(event);
        });

        element.on('touchmove', function (event) {
        	canceled = true;
        });
      }

      if (!Modernizr.touch) {
        element.on('click', function (event) {
          clickFunction(event);
        });
      }
    }
  };
});


agfdApp.provider('Modernizr', function () {

  'use strict';

  this.$get = function () {
    return Modernizr || {};
  };

});