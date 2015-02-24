'use strict';

/**
 * @ngdoc overview
 * @name gymApp
 * @description
 * # gymApp
 *
 * Main module of the application.
 */
angular
  .module('gymApp', [
    'ngAnimate',
    'ngCookies',
    'ngDialog',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'xeditable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/usuarios', {
        templateUrl: 'views/customers/index.html',
        controller: 'CustomersCtrl'
      })
      .when('/usuarios/agregar',{
        templateUrl: 'views/customers/add.html',
        controller:'CustomersCtrl'
      })
      .when('/usuarios/editar/:id',{
        templateUrl: 'views/customers/edit.html',
        controller:'CustomersCtrl'
      })
      .when('/usuarios/:id',{
        templateUrl: 'views/customers/view.html',
        controller:'CustomersCtrl'
      })
      .when('/asistencia',{
        templateUrl: 'views/attendance/index.html',
        controller:'AttendanceCtrl'
      })
      .when('/horario',{
        templateUrl: 'views/timetable/index.html',
        controller:'TimetableCtrl'
      })
      .when('/pago',{
        templateUrl: 'views/payments/index.html',
        controller:'PaymentsCtrl'
      })
      .when('/pago/:id',{
        templateUrl: 'views/payments/pay.html',
        controller:'PaymentsCtrl'
      })
      .when('/resumen',{
        templateUrl: 'views/summary/index.html',
        controller:'SummaryCtrl'
      })
      .when('/ajustes',{
        templateUrl: 'views/settings/index.html',
        controller:'SettingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function(editableOptions){
    editableOptions.theme = 'default';
  });
