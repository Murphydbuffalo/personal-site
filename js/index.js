document.addEventListener("DOMContentLoaded", function(_event) {
  var recommendations = document.getElementById('recommendations');
  var buttons         = document.querySelectorAll("#recommendation-toggle i");
  var cards           = document.querySelectorAll("#recommendations .card");

  var hideAllCardsAndButtons = function() {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('fas');
      buttons[i].classList.add('far');

      cards[i].classList.add('hidden');
    }
  }

  var showCard = function(card) {
    card.classList.remove('hidden');
  }

  var showButton = function(button) {
    button.classList.add('fas');
  }

  var buttonIndex = function(button) {
    return parseInt(button.getAttribute("data-card-index"), 10);
  }

  var showRecommendationViaButtonClick = function(event) {
    var clickedButton = event.currentTarget;
    var cardNumber    = buttonIndex(clickedButton);

    hideAllCardsAndButtons();
    showButton(clickedButton);
    showCard(cards[cardNumber]);
  };

  var showRecommendationFromSwipe = function(event) {
    var currentButton = document.querySelector('#recommendation-toggle .fas');
    var currentIndex  = buttonIndex(currentButton);

    var nextIndex;

    if (event.type === 'swiped-left') {
      if (currentIndex === 2) {
        nextIndex = 0;
      } else {
        nextIndex = currentIndex + 1;
      }
    } else {
      if (currentIndex === 0) {
        nextIndex = 2;
      } else {
        nextIndex = currentIndex - 1;
      }
    }

    var nextButton = document.querySelector('#recommendation-toggle i[data-card-index="' + String(nextIndex) + '"]');
    var cardNumber = buttonIndex(nextButton);

    hideAllCardsAndButtons();
    showButton(nextButton);
    showCard(cards[cardNumber]);
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showRecommendationViaButtonClick, false);
  }

  recommendations.addEventListener('swiped-left',  showRecommendationFromSwipe, false);
  recommendations.addEventListener('swiped-right', showRecommendationFromSwipe, false);
});
