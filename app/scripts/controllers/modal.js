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
    var location = $scope.location;
    crud('place').delete(location._id).then(function(){
      $rootScope.$emit('delete-location', location);
    });
    $scope.closeThisDialog();
  };
});
