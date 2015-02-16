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
      $scope.times = [];
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
    $scope.name = location.name;
    $scope.collection = 'places';
    $scope.item = location;
    ngDialog.open({
        template: 'views/modals/delete.html',
        controller: 'ModalCtrl',
        scope: $scope
    });
  };

  $scope.editLocation = function(location){
    $scope.location = {
      _id: location._id,
      name: location.name,
      capacity: location.capacity
    };
    $scope.oldLocation = location;
    ngDialog.open({
        template: 'views/modals/edit.html',
        controller: 'ModalCtrl',
        scope: $scope
    });
  };

  $scope.loadTimes = function(){
    console.log('loadTimes()', $scope.time);
    if(!$scope.time || !$scope.time.place || !$scope.time.day){
      return;
    }
    crud('timetable').read(null, $scope.time).then(function(doc){
      $scope.times = [];
      doc.forEach(function(time){
        $scope.times.push(time);
      });
    });
  };

  $scope.addTime = function(){
    console.log('add time');
    if($scope.time && $scope.time.place){
      console.log('pre-time->', $scope.time);
      crud('timetable').create($scope.time).then(function(doc){
        console.log('time ->', doc);
        $scope.times.push(doc);
      });
    }
  };

  $scope.deleteTime = function(schedule){
    $scope.name = schedule.from + ' ' + schedule.to;
    $scope.collection = 'times';
    $scope.item = schedule;
    ngDialog.open({
        template: 'views/modals/delete.html',
        controller: 'ModalCtrl',
        scope: $scope
    });
  };

  $scope.editTime = function(time){

  }

  $rootScope.$on('delete-item', function(e, item, collection){
    var index = $scope[collection].indexOf(item);
    $scope[collection].splice(index, 1);
  });

  $rootScope.$on('update-location', function(e, old, newer){
    var index = $scope.places.indexOf(old);
    $scope.places.splice(index, 1, newer);
  });

  init();
});
