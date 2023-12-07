import "./styles.scss";

const cardContainer = document.querySelector<HTMLElement>(".card__container");
const resetButton =  document.querySelector<HTMLButtonElement>("#reset-button");


let renderedCards;
let counter = 0;

let selectedCards: HTMLElement[] = [];

if (!cardContainer || !resetButton) {
  throw new Error ("Issue with selector of our container");
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
  {species: "squirrel", backFace:"./src/references/Untitled_Artwork.png", frontFace: "./src/references/squirrel.png"},
  {species: "squirrel", backFace:"./src/references/Untitled_Artwork.png", frontFace: "./src/references/squirrel.png"},
  {species: "hedgehog", backFace:"./src/references/Untitled_Artwork.png", frontFace: "./src/references/hedgehog.png"},
  {species: "hedgehog", backFace:"./src/references/Untitled_Artwork.png", frontFace: "./src/references/hedgehog.png"},
  {species: "deer", backFace:"./src/references/Untitled_Artwork.png", frontFace: "./src/references/deer.png"},
  {species: "owl", backFace:"./src/references/Untitled_Artwork.png", frontFace: "./src/references/owl.png"},
  {species: "deer", backFace:"./src/references/Untitled_Artwork.png", frontFace: "./src/references/deer.png"},
  {species: "owl", backFace:"./src/references/Untitled_Artwork.png", frontFace: "./src/references/owl.png"},
  
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

const flipCard = (element: HTMLElement) => {
 element.classList.toggle("flip")
  };

  // renders cards from the shuffled array

const assignCard = (element: HTMLElement) => {
  if ( selectedCards.length < 2 && element.classList.contains("flip")) {
    flipCard(element);
    selectedCards.push(element);
  }
}

const checkCards = () => {
  if (selectedCards.length != 2) {
   return;
  }
  console.log(selectedCards)
  if (selectedCards[0].classList.value == selectedCards[1].classList.value){
    counter ++;
  } else {
    selectedCards.forEach(card => flipCard(card));
  }
  clear();

}

const clear = () => {
  selectedCards = [];
}

const handleClick = async (event: Event) => {
  const element = event.currentTarget as HTMLElement;
  assignCard(element);
  if( selectedCards.length == 2){
  await new Promise(n => setTimeout(n,1500))
  }
  checkCards();
  if(counter == 8) {
    alert ("You have matched all the cards!")
  }
}

const renderCard = () => {
  cardContainer.innerHTML = getCardHTML(shuffleCards([...cards]));

  //this calls the flip function
  renderedCards = document.querySelectorAll<HTMLElement>(".card");
  renderedCards.forEach ( card => card.addEventListener("click", handleClick))
}


//loads cards when the game launches 
//button to launch game 



// RESET BUTTON 
// - reshuffles the cards 
// - flips all cards to back face 



const reset = () => {
  cardContainer.innerHTML = "";
  renderCard();
  counter = 0;
  clear();
}


resetButton.addEventListener("click", reset)


// END GAME 
//if matched = 
// - confetti on screen 
// - cards flip back around after 15s? 
// - cards are reshuffled 