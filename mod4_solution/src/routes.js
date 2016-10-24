(function () {
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'src/templates/home.template.html'
        })
        .state('categories', {
            url: '/categories',
            templateUrl: 'src/templates/categoryList.template.html',
            controller: 'CategoriesController as ctrl',
            resolve: {
                categories: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })
        .state('items', {
            url: '/categories/{categoryShortName}/items',
            templateUrl: 'src/templates/itemList.template.html',
            controller: 'ItemsController as ctrl',
            resolve: {
                items: ['$stateParams', 'MenuDataService', function ($stateParams, menuDataService) {
                    var categoryShortName = $stateParams['categoryShortName'];
                    return menuDataService.getItemsForCategory(categoryShortName);
                }]
            }
        })
        .state('items.detail', {
            url: '/{itemId}/details',
            template: '<item-details item="ctrl.item"></item-details>',
            controller: 'ItemDetailsController as ctrl'
        }
            );
    }

})();
