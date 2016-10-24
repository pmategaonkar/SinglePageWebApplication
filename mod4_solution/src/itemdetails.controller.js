(function () {
    'use strict';

    angular.module('MenuApp')
    .controller('ItemDetailsController', ItemDetailsController);

    ItemDetailsController.$inject = ['$stateParams', 'items'];
    function ItemDetailsController($stateParams, items) {
        var ctrl = this;
        var itemId = $stateParams.itemId;
        var item = $.grep(items.menu_items, function (e) { return e.id == itemId; });
        ctrl.item = item[0];

    }

})();