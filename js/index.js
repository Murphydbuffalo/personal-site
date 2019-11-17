class Carousel {
  constructor(containerId) {
    this.containerId = containerId;
    this.section     = document.getElementById(containerId);
    this.buttons     = document.querySelectorAll(`#${containerId}-carousel i`);
    this.cards       = document.querySelectorAll(`#${containerId} .card`);
  }

  addEventListeners() {
    this.section.addEventListener('swiped-left',  this.showCardViaSwipe.bind(this), false);
    this.section.addEventListener('swiped-right', this.showCardViaSwipe.bind(this), false);

    this.buttons.forEach((button) => {
      button.addEventListener('click', this.showCardViaButtonClick.bind(this), false);
    });
  }

  showCardViaButtonClick(event) {
    const clickedButton = event.currentTarget;
    const cardNumber    = this.buttonIndex(clickedButton);

    this.hideAllCardsAndButtons();
    this.showButton(clickedButton);
    this.showCard(this.cards[cardNumber]);
  }

  showCardViaSwipe(event) {
    const currentButton = document.querySelector(`#${this.containerId}-carousel .fas`);
    const currentIndex  = this.buttonIndex(currentButton);

    let nextIndex;

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

    const nextButton = document.querySelector(`#${this.containerId}-carousel i[data-card-index="${String(nextIndex)}"]`);
    const cardNumber = buttonIndex(nextButton);
    const nextCard   = this.cards[cardNumber];

    this.hideAllCardsAndButtons();
    this.showButton(nextButton);
    this.showCard(nextCard);
  }

  hideAllCardsAndButtons() {
    this.buttons.forEach((button, i) => {
      button.classList.remove('fas');
      button.classList.add('far');

      this.cards[i].classList.add('hidden');
    });
  }

  showCard(card) {
    card.classList.remove('hidden');
  }

  showButton(button) {
    button.classList.add('fas');
  }

  buttonIndex(button) {
    return parseInt(button.getAttribute('data-card-index'), 10);
  }
}

document.addEventListener('DOMContentLoaded', function(_event) {
  document.querySelectorAll('section').forEach(function(section) {
    new Carousel(section.id).addEventListeners();
  });
});
