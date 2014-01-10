'use strict';

/* jasmine specs for controllers go here */

describe('PillarsCtrl', function(){
	var scope, ctrl, $httpBackend;

  beforeEach(module('agfdApp'));

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
  	$httpBackend = _$httpBackend_;
  	$httpBackend.expectGET('model/pillars.json').
  		respond([{name: 'Taste'}, {name: 'Spirit'}]);
 
      scope = $rootScope.$new();
      ctrl = $controller('PillarsCtrl', {$scope: scope});
    }));

  it('should create "pillars" model with 2 pillars fetched from xhr', function() {
	  expect(scope.pillars).toBeUndefined();
	  $httpBackend.flush();
	 
	  expect(scope.pillars).toEqual([{name: 'Taste'},{name: 'Spirit'}]);
	});

});
