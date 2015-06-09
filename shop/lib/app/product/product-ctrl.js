(function () {

    'use strict';

    angular
        .module('prerender-shop')
        .controller('ProductCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {

            $http.get('/app/products.json').then(function(response) {
                var items = response.data[$stateParams['category']].items;
                for (var i = 0; i < items.length; i++) {
                    if (items[i].id === $stateParams['product']) {
                        $scope.product = items[i];
                    }
                }
            });

        }]);

})();
