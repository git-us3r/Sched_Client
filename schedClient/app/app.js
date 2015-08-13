(function(){

    'use strict';

    var app = angular.module("schedClient", ["ui.router", "ui.calendar", "ngRoute", "ngAnimate"]);

    app.config(["$stateProvider", "$urlRouterProvider",
        function($stateProvider, $urlRouterProvider){

            $urlRouterProvider.otherwise("landing");

            $stateProvider
                .state("userDash", {
                    url: "/userDash",
                    templateUrl: "app/views/userGrid.html",
                    controller: "UserCtrl as vm"
                })
                .state("adminDash", {
                    url: "/adminDash",
                    templateUrl: "app/views/home2.html",
                    controller: "AdminCtrl as vm"
                })
                .state("register", {
                    url: "/register",
                    templateUrl: "app/views/register.html",
                    controller: "RegisterCtrl as vm"
                })
                .state("login", {
                    url: "/login",
                    templateUrl: "app/views/login.html",
                    controller: "LoginCtrl as vm"
                })
                .state("landing", {
                    url: "/landing",
                    templateUrl: "app/views/landing.html",
                    controller: "LandingCtrl as vm"
                })

        }]
    );

}());