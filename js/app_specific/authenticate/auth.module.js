(function (){
  'use strict';

  const module = angular.module('authenticatejs', [])
  module.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state('auth_intro', {
        cache: false,
        url: '/auth_intro',
        templateUrl: 'js/app_specific/authenticate/authenticate.intro.html',
        controller: 'authenticateIntroCtrl as vm'
      })
      .state('auth_secure', {
        cache:false,
        url: '/auth_secure',
        templateUrl: 'js/app_specific/authenticate/authenticate.secure.html',
        controller: 'authenticateSecureCtrl as vm'
      });
    $urlRouterProvider.otherwise('/list');
  })
})();