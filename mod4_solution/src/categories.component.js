(function () {
    'use strict';

    var menuApp = angular.module('MenuApp');

    menuApp.component('categories', {
        templateUrl: 'src/templates/categories.template.html',
        bindings: {
            categories: '<'
        },
        controller: 'CategoriesListController'
    });

    function CategoriesListController() {
        var ctrl = this;
    }

    menuApp.controller('CategoriesListController', CategoriesListController);
})();