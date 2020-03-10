(function () {

    "use strict";

    const module = angular.module("authenticatejs");

    module.service("credentialsSrvc", constructor);

    constructor.$inject = [];

    function constructor(
    ) {

        var service = {
            clientId: "92e06e65050a4c64be6bfe39ec3fde21",
            redirectShort: "https://littlespotspwa.herokuapp.com/little_spot_SPWA/callback",
            redirectUri: "https://littlespotspwa.herokuapp.com/little_spot_SPWA/callback.html",
            internalRedirectUri: "https://littlespotspwa.herokuapp.com/little_spot_SPWA/auth-secure",
          // you'll need to deploy a server which contacts Spotify to exchange a primary token, obtained from authServiceUri 
          //using your Spotify developer account's CLIENT SECRET 
          //you can find source code here: https://github.com/aliceliveprojects/little_spot_authentication_server 
          // ONCE YOU HAVE ADDED THESE VALUES, DO NOT CHECK THIS FILE IN. 
            scopes: "streaming, user-read-playback-state, user-modify-playback-state",
            authServiceUri: "https://accounts.spotify.com/authorize",
            exchangeServiceUri: "https://littlespotapp.herokuapp.com:443/spotify/exchange",
            refreshServiceUri: "https://littlespotapp.herokuapp.com:443/spotify/refresh"
        };

        return service;

    }

})();