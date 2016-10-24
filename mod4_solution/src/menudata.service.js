(function () {
    'use strict';

    angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http', '$q'];
    function MenuDataService($http, $q) {

        var service = this;

        service.getAllCategories = function () {
            var deferred = $q.defer();
            var promise = $http.get('https://davids-restaurant.herokuapp.com/categories.json');
            promise.then(function (response) {
                deferred.resolve(response.data);
            }, function (error) {
                deferred.error(error);
            });

            return deferred.promise;
        }

        service.getItemsForCategory = function (categoryShortName) {
            var deferred = $q.defer();
            var promise = $http.get('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName);
            promise.then(function (response) {
                deferred.resolve(response.data);
            }, function (error) {
                deferred.error(error);
            });

            return deferred.promise;
        }
    }
})();