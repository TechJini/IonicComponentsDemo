// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })
    .state('app.edittext', {
      url: "/edittext",
      views: {
        'menuContent' :{
          templateUrl: "templates/edittext.html",
          controller: 'EditCtrl'
        }
      }
    })
    .state('app.switches', {
      url: "/switches",
      views: {
        'menuContent' :{
          templateUrl: "templates/switches.html",
          controller: 'SwitchCtrl'
        }
      }
    })
    .state('app.seekbar', {
      url: "/seekbar",
      views: {
        'menuContent' :{
          templateUrl: "templates/seekbar.html",
          controller: 'SeekBarCtrl'
        }
      }
    })
    .state('app.radiogroup', {
      url: "/radiogroup",
      views: {
        'menuContent' :{
          templateUrl: "templates/radiogroup.html",
          controller: 'RadioCtrl'
        }
      }
    })
    .state('app.button', {
      url: "/button",
      views: {
        'menuContent' :{
          templateUrl: "templates/button.html"
        }
      }
    })
    .state('app.checkbox', {
      url: "/checkbox",
      views: {
        'menuContent' :{
          templateUrl: "templates/checkbox.html",
          controller: 'CheckboxCtrl'
        }
      }
    })
    .state('app.spinner', {
      url: "/spinner",
      views: {
        'menuContent' :{
          templateUrl: "templates/spinner.html"
        }
      }
    })
    .state('app.tab', {
      url: "/tab",
      views: {
        'menuContent' :{
          templateUrl: "templates/tab.html"
        }
      }
    })
    .state('app.progressbar', {
      url: "/progressbar",
      views: {
        'menuContent' :{
          templateUrl: "templates/progressbar.html",
          controller: 'ProgressBarCtrl'
        }
      }
    })
    .state('app.dialogs', {
      url: "/dialogs",
      views: {
        'menuContent' :{
          templateUrl: "templates/dialogs.html",
          controller: 'DialogsCtrl'
        }
      }
    })
    .state('app.notyetimplemented', {
      url: "/notyetimplemented",
      views: {
        'menuContent' :{
          templateUrl: "templates/notyetimplemented.html"
        }
      }
    })
    .state('app.datepicker', {
      url: "/datepicker",
      views: {
        'menuContent' :{
          templateUrl: "templates/datepicker.html"
        }
      }
    })
    .state('app.list', {
      url: "/list",
      views: {
        'menuContent' :{
          templateUrl: "templates/listview.html",
          controller: 'ListViewCtrl'
        }
      }
    })

    .state('app.pulltorefresh', {
      url: "/list/pulltorefresh",
      views: {
        'menuContent' :{
          templateUrl: "templates/pulltorefresh.html",
          controller: 'PullToRefreshCtrl'
        }
      }
    })
    .state('app.sectionheaders', {
      url: "/list/sectionheaders",
      views: {
        'menuContent' :{
          templateUrl: "templates/sectionheaders.html",
          controller: 'SectionHeaderCtrl'
        }
      }
    })
    .state('app.searchbar', {
      url: "/list/searchbar",
      views: {
        'menuContent' :{
          templateUrl: "templates/searchbar.html",
          controller: 'SearchBarCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/list');
});

