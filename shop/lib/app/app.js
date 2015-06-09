(function () {

    'use strict';

    angular.module('prerender-shop', [
        'ui.router'
    ]).run([ '$rootScope', '$state', function ($rootScope, $state) {
        $rootScope.$on('$stateChangeSuccess', function() {
            for (var key in $state.current.data) {
                var match = $state.current.data[key].match(/{(.*?)}/);
                if (match) {
                    $state.current.data[key] = $state.current.data[key].replace(match[0], $state.params[match[1]]);
                }
            }
            $rootScope.$state = $state;

        });
    }]);

})();