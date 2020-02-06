(function () {

    "use strict";

    const module = angular.module("authenticatejs");
    
    module.service("credentialsSrvc", constructor);

    constructor.$inject = [];

    function constructor(
    ) {

        var service = {
            clientId: 'YOUR SPOTIFY CLIENT ID HERE',
            redirectShort: "http://localhost:5500/callback",
            redirectUri: "http://localhost:5500/callback.html", 
            scopes: "streaming, user-read-playback-state", 
            authServiceUri: "https://accounts.spotify.com/authorize", 
            internalRedirectUri: "http://localhost:5500/#/auth_secure",
            // you'll need to deploy a server which contacts Spotify to exchange a primary token, obtained from authServiceUri 
            
            // using your Spotify developer account's CLIENT SECRET 
            
            // you can find source code here: // https://github.com/aliceliveprojects/little_spot_authentication_server 
            // ONCE YOU HAVE ADDED THESE VALUES, DO NOT CHECK THIS FILE IN. 
            exchangeServiceUri: 'http://localhost:8000/spotify/exchange"',
            refreshServiceUri: 'http://localhost:8000/spotify/refresh',  
        };

        return service;

    }

})();
