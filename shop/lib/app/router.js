(function () {

    'use strict';

    angular.module('prerender-shop')
        .config(function($locationProvider, $stateProvider, $urlRouterProvider) {

        $locationProvider
            .html5Mode(false)
            .hashPrefix('!');

        $urlRouterProvider.otherwise('/start');

        $stateProvider.state('start', {
            url: '/start',
            templateUrl: '/app/start/start.html',
            controller: 'StartCtrl',
            data : {
                'title' : 'Willkommen | sysroda Shop',
                'description' : 'Herzlich Willkommen beim sysroda Shop - Der Shop für Holz, Wolle und Stahl'
            }
        }).state('products', {
            url: '/produkte/:category',
            templateUrl: '/app/products/products.html',
            controller: 'ProductsCtrl',
            data : {
                'title' : 'Unsere Kategorien | sysroda Shop',
                'description' : 'Finden sie unsere Produkte aus der Kategorie {category}'
            }
        }).state('product', {
            url: '/produkte/:category/:product',
            templateUrl: '/app/product/product.html',
            controller: 'ProductCtrl',
            data : {
                'title' : 'Unsere Produkte | sysroda Shop',
                'description' : 'Unschlagbar im Preis: {product}'
            }
        }).state('search', {
            url: '/suche?q',
            templateUrl: '/app/search/search.html',
            controller: 'SearchCtrl',
            data : {
                'title' : 'Suche | sysroda Shop',
                'description' : 'Super angebote für {q}'
            }
        }).state('imprint', {
            url: '/impressum',
            templateUrl: '/app/content/imprint.html',
            data : {
                'title' : 'Impressum | sysroda Shop',
                'description' : 'Impressum'
            }
        });

    });

})();