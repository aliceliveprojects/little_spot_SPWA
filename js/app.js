(function () {
  'use strict';

  const app = angular.module('starter', [
    'ui.router',
    'mainjs',
    'authenticatejs',
    'momentjs',
    'spotifyjs'
  ]);

  app.config(
    function (
      $locationProvider
    ) {
      $locationProvider.hashPrefix('');
      // Comment out the line below to run the app
      // without HTML5 mode (will use hashes in routes)
      $locationProvider.html5Mode(true);
    }
  );

  // app.run(function ($state, $rootScope, authenticateSrvc) {

  //   if (localStorage.getItem('isLoggedIn') === 'true') {
  //     authenticateSrvc.renewTokens();
  //   } else {
  //     // Handle the authentication
  //     // result in the hash
  //     authenticateSrvc.handleAuthentication();
  //   }
  // });

})();
