(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .controller('foundItemsDirectiveController', foundItemsDirectiveController)
    .service('MenuSearchService', MenuSearchService)
    .directive('itemsLoaderIndicator', itemsLoaderIndicator)
    .directive('foundItems', FoundItems);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var vm = this;
        vm.searchTerm = '';
        vm.found = [];
        vm.loadingData = false;
        vm.emptyInput = false;

        vm.removeItem = function (index) {
            vm.found.splice(index, 1);
        };

        vm.search = function () {
            vm.loadingData = true;
            if (vm.searchTerm = "") {
                vm.emptyInput = true;
                vm.loadingData = false;
            }
            else {
                var promise = MenuSearchService.getMatchedMenuItems(vm.searchTerm);
                promise.then(function (items) {
                    vm.loadingData = false;
                    vm.found = items;
                }, function (err) {
                    vm.loadingData = false;
                });
            }
        }
    }

    MenuSearchService.$inject = ['$http', '$q']
    function MenuSearchService($http, $q) {
        var service = this;
        var allItems = [];

        service.getMatchedMenuItems = function (searchItem) {
            var defer = $q.defer();

            var loadMenuDataPromise = loadDataFromServer();
            loadMenuDataPromise.then(function (data) {
                allItems = data.menu_items;
                var filteredList = filterItems(searchItem);
                defer.resolve(filteredList);
            });
            
            return defer.promise;
        }

        function loadDataFromServer() {
            var promise = $http.get('https://davids-restaurant.herokuapp.com/menu_items.json');
            return promise.then(function (response) {
                return response.data;
            }, function (error) {
                alert('Error loading menu!');
                return error;
            });
        }

        function filterItems(searchItem) {
            return allItems.filter(function (eachItem) {
                return eachItem.description.indexOf(searchItem) >= 0;
            });
        }
    }

    function FoundItems() {
        var ddo = {
            templateUrl: 'founditems.html',
            restrict: 'E',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            controller: foundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    };

    function itemsLoaderIndicator() {
        var ddo = {
            templateUrl: 'loader/itemsloaderindicator.template.html',
            restrict: 'E'
        }

        return ddo;
    }

    function foundItemsDirectiveController() {
        var ctrl = this;
    };
})();