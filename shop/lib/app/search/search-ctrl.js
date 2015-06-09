(function () {

    'use strict';

    angular
        .module('prerender-shop')
        .controller('SearchCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {

            $scope.q = $stateParams.q;
            $scope.products = [];

            $http.get('/app/products.json').then(function(response) {
                for (var category in response.data) {
                    for (var i = 0; i < response.data[category].items.length; i++) {
                        response.data[category].items[i].category = category;
                        $scope.products.push(response.data[category].items[i]);
                    }
                }
            });

        }]);

})();
