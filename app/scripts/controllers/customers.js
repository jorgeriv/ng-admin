'use strict';

/**
* @ngdoc function
* @name gymApp.controller:CustomersCtrl
* @description
* # CustomersCtrl
* Controller of the gymApp
*/
angular.module('gymApp')
.controller('CustomersCtrl', function ($scope, $location, $routeParams, crud) {
  $scope.customer = {};

  function init(){
    $scope.id = $routeParams.id;
    crud('customer').read($scope.id)
      .then(function(data){
        if($scope.id){
          $scope.customer = data;
          return;
        }
        $scope.users = data;
      },
      function(err){
        console.log(err);
      });
    crud('timetable').read().then(
      function(data){
        $scope.timetable = data;
      }
    );
    crud('place').read().then(
      function(places){
        $scope.places = places;
      }
    );
    $scope.classNo = [
      {name: '1 dia', value: 1},
      {name: '2 dias', value: 2},
      {name: '3 dias', value: 3},
      {name: '4 dias', value: 4},
      {name: '5 dias', value: 5},
      {name: '6 dias', value: 6}
    ];
    // To activate save button
    //$scope.required = [];
    //$scope.$watchCollection();
  }

  $scope.addCustomer = function(){
    console.log('Adding customer', $scope.customer);
    crud('customer').create($scope.customer)
      .then(function(data){
        $location.path('/usuarios/'+ data._id);
      },
      function(){
        //TODO: handle error
      });
  };

  $scope.delete = function(id, item){
    console.log('Deleting customer ', id);
    crud('customer').delete(id).then(function(){
      console.log('Customer deleted', item);
      var index = $scope.users.indexOf(item);
      $scope.users.splice(index, 1);
    }, function(){
      //TODO: handle error
    });
  };

  $scope.updateCustomer = function(){
    console.log('Updating customer', $scope.customer);
    crud('customer').update($scope.customer._id, $scope.customer).then(function(data){
      $location.path('/usuarios/'+ data._id);
    }, function(){
      //TODO: handle error
    });
  };

  init();

});
