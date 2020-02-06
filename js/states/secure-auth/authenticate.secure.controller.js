(function (){
  'use strict';

  angular
    .module('authenticatejs')
    .controller('authenticateSecureCtrl', control)

  control.$inject = [
    '$state'
  ]
  
  function control(
    $state
  ) {
    let vm = angular.extend(this, {

    });

    vm.done = function () {
      $state.go('list')
    }
  }
})()