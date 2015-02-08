'use strict';

/**
* @ngdoc function
* @name gymApp.controller:SettingsCtrl
* @description
* # SettingsCtrl
* Controller of the gymApp
*/
angular.module('gymApp')
.controller('SettingsCtrl', function ($scope, $http, $location, $routeParams, conf) {
  $scope.customer = {};
  init();
  $scope.addCustomer = function(){
    console.log('Adding customer', $scope.customer);
    $http.post(conf.host + 'customer', $scope.customer).success(function(data){
      $location.path('/usuarios/'+ data._id)
    });
  }

  $scope.delete = function(id, item){
    console.log('Deleting customer');
    console.log(id);
    $http.delete(conf.host + 'customer/' + id).success(function(){
      console.log("Customer deleted", item);
      var index = $scope.users.indexOf(item)
      $scope.users.splice(index, 1);
    });
  }

  function init(){
    $scope.id = $routeParams.id;
    console.log("init", $scope.id);
    if($scope.id){
      $http.get(conf.host + 'customer/' + $scope.id).success(function(data){
        $scope.customer = data;
      });
    } else {
      $http.get(conf.host + 'customer').success(function(data){
        $scope.users = data;
      });
    }
  }
});
