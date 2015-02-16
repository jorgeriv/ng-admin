'use strict';

/**
* @ngdoc function
* @name gymApp.controller:ModalCtrl
* @description
* # ModalCtrl
* Controller of the gymApp
*/
angular.module('gymApp')
.controller('ModalCtrl', function ($scope, $rootScope, crud) {

  $scope.cancel = function(){
    $scope.closeThisDialog();
  };
  $scope.delete = function(){
    crud($scope.destination).delete($scope.item._id).then(function(){
      $rootScope.$emit('delete-item', $scope.item, $scope.collection);
    });
    $scope.closeThisDialog();
  };

  $scope.update = function(){
    crud('place').update($scope.location._id, $scope.location).then(function(newLocation){
      console.log('From modal.js', newLocation);
      $rootScope.$emit('update-location', $scope.oldLocation, newLocation);
      $scope.closeThisDialog();
    });
  };
});
