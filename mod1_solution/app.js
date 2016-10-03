(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.input = '';
        $scope.getLength = function () {
            if ($scope.input.length != 0) {
                var inputArr = $scope.input.split(',');
                if (inputArr.length < 4) {
                    $scope.message = 'Enjoy!';
                }
                else {
                    $scope.message = 'Too much!';
                }
            }
            else {
                $scope.message = 'Please enter data first';
            }
        }
    }
})();
