let boxes=[]; //where all the cards will be created
let deck=[]; //All the cards that are being played at the moment 
let images =['bobrossparrot','explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];
let endgame;
let frstCard; //first card clicked
let scndCard; //secound card clicked
let numberCards=0; //total number of cards to activate the prompt
let clicked; //clicked card
let check; /
let correct = 0;
let stop;
let allCards;


//verifies if the number of cars is even
while(numberCards<4 || numberCards>15 || even!==0){
    numberCards=prompt("Quantas cartas você quer jogar?");
    numberCards=parseInt(numberCards);
    even=numberCards%2;
}

function shuffle(){
    for(let i=0; i<numberCards/2; i++){
        deck.push(images[i]);
        deck.push(images[i]);
    }
    deck.sort(comparador);
}

function comparador(){
    return Math.random() -0.5;
}


for (let i=0; i<deck.length; i++){
    boxes[i] = <li class="oneCard" data-test="card">
                    <div data-test="face-up-image" class="front-face face">
                        <img src="img/${deck[i]}.gif">
                    </div> 
                    <div class='back-face face'>
                        <img data-test="face-down-image" src="img\back.png">
                    </div>
                </li>;
    let addCards = document.querySelector(".container");
    addCards.innerHTML += boxes[i];
}

allCards = document.querySelector(".oneCard");
function turn(){
    if(stop){
        return false;
    }
    this.classList.add("back-face");
    if(!frstCard){
        frstCard = this;
        frstCard.classList.add("back-face");
        return false;
    }
    scndCard=this;
    compare();
}

function compare(){
    if(check == false){
        noMatch();
    } else{
        frstCard.removeEventListener("click", turn);
        scndCard.removeEventListener("click", turn);
        clear();
        correct+=1;

    }
    endGame();
    endgame+=1;

}

function noMatch(){
    check=true;
    setTimeout(() =>{
        frstCard.classList.remove("back-face");
        scndCard.classList.remove("back-face");
        check = false;
        clear();
    }, 1000);
}

function clear(){
    frstCard=null;
    scndCard=null;
}

function endGame(){
    if(correct==parseInt(numberCards)/2){
        alert("Você ganhou em "+endgame+"jogadas!")

    }
}

