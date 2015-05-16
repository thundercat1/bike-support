var app = angular.module("app", ["firebase", "ngRoute"]);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'homepage.html'
  })

  .when('/schedule', {
    templateUrl: 'schedule.html'
  })
  .otherwise({
    redirectTo: '/'
  })
}]);


app.controller("AppCtrl", function($scope, $firebaseObject, $http) {
  var appointments = new Firebase("https://bike-support.firebaseio.com/appointments");
  $scope.appointments = $firebaseObject(appointments);
  $scope.hello="Hello!";
  console.log($scope.hello);
  
});