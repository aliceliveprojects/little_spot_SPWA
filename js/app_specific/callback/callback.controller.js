(function (){
  'use strict';

  const module = angular.module('callback', []);
  module.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('callback', {
        cache: false,
        url: '/callback',
        templateUrl: 'js/app_specific/callback/callback.html',
        controller: 'callbackCtrl as vm'
      });
    $urlRouterProvider.otherwise('/list');
  })

  angular
    .module('callback')
    .controller('callback', control)

  control.$inject = [
    '$state'
  ]

  function control(
    $state
  ) {
    let vm = angular.extend(this, {
    });
  }
})()