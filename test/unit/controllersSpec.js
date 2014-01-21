'use strict';

/* jasmine specs for controllers go here */

describe('AgfdCtrl', function(){
	var scope, ctrl, $httpBackend;

  beforeEach(module('agfdApp'));

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
  	$httpBackend = _$httpBackend_;
  	$httpBackend.expectGET('data/pillars.json').respond([{name: 'Taste'}, {name: 'Spirit'}]);
    $httpBackend.expectGET('data/posts.json').respond([{pillar: 'Taste'}, {pillar: 'Spirit'}]);
    $httpBackend.expectGET('data/users.json').respond([{firstname: 'Tim'}, {firstname: 'Rory'}]);
 
    scope = $rootScope.$new();
    ctrl = $controller('AgfdCtrl', {$scope: scope});
  }));

  it('should create "pillars" model with 2 pillars fetched from xhr', function() {
	  expect(scope.pillars).toBeUndefined();
	  $httpBackend.flush();
	 
	  expect(scope.pillars).toEqual([{name: 'Taste'},{name: 'Spirit'}]);
	});

});