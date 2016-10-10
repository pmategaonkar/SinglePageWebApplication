(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function ToBuyController($scope, ShoppingListCheckOffService) {
        var vm = this;

        vm.ItemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

        vm.MarkItemAsBought = function (itemIndex) {
            ShoppingListCheckOffService.markItemAsBought(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
        var vm = this;

        vm.ItemsBought = ShoppingListCheckOffService.itemsAlreadyBought;
    }

    function ShoppingListCheckOffService() {
        var service = this;
        var itemsToBuy = [
            { name: "cookies", quantity: 10 },
            { name: "chips", quantity: 5 },
            { name: "cakes", quantity: 3 },
            { name: "apples", quantity: 7 },
            { name: "bananas", quantity: 12 }
        ];

        var itemsAlreadyBought = [];

        service.getItemsToBuy = function () {
            return itemsToBuy;
        }

        service.itemsAlreadyBought = itemsAlreadyBought;


        service.markItemAsBought = function (itemIndex) {
            var item = itemsToBuy[itemIndex];
            itemsToBuy.splice(itemIndex, 1);
            itemsAlreadyBought.push(item);
        }
    }
})();