let boxes=[]; //where all the cards will be created
let deck=[]; //All the cards that are being played at the moment 
let images =['bobrossparrot','explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];
let endgame; 
let frstCard=undefined; //first card clicked
let scndCard=undefined; //secound card clicked
let numberCards=0; //total number of cards to activate the prompt
let clicked; //clicked card
let check; 
let correct = 0;
let allCards;
let even = 0;
let plays = 0;
let tempCard;
//verifies if the number of cars is even
while(numberCards<4 || numberCards>15 || even!==0){
    numberCards = prompt("Quantas cartas você quer jogar?");
    numberCards = parseInt(numberCards);
    even=numberCards%2;
}

//puts the pictures inside the deck
for(let i=0; i<(numberCards/2); i++){
    deck.push(images[i]);
    deck.push(images[i]);
}

//function to shuffle the cards
function comparador(){
    return Math.random() -0.5;
}
deck.sort(comparador);

//creates div that have the cards inside it
for (let i=0; i<numberCards; i++){
        boxes[i] = `<div class="oneCard" data-test="card" onclick='turn(this)'>
                        <div class="back-face face">
                            <img data-test="face-up-image" src="img/${deck[i]}.gif">
                        </div> 
                        <div class='front-face face'>
                            <img data-test="face-down-image" src="img/back.png">
                        </div>
                    </div>`;
    addCards=document.querySelector(".container")
    addCards.innerHTML += boxes[i];

}

//turns the cards
function turn(oneCard) {
    if (oneCard.classList.contains('turning')) {
      return;
    }
  
    if (frstCard === undefined) {
      frstCard = oneCard;
      oneCard.classList.add('turning');
    } else if (scndCard === undefined) {
      scndCard = oneCard;
      oneCard.classList.add('turning');
  
      plays++; // Incrementa a variável "plays" aqui
      
      if (frstCard.innerHTML === scndCard.innerHTML) {
        reset();
        correct += 2;
        endGame();
      } else {
        setTimeout(turnBack, 1000);
      }
    } else {
      return;
    }
}

//clean the variables so it can be verified again
function reset(){
    frstCard=undefined;
    scndCard=undefined;
}

//turns back the cards that are not equal
function turnBack(){
    frstCard.classList.remove('turning');
    scndCard.classList.remove('turning');
    reset();
}

//finishes the game
function endGame(){
    if(correct==deck.length){
        alert("Você ganhou em "+plays+" jogadas!")

    }
}