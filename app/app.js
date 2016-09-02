'use strict';

// Declare app level module which depends on views, and components
angular.module('app2', [
  'ngRoute',
  'app2.templates'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
