import "./styles.scss";
import confetti , {Options} from "canvas-confetti";
import {cards as cards} from "./data/cards"

const cardContainer = document.querySelector<HTMLElement>(".card__container");
const resetButton =  document.querySelector<HTMLButtonElement>("#reset-button");
let renderedCards;
let counter = 0;
let selectedCards: HTMLElement[] = [];

if (!cardContainer || !resetButton) {
  throw new Error ("Issue with selector of our container");
};

//generates HTML for the cards from the array 
 
const getCardHTML = (cards: animal[]): string => {
  const cardHTML  = cards
  .map (card => { return `<section class="card flip card__${card.species}" > 
  <img class="card__back-face" src="${card.backFace}">
  <img class="card__front-face" src="${card.frontFace}">
  </section>`;
})
.join("");
  return cardHTML;   
};

// function which shuffles the card every time a new game is started 

const shuffleCards = (cards: animal[]) => {
  let shuffle = cards.length;
  while (shuffle) {
    const i = Math.floor(Math.random() * shuffle--);
    [cards[shuffle], cards[i]] = [cards[i], cards[shuffle]]
  }
return cards;
} ;

//function which handles the flipping of the cards 

const flipCard = (element: HTMLElement) => {
 element.classList.toggle("flip")
};
// function which which limits you to two cards and only pressing each card once 

const assignCard = (element: HTMLElement) => {
  if ( selectedCards.length < 2 && element.classList.contains("flip")) {
    flipCard(element);
    selectedCards.push(element);
  }
};

// function that checks if you have two cards.
//if two cards are present it checks card1 against card2
//if cards match counter is incremented 

const checkCards = () => {
  if (selectedCards.length != 2) {
   return;
  };
  if (selectedCards[0].classList.value == selectedCards[1].classList.value){
    counter ++;
  } else {
    selectedCards.forEach(card => flipCard(card));
  }
  clear();

}

// flips selected cards back around if they are not the same 

const clear = () => {
  selectedCards = [];
}

// when cards are cicked and dont match adds a delay to the card flip 

const handleClick = async (event: Event) => {
  const element = event.currentTarget as HTMLElement;
  assignCard(element);
  if( selectedCards.length == 2){
  await new Promise(n => setTimeout(n,1000))
  }
  checkCards();
  if(counter == 8) {
    fireConfetti();
    alert ("You have matched all the cards!");
  }
}

// renders shuffled cards

const renderCard = () => {
  cardContainer.innerHTML = getCardHTML(shuffleCards([...cards]));

//calls the flip function

  renderedCards = document.querySelectorAll<HTMLElement>(".card");
  renderedCards.forEach ( card => card.addEventListener("click", handleClick))
};

//adds confetti 

const fireConfetti = () => {
  const options:Options = {
  particleCount:1200,
  startVelocity:100,
  spread:180,
  angle: 90,
  colors:[
  "#DFFF00", "#E4D00A",
  "#40826D", "#9FE2BF",
  "#FF5733", "#0000b2",
  "#9999ff", "#000066"],
  drift:1,
  ticks: 400,
  origin: {
    x: 0.5,
    y:1,
  }
};
  confetti(options);
};

// stsrts new game when button pressed
const reset = () => {
  cardContainer.innerHTML = "";
  renderCard();
  counter = 0;
  clear();
};

//button event listener
resetButton.addEventListener("click", reset)


