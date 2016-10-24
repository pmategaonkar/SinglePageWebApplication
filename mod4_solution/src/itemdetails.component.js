(function () {
    'use strict';

    var menuApp = angular.module('MenuApp');

    menuApp.component('itemDetails', {
        templateUrl: 'src/templates/item.details.template.html',
        bindings: {
            item: '<'
        },
        controller: 'ItemsDetailsController'
    });

    function ItemsDetailsController() {
        var ctrl = this;
    }

    menuApp.controller('ItemsDetailsController', ItemsDetailsController);

})();