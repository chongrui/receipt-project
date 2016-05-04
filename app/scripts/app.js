'use strict';

/**
 * @ngdoc overview
 * @name projReceiptApp
 * @description
 * # projReceiptApp
 *
 * Main module of the application.
 */
angular
  .module('projReceiptApp', [
    'restangular',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('/');
    RestangularProvider.setDefaultHttpFields({timeout: 10 * 1000});
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
