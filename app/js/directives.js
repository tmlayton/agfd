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

 // To do - write directive handler for A, INPUT, SELECT to enable fast button and use default

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

agfdApp.directive('draggable', function($document) {
  return function(scope, element, attr) {
    var startX = 0, startY = 0, x = 0, y = 0;
    element.on('mousedown', function(event) {
      // Prevent default dragging of selected content
      event.preventDefault();
      startX = event.screenX - x;
      startY = event.screenY - y;
      $document.on('mousemove', mousemove);
      $document.on('mouseup', mouseup);
    });

    function mousemove(event) {
      y = event.screenY - startY;
      x = event.screenX - startX;
      element.css({
        top: y + 'px',
        left:  x + 'px'
      });
    }

    function mouseup() {
      $document.unbind('mousemove', mousemove);
      $document.unbind('mouseup', mouseup);
    }
  }
});