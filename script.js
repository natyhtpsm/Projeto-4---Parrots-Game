let boxes=[]; //where all the cards will be created
let deck=[]; //All the cards that are being played at the moment 
let images =['bobrossparrot','explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];
let endgame; 
let frstCard; //first card clicked
let scndCard; //secound card clicked
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
        boxes[i] = `<div class="oneCard" data-test="card">
                        <div data-test="face-up-image" class="face turning" onclick='turn(this)'>
                            <img src="img/${deck[i]}.gif">
                        </div> 
                        <div class='face'>
                            <img data-test="face-down-image" src="img\back.png">
                        </div>
                    </div>`;
    addCards=document.querySelector(".container")
    addCards.innerHTML += boxes[i];

}

allCards = document.querySelector(".oneCard");
function turn(oneCard){
    if(container.classList.contains('turning')){
        return;
    }
    if(!frstCard!==undefined && scndCard!==undefined){
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
                correct+=2;
                reset();
                endGame();
            } else{
                setTimeout(turnBack, 1000);
            }
        }
    }
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

allCards.forEach((container) => container.addEventListener('click', turn));


/* function compare(){

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
 */


function endGame(){
    if(correct==parseInt(numberCards)/2){
        alert("Você ganhou em "+endgame+"jogadas!")

    }
}