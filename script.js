const deck=[];


function noGame(){
}


function create(){
    const container = document.querySelector('.container');
    for (let i=0; i<deck.length; i++){
        container.innerHTML = container.innerHTML + 
        <li class="carta" onclick='turn(this)'>
            <div class='front-face face'>
                <img src='./img/back.png'>
            </div> 
            <div class='back-face face'>
                <img src='./img/${deck[i]}.gif'>

            </div>
       </li>
 
    }
      
}