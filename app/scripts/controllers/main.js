'use strict';

/**
 * @ngdoc function
 * @name gymApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gymApp
 */
angular.module('gymApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
