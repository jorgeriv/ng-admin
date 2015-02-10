'use strict';

/**
* @ngdoc function
* @name gymApp.controller:SettingsCtrl
* @description
* # SettingsCtrl
* Controller of the gymApp
*/
angular.module('gymApp')
.controller('SettingsCtrl', function ($scope, $location, $routeParams, $rootScope, crud, ngDialog) {

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

  $scope.deleteLocation = function(location){
    $scope.location = location;
    ngDialog.open({
        template: 'views/modals/delete.html',
        controller: 'ModalCtrl',
        scope: $scope
    });
  };

  $scope.editLocation = function(location){
    $scope.location = location;
    ngDialog.open({
        template: 'views/modals/edit.html',
        controller: 'ModalCtrl',
        scope: $scope
    });
  };

  $rootScope.$on('delete-location', function(location){
    var index = $scope.places.indexOf(location);
    $scope.places.splice(index, 1);
  });

  init();
});
