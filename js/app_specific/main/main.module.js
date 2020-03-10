(function () {
  'use strict';

  const module = angular.module('mainjs', []);
  module.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('list', {
        cache: false,
        url: '/list',
        templateUrl: 'js/app_specific/main/list.html',
        resolve: function ($location) {
          
        },
        controller: 'listCtrl as vm'
      })
      .state('update', {
        cache: false,
        url: '/update',
        templateUrl: 'js/app_specific/main/update.html',
        controller: 'updateCtrl as vm',
        params: {
          'term': '',
          'itemId': ''
        }
      })
      .state('detail', {
        cache: false,
        url: '/detail',
        templateUrl: 'js/app_specific/main/detail.html',
        controller: 'detailCtrl as vm'
      });
    $urlRouterProvider.otherwise('/list');
  })
  
})();