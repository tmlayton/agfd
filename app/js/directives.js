'use strict';

/* Directives */

var agfdApp = angular.module('agfdApp.directives', []);

agfdApp.directive('appVersion', ['version', function(version) {
	return function(scope, elm, attrs) {
		elm.text(version);
	};
}]);

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

agfdApp.directive("clickToEdit", function() {
  var editorTemplate = '<div class="click-to-edit">' +
  '<div ng-hide="view.editorEnabled">' +
  '"{{value}}" ' +
  '<a ng-click="enableEditor()" class="btn btn-default btn-xs">Edit</a>' +
  '</div>' +
  '<div ng-show="view.editorEnabled">' +
  '<textarea ng-model="view.editableValue" class="form-control"></textarea>' +
  '<a ng-click="save()" class="btn btn-success btn-xs">Save</a>' +
  ' or ' +
  '<a ng-click="disableEditor()" class="btn btn-danger btn-xs">Cancel</a>.' +
  '</div>' +
  '</div>';

  return {
    restrict: "A",
    replace: true,
    template: editorTemplate,
    scope: {
      value: "=clickToEdit",
    },
    controller: function($scope) {
      $scope.view = {
        editableValue: $scope.value,
        editorEnabled: false
      };

      $scope.enableEditor = function() {
        $scope.view.editorEnabled = true;
        $scope.view.editableValue = $scope.value;
      };

      $scope.disableEditor = function() {
        $scope.view.editorEnabled = false;
      };

      $scope.save = function() {
        $scope.value = $scope.view.editableValue;
        $scope.disableEditor();
      };
    }
  };
});