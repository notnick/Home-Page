
var app = angular.module('homepage',['ngRoute','angularCSS']);


app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'views/home.html',
        controller : 'mainController',
        css : 'css/home.css'
    })
    .when('/about',{
        templateUrl : 'views/about.html',
        controller : 'aboutController',
        css : 'css/about.css'
    })
    .when('/contact',{
        templateUrl : 'views/contact.html',
        controller : 'contactController',
        css : 'css/contact.css'
    })
    .when('/portfolio',{
        templateUrl : 'views/portfolio.html',
        controller : 'portfolioController',
        css : 'css/portfolio.css'

    })
        .when('/portfolio/comics',{
            templateUrl : 'views/projects/comics.html',
            css : 'css/projects/comics.css'
        })
        .when('/portfolio/invoicepro',{
            templateUrl : 'views/projects/invoicepro.html',
            css : 'css/projects/invoicepro.css'
        })
    .when('/resume', {
        templateUrl : 'views/resume.html',
        controller : 'resumeController',
        css : 'css/resume.css'
    })
    .otherwise({
        redirectTo : '/'
    });
    //,$locationProvider
    //$locationProvider.html5Mode(true);
}]);

app.controller('mainController',['$http','$sce', '$scope','$log','$filter','$location',function($http, $sce, $scope, $log,$filter,$location){


}]);
app.controller('aboutController',['$http','$sce', '$scope','$log','$filter','$location',function($http, $sce, $scope, $log,$filter,$location){
}]);
app.controller('contactController',['$http','$sce', '$scope','$log','$filter','$location',function($http, $sce, $scope, $log,$filter,$location){
}]);
app.controller('portfolioController',['$http','$sce', '$scope','$log','$filter','$location',function($http, $sce, $scope, $log,$filter,$location){
}]);

app.controller('resumeController',['$http','$sce', '$scope','$log','$filter','$location',function($http, $sce, $scope, $log,$filter,$location){
}]);

app.controller('footerController',['$scope',function($scope){
  var currentYear = new Date();
  currentYear = currentYear.getFullYear();
  $scope.currentYear = currentYear;
}]);
