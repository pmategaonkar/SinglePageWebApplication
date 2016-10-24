(function () {
    'use strict';

    var menuApp = angular.module('MenuApp');

    menuApp.component('items', {
        templateUrl: 'src/templates/items.template.html',
        bindings: {
            items: '<'
        },
        controller: 'ItemsListController'
    });

    function ItemsListController() {
        var ctrl = this;
    }

    menuApp.controller('ItemsListController', ItemsListController);

})();