'use strict';

/**
* @ngdoc function
* @name gymApp.controller:ModalCtrl
* @description
* # ModalCtrl
* Controller of the gymApp
*/
angular.module('gymApp')
.controller('ModalCtrl', function ($scope, crud) {
  $scope.cancel = function(){
    $scope.closeThisDialog();
  };
  $scope.delete = function(id){
    crud('place').delete(id);
    $scope.closeThisDialog();
  };
});
