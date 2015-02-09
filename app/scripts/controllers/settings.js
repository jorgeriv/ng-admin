'use strict';

/**
* @ngdoc function
* @name gymApp.controller:SettingsCtrl
* @description
* # SettingsCtrl
* Controller of the gymApp
*/
angular.module('gymApp')
.controller('SettingsCtrl', function ($scope, $location, $routeParams, crud, ngDialog) {

  function init(){
    crud('place').read().then(function(data){
      $scope.places = data;
    }, function(){
      //TODO: handle error
    });
  }

  $scope.addPlace = function(){
    console.log('add place');
    if(!$scope.placeName && !$scope.capacity){
      console.log('Error: no place name or capacity set');
      return;
    }
    crud('place').create({
      name: $scope.placeName,
      capacity: $scope.capacity
    }).then(
      function(data){
        $scope.places.push(data);
        $scope.placeName = undefined;
        $scope.capacity = undefined;
      },
      function(){
        //TODO: handle error
      }
    );
  };

  $scope.deleteLocation = function(id){
    $scope.id = id;
    ngDialog.open({
        template: 'views/modals/delete.html',
        controller: 'ModalCtrl',
        scope: $scope
    });
  };

  $scope.editLocation = function(){
    ngDialog.open({
        template: 'views/modals/edit.html',
        controller: 'ModalCtrl'
    });
  };


  init();
});
