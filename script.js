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
let stop;
let allCards;
let even = 0;
let plays = 0;


//verifies if the number of cars is even
while(numberCards<4 || numberCards>15 || even!==0){
    numberCards = prompt("Quantas cartas você quer jogar?");
    numberCards = parseInt(numberCards);
    even=numberCards%2;
}

for(let i=0; i<(numberCards/2); i++){
    deck.push(images[i]);
    deck.push(images[i]);
}


function comparador(){
    return Math.random() -0.5;
}
deck.sort(comparador);

for (let i=0; i<numberCards; i++){
        boxes[i] = `<div class="oneCard" data-test="card" onclick='turn(this)'>
                        <div class="back-face face" data-test="face-up-image">
                            <img src="img/${deck[i]}.gif">
                        </div> 
                        <div class='front-face face'>
                            <img data-test="face-down-image" src="img\back.png">
                        </div>
                    </div>`;
    addCards=document.querySelector(".container")
    addCards.innerHTML += boxes[i];

}

function turn(oneCard){
    if(oneCard.classList.contains('turning')){
        return;
    }
    if(frstCard!==undefined && scndCard!==undefined){
        return;
    }
    if(frstCard === undefined){
        frstCard=oneCard;
        frstCard.classList.add('turning');
    }else{
        if(scndCard===undefined){
            scndCard=oneCard;
            scndCard.classList.add('turning');
            plays++;

            if(frstCard.innerHTML===scndCard.innerHTML){
                reset();
                correct+=2;
            
            } else{
                setTimeout(turnBack, 1000);
            }
        }
    }
    endGame();
} 


function reset(){
    frstCard=undefined;
    scndCard=undefined;
}
function turnBack(){
    frstCard.classList.remove('turning');
    scndCard.classList.remove('turning');
    reset();
}


function endGame(){
    if(correct==parseInt(numberCards)/2){
        alert("Você ganhou em "+plays+" jogadas!")

    }
}