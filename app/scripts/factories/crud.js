'use strict';

/**
* @ngdoc function
* @name gymApp.factory:crudFactory
* @description
* # Crud
* CRUD functionality
*/
angular.module('gymApp').factory('crud', function($http, $q, conf){
  return function(destination){
    return {
      create : function(customer){
        return $q(function(resolve, reject){
          $http.post(conf.host + destination, customer)
            .success(resolve)
            .error(reject);
        });
      },
      read : function(id, data){
        if(id){
          return $q(function(resolve, reject){
            $http.get(conf.host +  destination + '/' + id).success(resolve).error(reject);
          });
        }
        if(data && data.skip && data.limit){
          return $q(function(resolve, reject){
            $http.get(conf.host + destination + '/skip/' + data.skip + '/limit/' + data.limit).success(resolve).error(reject);
          });
        }
        if(data && data.place && data.day){
          return $q(function(resolve, reject){
            $http.get(conf.host + destination + '/place/' + data.place + '/day/' + data.day).success(resolve).error(reject);
          });
        }
        return $q(function(resolve, reject){
          $http.get(conf.host + destination + '/').success(resolve).error(reject);
        });
      },

      update: function(id, customerData){
        return $q(function(resolve, reject){
          $http.put(conf.host + destination + '/' + id, customerData)
            .success(resolve)
            .error(reject);
          });
      },
      delete: function(id){
        return $q(function(resolve, reject){
          $http.delete(conf.host + destination + '/' + id)
            .success(resolve)
            .error(reject);
        });
      }
    };
  };
});
