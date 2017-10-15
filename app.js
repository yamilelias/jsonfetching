angular.module('parentJSON', [])
  .controller('MyController', ['$scope', '$http', function($scope, $http){

    $scope.content = $scope.categories;
    $scope.data = [{sys_id: "c91425ae0f2d07005acc1d2be1050eda", title: "Accounting - Crude", parent: "1be2a16e0f2d07005acc1d2be1050e64"},
    {sys_id: "1d1465ae0f2d07005acc1d2be1050e37", title: "Accounting - Natural Gas", parent: "1be2a16e0f2d07005acc1d2be1050e64"},];

    $scope.getInformation = function(){
      $http({
        method: 'GET',
        url: 'data.json'
      }).then(function successCallback(response) {
          $scope.data = response;
        }, function errorCallback(response) {
        });
    };
  }]);
