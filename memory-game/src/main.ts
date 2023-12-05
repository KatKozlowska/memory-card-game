import "./styles.scss";

const cardContainer = document.querySelector<HTMLElement>(".card__container");
let animalCard = document.querySelectorAll<HTMLElement>(".card");
const resetButton =  document.querySelector<HTMLButtonElement>("#reset-button");
let renderedCards;

if (!cardContainer || !animalCard) {
  throw new Error ("issiue with selector of our container");
};

type animal = {
  species: string; 
  frontFace:string;
  backFace:string;
}


const cards: animal[] = [
  {species: "bear",  backFace:"./src/references/Untitled_Artwork.png",frontFace:"./src/references/bear.png",},
  {species: "bear",  backFace:"./src/references/Untitled_Artwork.png",frontFace:"./src/references/bear.png",},
  {species: "rabbit", backFace:"./src/references/Untitled_Artwork.png",frontFace:"./src/references/rabbit.png"},
  {species: "rabbit", backFace:"./src/references/Untitled_Artwork.png", frontFace:"./src/references/rabbit.png"},
  {species: "racoon", backFace:"./src/references/Untitled_Artwork.png", frontFace: "./src/references/racoon.png"},
  {species: "racoon", backFace:"./src/references/Untitled_Artwork.png", frontFace: "./src/references/racoon.png"},
  {species: "fox", backFace:"./src/references/Untitled_Artwork.png", frontFace: "./src/references/fox.png"},
  {species: "fox", backFace:"./src/references/Untitled_Artwork.png", frontFace: "./src/references/fox.png"},

];

//generates HTML for the cards from the array - this bit works
 
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

//function which randomises the array every time

const shuffleCards = (cards: animal[]) => {
  let shuffle = cards.length;
  while (shuffle) {
    const i = Math.floor(Math.random() * shuffle--);
    [cards[shuffle], cards[i]] = [cards[i], cards[shuffle]]
  }
return cards;
} ;

// renders cards from the shuffled array 

const renderCard = () => {
  cardContainer.innerHTML = getCardHTML(shuffleCards([...cards]));
  renderedCards = document.querySelectorAll<HTMLElement>(".card");
  renderedCards.forEach ( card => card.addEventListener("click", flipCard))
}


function flipCard() {
 this.classList.toggle("flip")
}

// const test = () => {
//   alert ("hello")
// }


//loads cards when the game launches 
//button to launch game 

document.addEventListener("DOMContentLoaded", renderCard);

//



// FLIPPING CARDS 
// - when a card is clicked card need to flip to face the front 
// - the board needs to be locked to only allo wtwo cards to be flipped at once 
// - you can only flip a card to the front face. You cant flip the same card in one turn twice 

// const flipCard = (event: Event) => {
//  if (event.target = animalCard ) {
//   current.target.classList.add("flip")
//  }
// }
// function flipCard() {
//   const flip = document.getElementsByClassName(".card")
//   console.log(flip);
//   //flip.classList.toggle("flip")
// }

// google how to add event listener to dynamically created elements in javascript 

//forEach.addEventListener("click", flipCard)


//MATCHING CARDS 

// - function that chechs if card 1 = card 2 match 
// if card1 == card 2 they need to stay on screen 
// if card1 != card 2 they flip back around 
// if all cards are facing forward call END GAME 

// RESET BUTTON 
// - reshuffles the cards 
// - flips all cards to back face 

const reset = () => {
  cardContainer.innerHTML = "";
  renderCard();
}

resetButton?.addEventListener("click", reset)

// END GAME 
// - confetti on screen 
// - cards flip back around after 15s? 
// - cards are reshuffled 