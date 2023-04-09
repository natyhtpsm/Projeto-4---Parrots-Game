let boxes[];
let deck=[];
let images =['bobrossparrot','explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];
let endgame;
let okay = 0;
let frstCard;
let scndCard;
let numberCards;
let clicked = 0;
let check = 0;
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
    boxes[i] = <li class="oneCard">
                    <div class="front-face face">
                        <img src="img/${deck[i]}.gif">
                    </div> 
                    <div class='back-face face'>
                        <img src="img\back.png">
                    </div>
                </li>;
    let addCards = document.querySelector(".cards");
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
    check = frstCard.dataset.cartabla === scndCard.dataset.cartabla;
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

