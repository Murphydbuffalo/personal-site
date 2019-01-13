document.addEventListener("DOMContentLoaded", function(_event) {
  var buttons = document.querySelectorAll("#recommendation-toggle i");
  var cards   = document.querySelectorAll("#recommendations .card");

  var toggleRecommendation = function(event) {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('fas');
      buttons[i].classList.add('far');

      cards[i].classList.add('hidden');
    }

    var clickedButton = event.currentTarget;
    var cardNumber = clickedButton.getAttribute("data-card-number");

    clickedButton.classList.add('fas');
    cards[cardNumber].classList.remove('hidden');
  };

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', toggleRecommendation, false);
  }
});
