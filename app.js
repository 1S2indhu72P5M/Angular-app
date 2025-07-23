(function (){
'use Strict';


  angular.module('myFirstApp', [])

  .controller('myFirstController',function($scope) {
       $scope.name = "sonu";
       $scope.sayHello = function () {
         return "Hello sonu!";
       };
  });
})();
