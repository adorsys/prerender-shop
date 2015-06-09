(function () {

    'use strict';

    angular
        .module('prerender-shop')
        .controller('ProductsCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {

            $scope.category = $stateParams['category'];

            $http.get('/app/products.json').then(function(response) {
                $scope.products = response.data[$scope.category];
            });

        }]);

})();
