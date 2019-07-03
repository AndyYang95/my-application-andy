const choices= document.querySelectorAll('.choice');
const score= document.getElementById('score');
const result= document.getElementById('result');
const restart= document.getElementById('restart');

const modal= document.querySelector('.modal');
const scoreboard={
    player: 0,
    computer: 0
}


//PLAY GAME
function play(e){
    restart.style.display= 'inline-block';
    //console.log(e.target.id);
    const playerChoice= e.target.id;
    const computerChoice= getCompChoice();

    //see choices from both sides
    console.log('player:' ,playerChoice, 'v.s. computer:', computerChoice );

    const winner= getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);

}

//Get Computer Choice
function getCompChoice(){
    const rand= Math.random();
    //break it down to 3 categories:
    if(rand<0.34){
        return 'rock';
    } else if(rand <=0.67 && rand>=0.34){
        return 'paper';
    } else{
        return 'scissors';
    }
}



// SHOW WINNER
function showWinner(winner, computerChoice){
    if(winner==='player'){
        //Incr player score
        scoreboard.player++;
        //Show modal result
        result.innerHTML=`
        <h1 class="text-win">YOU WON!</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice}</strong>...</p>
        `;
    }else if(winner==='comp'){
        //Incr comp score
        scoreboard.computer++;
        //Show modal result
        result.innerHTML=`
        <h1 class="text-lose">You lost...</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice}</strong>!</p>
        `;
    } else{
        //DRAW
        result.innerHTML=`
        <h1>It's A Draw!</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer also chose <strong>${computerChoice}</strong>!</p>
        `;
    }
    //SHOW SCORE
    score.innerHTML= `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>`;

    //歸納完後秀modal
    modal.style.display=' block';

}


//Get winner
function getWinner(p, c){
    if(p===c){
        return 'draw';
    }else if(p==='rock'){
        if(c==='scissors'){return 'player';}
        if(c==='paper'){return 'comp';}
    }else if(p==='scissors'){
        if(c==='paper'){return 'player';}
        if(c==='rock'){return 'comp';}
    }else{ // p===paper
        if(c==='rock'){return 'player';}
        if(c==='scissors'){return 'comp';}
    }
}


//clear modal
function clearModal(e){
    if(e.target==modal){
    modal.style.display='none';
    }
}

function closeModal(){
    modal.style.display='none';
}


//Restart clear score
function clearScore(e){
    if(e.target== restart){
        scoreboard.player=0;
        scoreboard.computer=0;

        //前端顯示
        score.innerHTML=`
        <p>Player: 0</p>
        <p>Computer: 0</p>
        `;
    }
}





//Event Listener
choices.forEach(ch => ch.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', clearScore);
window.addEventListener('touchstart', clearModal);