(function () {
  'use strict';

  angular
    .module('mainjs')
    .controller('detailCtrl', control);

  control.$inject = [
    '$state',
    'mainSrvc'
  ];

  function control(
    $state,
    mainSrvc
  ) {
    var vm = angular.extend(this, {
      detail: ""
    });


    vm.done = function () {
      mainSrvc.pauseItem();
      $state.go('update', { term: vm.term });
    }


    var item = mainSrvc.getItem();

    vm.detail = {
      name: item.name,
      album: item.album.name,
      image: item.album.images[0].url,
      artist: item.artists[0].name,
      uri: item.uri,
      id: item.id
    }
    vm.term = mainSrvc.getTerm();
    mainSrvc.playItem(item.uri);

  }
})();
