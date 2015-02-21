'use strict';

/**
* @ngdoc function
* @name gymApp.factory:utilsFactory
* @description
* # Utilities
* Set of utilities
*/
angular.module('gymApp').factory('utils', function(){
  return {
    time: {
      dateToTimeString: function(date){
        date = date instanceof String ? Date.parse(date) : date;
        if(!(date instanceof Date)){
          var e = new Error('Date parameter is required');
          console.log(e);
          throw(e);
        }
        return date.getHour() + ':' + date.getMinutes() + ':' + date.getSeconds();
      }
    }
  };
});
