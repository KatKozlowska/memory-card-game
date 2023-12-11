# Typescript Game

This project is a browser based game built using HTML, CSS/SCSS and Typescript. The aim of the project was to create a fully functioning game which took user imput in the form of a click or keypress, to trigger events in Typesript for game logic. I decided to create a card memory game with a woodland animals theme.  

## Project Goals

* Create a working Game: The main task is to create a Game not only will this test your understanding of TypeScript but how you
break down a problem.
* Practice using Git and GitHub fl ow: We want you to get as much practice as possible using git, GitHub and the command line.
* Get a better understanding of how to scope a larger project: We want to see a clear plan of what you're going to build and
how.
* Apply what you are learning: This is a great place to apply what you have been learning on all of the course so far. When you
get it functioning really push on the UI, use SCSS, BEM, anything else you fi nd on the web....really go mad!

## Project Requirements 

* Present a simple plan of the game.
* Have a public repository on GitHub.
* README.md file with short intro to the project.
* At least 15 meaningful Git commits.
* Ts formatted as fuctions.
* Correct formatting of code with suitable indentation and variable names.
* Code is all your own and you are able to explain it.
* Use click or keypress events in Typescript to trigger events in the game.
* Take a mobile first approach, and needs to work on different device widths.

 ## Code Snippet

 Below is a code snippet that I am most proud of. Once I have made my cards flip, I had an issiue where if the two selected cards did not match, they flipped back around instantly, not allowing you any time to see what animal was on the card. 
 I decided to add a function which would delay the card flip. I decided to make the function asynchronous, which allowed me to wait for two cards to be selected and checked before the countdown for the flip was started. 

 ```typescript
 const handleClick = async (event: Event) => {
  const element = event.currentTarget as HTMLElement;
  assignCard(element);
  if( selectedCards.length == 2){
  await new Promise(n => setTimeout(n,1000))
  }
```
## Additional Cool Stuff 

* There is one hidden Christmas Character in the mix of cards to celebrate the Xmas season.
* All the illustrations for the game were made by the author.

## Cloning the project

* Copy the url and git clone into chosen folder
* Run "npm install" to download appropriate dependencies
* Run "npm run dev" to open in browser.


