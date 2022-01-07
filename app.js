// jshint esversion:6
const cards = document.querySelectorAll('.memory-card');

let hasFliptCards = false;
let lockBoard = false;
let fistCard, secondCard;
// sounds
let flip = new Audio('sounds/flip.mp3');

let atcq = new Audio('sounds/atcq.mp3');
let wu = new Audio('sounds/wu.mp3');
let outgast = new Audio('sounds/outgast.mp3');
let gza = new Audio('sounds/gza.mp3');
let flow = new Audio('sounds/flow.mp3');
let doggystyl = new Audio('sounds/doggystyl.mp3');
let illmatic = new Audio('sounds/illmatic.mp3');
let midnight = new Audio('sounds/midnight.mp3');
let dls = new Audio('sounds/dls.mp3');


function flipCard() {
  if (lockBoard) return;
  if (this === flipCard) return;
flip.play();
dls.pause();
wu.pause();
atcq.pause();
flow.pause();
midnight.pause();
outgast.pause();
illmatic.pause();
gza.pause();
doggystyl.pause();
  this.classList.add('flip');

  if (!hasFliptCards) {
    // fist time clickt card
    hasFliptCards = true;
    fistCard = this;

    return;
  }
  // second click
  hasFliptCards = false;
  secondCard = this;

  checkForMatch();
}

function
 checkForMatch() {
  // do cards match
  let itMatch = fistCard.dataset.framework === secondCard.dataset.framework;
if (fistCard.dataset.framework === "atcq" & secondCard.dataset.framework === "atcq"){
  atcq.play();
}
  if (fistCard.dataset.framework === "wu" & secondCard.dataset.framework === "wu"){
    wu.play();
  }
    if (fistCard.dataset.framework === "dls" & secondCard.dataset.framework === "dls"){
      dls.play();
    }
      if (fistCard.dataset.framework === "doggystyl" & secondCard.dataset.framework === "doggystyl"){
        doggystyl.play();
      }
        if (fistCard.dataset.framework === "midnight" & secondCard.dataset.framework === "midnight"){
          midnight.play();
        }
          if (fistCard.dataset.framework === "outgast" & secondCard.dataset.framework === "outgast"){
            outgast.play();
          }
            if (fistCard.dataset.framework === "illmatic" & secondCard.dataset.framework === "illmatic"){
              illmatic.play();
            }
              if (fistCard.dataset.framework === "gza" & secondCard.dataset.framework === "gza"){
                gza.play();
              }
                if (fistCard.dataset.framework === "flow" & secondCard.dataset.framework === "flow"){
                  flow.play();
                }




itMatch ? disableCards() : unFlipCards();

}



function disableCards() {
  // it's a match
  fistCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();

}
// not a match
function unFlipCards() {
  lockBoard = true;

  setTimeout(function() {
    fistCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
      flip.play();
  }, 1500);

}

function resetBoard() {
  hasFliptCards = false;
  lockBoard = false;
  fistCard =  null;
  secondCard = null;
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 18);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
