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
        date = typeof date === 'string' ? new Date(Date.parse(date)) : date;
        if(!(date instanceof Date)){
          var e = new Error('Date parameter is required');
          console.log(e);
          //throw(e);
        }
        return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
      }
    }
  };
});
