angular.module('BlackjackApp', [
  'BlackjackApp.services',
  'BlackjackApp.controllers'
])

.directive('bjCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/card.html',
    scope: {
      crd: '@'
    }
  }
});