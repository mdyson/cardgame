angular.module('BlackjackApp.controllers', []).

  /* blackjack controller */
  controller('blackjackController', function($scope, blackjackAPIservice) {

    var deck = createDeck();
    var discardDeck = [];

    deck.sort(function() { return 0.5 - Math.random() }); //shuffle deck

    $scope.playerHand = [];
    $scope.dealerHand = [];

    $scope.playerAmount = 0;
    $scope.dealerAmount = 0;

    $scope.dealPlayerCard = function (obj) {
      var card = deck.pop();
      $scope.playerHand.push(card);
      $scope.playerAmount += card.value;
    };

    $scope.dealDealerCard = function (obj) {
      var card = deck.pop();
      $scope.dealerHand.push(card);
      $scope.dealerAmount += card.value;
    };

    //initial deal
    $scope.dealPlayerCard();
    $scope.dealDealerCard();
    $scope.dealPlayerCard();
    $scope.dealDealerCard();

    $scope.flip = function (obj) {
      var id = obj.currentTarget.id;
      if(angular.element("#"+id+" .face").hasClass("flipped")) {
        angular.element("#"+id+" .face").removeClass("flipped");
        angular.element("#"+id+" .back").removeClass("flipped");
      } else {
        angular.element("#"+id+" .face").addClass("flipped");
        angular.element("#"+id+" .back").addClass("flipped");
      }
    };
});

function createDeck () {
  var cardDeck = [];
  var suits = ['h','s','d','c'];
  for (var i = 0; i < suits.length; i++) {
    var suit = suits[i];
    cardDeck.push({suit: suit, number: 1, value: 11, altValue: 1});
    for (var j = 2; j <= 13; j++) {
      var value = (j>10)?10:j;
      cardDeck.push({suit: suit, number: j, value: value, altValue: value});
    }
  };
  return cardDeck;
};
