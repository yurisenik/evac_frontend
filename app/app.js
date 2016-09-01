'use strict';

// Declare app level module which depends on views, and components
angular.module('evacApp', [
  'ngRoute',
  'evacApp.mapView'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/mapView'});
}]);
