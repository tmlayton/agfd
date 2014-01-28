#A Great! First Date

This is [agreatfirstdate.com](https://agreatfirstdate.com/)'s next product release. We are starting with Bootstrap 3, Angularjs using the [Angularjs Seed Project](https://github.com/angular/angular-seed/), Compass and SCSS that is a bit SMACSSish. We are considering a [MEAN](http://mean.io/) stack for the application, but for now will prototype with Angularjs and the provided Node.js web server, Karma for unit tests and the Angularjs baked-in end-to-end test runner. http://www.agreatfirstdate.com.php53-5.dfw1-2.websitetestlink.com/

##Todo

+ Refactor SCSS
  + Use Compass wherever possible
  + Move hardcoded values to variables
  + Refactor classes to objects and extend objects for edge cases

+ Angularjs
  + ~~Write directives for A, INPUT, SELECT, and [type='file'] to use fastbutton and perform default action~~
  + ~~Prototype application data using json files~~
  + Form validation and errors
  + General experience bugs, single-page app jumpiness and asynchronous loading
  + Build complex data sets in controller and pass to ngRepeat for simple filtering
  + Loading animations for profile tabs
  + Rebuild settings tab to have click-to-edit fields

+ [Build remaining front end](http://goo.gl/IeSVI6)
  + ~~Navigate through sign up~~
  + Not crazy about sign up responsive views, mobile profile view
  + Design pages view (FAQ, Privacy, Blog, etc)
  + Add tour to profile page after sign up
  + Add growl-ish notification
  + ~~DRY up sign up partials~~
  + Menu view for logged in