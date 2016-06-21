

var app = angular.module('homepage',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'pages/home.html',
        controller : 'mainController'
    })
    .when('/#',{
      templateUrl: 'pages/home.html',
      controller : 'mainController'
    })
    .when('/about',{
        templateUrl : 'pages/about.html',
        controller : 'aboutController'
    })
    .when('/contact',{
        templateUrl : 'pages/contact.html',
        controller : 'contactController'
    })
    .when('/portfolio',{
        templateUrl : 'pages/portfolio.html',
        controller : 'portfolioController'
    })
    .when('/resume', {
        templateUrl : 'pages/resume.html',
        controller : 'resumeController'
    })
    .otherwise({
        redirectTo : '/'
    });
    //,$locationProvider
    //$locationProvider.html5Mode(true);
}]);

app.controller('mainController',['$http','$sce', '$scope','$log','$filter','$location',function($http, $sce, $scope, $log,$filter,$location){
    $scope.message = "Main controller";
    $log.info($location.path());

}]);
app.controller('aboutController',['$http','$sce', '$scope','$log','$filter','$location',function($http, $sce, $scope, $log,$filter,$location){
  $scope.message = "About Controller";
  $log.info($location.path());

}]);
app.controller('contactController',['$http','$sce', '$scope','$log','$filter','$location',function($http, $sce, $scope, $log,$filter,$location){
  $scope.message = "contactController Controller";
  $log.info($location.path());
}]);
app.controller('portfolioController',['$http','$sce', '$scope','$log','$filter','$location',function($http, $sce, $scope, $log,$filter,$location){
}]);
app.controller('resumeController',['$http','$sce', '$scope','$log','$filter','$location',function($http, $sce, $scope, $log,$filter,$location){
}]);
