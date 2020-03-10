(function () {

    angular
        .module('authenticatejs')
        .controller('authenticateIntroCtrl', control);

    control.$inject = [
        '$state',
        '$timeout',
        'authenticateSrvc',
        '$window'
    ];

    function control(
        $state,
        $timeout,
        authenticateSrvc,
        $window
    ) {

        var vm = angular.extend(this, {
        });

        vm.update = function () {
            vm.isLoggedIn = authenticateSrvc.isAuthenticated();
        }

        vm.login = function () {
            // wrapped in timeout, because use of Promises in authenticationSrvc causes 
            // 'somthing' to call vm.login twice on a single button click. (digest prob?)
            $timeout(function () {
                authenticateSrvc.authenticate().then(
                    update,
                    update
                );
            });

        }

        vm.logout = function () {
            authenticateSrvc.clear();
            const url = 'https://accounts.spotify.com/en/logout'
            const spotifyLogoutWindow = window.open(url, 'width=700,height=500,top=40,left=40')
            setTimeout(() => spotifyLogoutWindow.close(), 2000)
            vm.update();
            $state.go('list');
            alert("Logged out successfully.");
        }

        vm.goBack = function () {
            $state.go('list');
        }
    }
})();
