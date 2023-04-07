let deck=[];
let images =['bobrossparrot','explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];
let endgame;
let okay = 0;
let frstCard;
let scndCard;
let numberCards;


//verifies if the number of cars is even
while(numberCards<4 || numberCards>15 || even!==0){
    numberCards=prompt("Quantas cartas você quer jogar?");
    numberCards=parseInt(numberCards);
    even=numberCards%2;
}

function shuffle(){
    for(let i=0; i<numberCards/2; i++){
        deck.push(img[i]);
        deck.push(img[i]);
    }
    deck.sort(comparador);
}

function comparador(){
    return Math.random() -0.5;
}

function create(){
    const container = document.querySelector('.container');
    for (let i=0; i<deck.length; i++){
        container.innerHTML = container.innerHTML + 
        <li class="carta" onclick='turn(this)'>
            <div class='front-face face'>
                <img src='Projeto-4---Parrots-Game/img/back.png'>
            </div> 
            <div class='back-face face'>
                <img src='Projeto-4---Parrots-Game/img/${deck[i]}.gif'>
            </div>
        </li>
    }
}

function turn(){
    if(blockcards){
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
    let check = frstCard.dataset.cartabla === scndCard.dataset.cartabla;
    if(check == false){
        noMatch();
    } else{
        frstCard.removeEventListener('click', turn);
        scndCard.removeEventListener('click', turn);
        clear();
        okay+=1;

    }
    endGame();
    endgame+=1;

}

function noMatch(){
    block=true;
    setTimeout(() =>{
        frstCard.classList.remove("back-face");
        scndCard.classList.remove("back-face");
        block = false;
        clear();
    }, 1000);
}

function clear(){
    frstCard=null;
    scndCard=null;
}

function endGame(){
    if(okay==parseInt(numberCards)/2){
        alert("Você ganhou em "+endgame+"jogadas!")

    }
}

