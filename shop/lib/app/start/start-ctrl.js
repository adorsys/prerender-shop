(function () {

    'use strict';

    angular
        .module('prerender-shop')
        .controller('StartCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {

            $http.get('/app/products.json').then(function(response) {
                $scope.content = response.data;
            });

            $scope.search = function() {
                $state.go('search', { 'q' : $scope.q });
            };

            $scope.imprint = function() {
                $state.go('imprint');
            };

        }]);

})();
