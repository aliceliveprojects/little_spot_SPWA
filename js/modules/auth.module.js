(function (){
  'use strict';

  const module = angular.module('authenticatejs', [])
  module.config(function($stateProvider){
    $stateProvider
      .state('auth_intro', {
        cache: false,
        url: '/auth_intro',
        templateUrl: 'js/states/intro-auth/authenticate.intro.html',
        controller: 'authenticateIntroCtrl as vm'
      })
      .state('auth_secure', {
        cache:false,
        url: '/auth_secure',
        templateUrl: 'js/states/secure-auth/authenticate.secure.html',
        controller: 'authenticateSecureCtrl as vm'
      });
  })
})();