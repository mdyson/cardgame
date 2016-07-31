angular.module('BlackjackApp.services', [])
  .factory('blackjackAPIservice', function($http) {

    var blackjackAPI = {};

    blackjackAPI.getData = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://'
      });
    }

    return blackjackAPI;
  });