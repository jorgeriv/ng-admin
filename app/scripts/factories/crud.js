'use strict';

/**
* @ngdoc function
* @name gymApp.factory:crudFactory
* @description
* # Crud
* CRUD functionality
*/
angular.module('gymApp').factory('crud', function($http, $q, conf){
  var factory = {
    customer : {
      create : function(customer){
        return $q(function(resolve, reject){
          $http.post(conf.host + 'customer', customer)
            .success(resolve)
            .error(reject);
        });
      },
      read : function(id){
        if(id){
          return $q(function(resolve, reject){
            $http.get(conf.host + 'customer/' + id).success(resolve).error(reject);
          });
        }
        return $q(function(resolve, reject){
          $http.get(conf.host + 'customer/').success(resolve).error(reject);
        });
      },
      update: function(id, customerData){
        return $q(function(resolve, reject){
          $http.put(conf.host + 'customer/'+id, customerData)
            .success(resolve)
            .error(reject);
          });
      },
      delete: function(id){
        return $q(function(resolve, reject){
          $http.delete(conf.host + 'customer/' + id)
            .success(resolve)
            .error(reject);
        });
      }
    }
  };

  return factory;
});
