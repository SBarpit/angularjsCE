(function(){
  'use strict';
  angular.module('myFirstApp',[])
  .controller('MyFirstController',function($scope){
    $scope.name="Arpit";
    $scope.sayHello=function(){
      return "Hello Arpit Srivastava";
    };
  });
})();
