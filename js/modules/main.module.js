(function () {
  'use strict';

  const module = angular.module('mainjs', []);
  module.config(function ($stateProvider) {
    $stateProvider
      .state('list', {
        cache: false,
        url: '/list',
        templateUrl: 'js/states/list-state/list.html',
        resolve: function ($location) {
          
        },
        controller: 'listCtrl as vm'
      })
      .state('update', {
        cache: false,
        url: '/update',
        templateUrl: 'js/states/update-state/update.html',
        controller: 'updateCtrl as vm',
        params: {
          'term': '',
          'itemId': ''
        }
      })
      .state('detail', {
        cache: false,
        url: '/detail',
        templateUrl: 'js/states/detail-state/detail.html',
        controller: 'detailCtrl as vm'
      });
  })
  
})();