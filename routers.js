angular.module("myApp").config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl : "app/views/view.html"
        })
        .when('/home',{
            templateUrl : "app/views/view.html"
        })
        .when('/create-employee',{
            templateUrl : "app/views/creation.html"
        })
        .when('/update-employee',{
            templateUrl : "app/views/updation.html"
        })
        .when('/delete-employee', {
            templateUrl : "app/views/deletion.html"
        })
        .otherwise({
            templateUrl : "app/views/view.html"
        });
});