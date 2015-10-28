'use strict';

/**
 * @ngdoc overview
 * @name redmartApp
 * @description
 * # redmartApp
 *
 * Main module of the application.
 */
angular
  .module('redmartApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/complaintsMain.html',
        controller: 'ComplaintsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
