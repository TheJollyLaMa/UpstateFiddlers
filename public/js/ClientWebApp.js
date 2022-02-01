var app = angular.module("ClientWebApp", ["ngRoute"]);
app.config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider

    .when("/", {controller: "FiddleMarketController", templateUrl: "FiddleMarket/index.html"})

    .when("/FiddleMarket", {controller: "FiddleMarketController", templateUrl: "FiddleMarket/fiddle_market.html"})
    .when("/About", {controller: "FiddleMarketController", templateUrl: "FiddleMarket/about.html"})

    /* --- Login Routes---*/
    .when("/Login", {controller: "AuthController",templateUrl: "Login.html"})
    .when("/Logout", {resolve: {deadResolve: function ($location, AuthFactory) {AuthFactory.clearData(); $location.path('/Login'); } }})

    /* --- Exclusive Behind The Counter Routes---*/
    .when("/BehindTheCounter", {resolve: {check: function ($location, AuthFactory) {if (!AuthFactory.isUserLoggedIn()) {$location.path('/Login');}}},controller : "BehindTheCounterController",templateUrl : "BehindTheCounter/fiddlers_ledger.html"})
    .when("/BehindTheCounter/PickersDash", {resolve: {check: function ($location, AuthFactory) {if (!AuthFactory.isUserLoggedIn()) {$location.path('/Login');}}}, controller: "BehindTheCounterController", templateUrl: "BehindTheCounter/pickers_dash.html"})
    .when("/BehindTheCounter/FiddlersLedger", {resolve: {check: function ($location, AuthFactory) {if (!AuthFactory.isUserLoggedIn()) {$location.path('/Login');}}}, controller: "BehindTheCounterController",templateUrl: "BehindTheCounter/fiddlers_ledger.html"})

    .otherwise({redirectTo: "/"})
  }
]);
