'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('agfd app', function() {

  beforeEach(function() {
    browser().navigateTo('/app/index.html');
  });


  it('should automatically render pillars when hash/fragment is empty', function() {
    expect(element('[ng-view] h1').text()).toMatch('Pick Your Pillars');
  });


  describe('pillars', function() {

    beforeEach(function() {
      browser().navigateTo('/app/index.html#/');
    });


    it('should render pillars when user navigates to /', function() {
      expect(element('[ng-view] h1').text()).toMatch('Pick Your Pillars');
    });

  });


  describe('sign up', function() {

    beforeEach(function() {
      browser().navigateTo('/app/index.html#/sign-up');
    });

    it('should render sign-up when user navigates to /sign-up', function() {
      expect(element('[ng-view] .btn-facebook').text()).toMatch('Sign Up Privately with Facebook');
    });

  });
});
