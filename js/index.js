function addCarouselEventListeners(containerId) {
  var section = document.getElementById(containerId);
  var buttons = document.querySelectorAll('#' + containerId + '-carousel i');
  var cards   = document.querySelectorAll('#' + containerId + ' .card');

  section.addEventListener('swiped-left',  showCardViaSwipe, false);
  section.addEventListener('swiped-right', showCardViaSwipe, false);

  buttons.forEach(function(button) {
    button.addEventListener('click', showCardViaButtonClick, false);
  });

  function showCardViaButtonClick(event) {
    var clickedButton = event.currentTarget;
    var cardNumber    = buttonIndex(clickedButton);

    hideAllCardsAndButtons();
    showButton(clickedButton);
    showCard(cards[cardNumber]);
  };

  function showCardViaSwipe(event) {
    var currentButton = document.querySelector('#' + containerId + '-carousel .fas');
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

    var nextButton = document.querySelector('#' + containerId + '-carousel i[data-card-index="' + String(nextIndex) + '"]');
    var cardNumber = buttonIndex(nextButton);

    hideAllCardsAndButtons();
    showButton(nextButton);
    showCard(cards[cardNumber]);
  }

  function hideAllCardsAndButtons() {
    buttons.forEach(function(button, i) {
      button.classList.remove('fas');
      button.classList.add('far');

      cards[i].classList.add('hidden');
    });
  }

  function showCard(card) {
    card.classList.remove('hidden');
  }

  function showButton(button) {
    button.classList.add('fas');
  }

  function buttonIndex(button) {
    return parseInt(button.getAttribute('data-card-index'), 10);
  }
}

document.addEventListener('DOMContentLoaded', function(_event) {
  document.querySelectorAll('section').forEach(function(section) {
    addCarouselEventListeners(section.id);
  });
});
