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
    //幫電腦翻譯
    var p;
    if(playerChoice==='scissors'){p='剪刀';}
    else if(playerChoice==='rock'){p='石頭';}
    else if(playerChoice==='paper'){p='布';}

    const winner= getWinner(p, computerChoice);
    showWinner(winner, computerChoice);

}

//Get Computer Choice
function getCompChoice(){
    const rand= Math.random();
    //break it down to 3 categories:
    if(rand<0.34){
        return '石頭';
    } else if(rand <=0.67 && rand>=0.34){
        return '布';
    } else{
        return '剪刀';
    }
}



// SHOW WINNER
function showWinner(winner, computerChoice){
    var c;
    if(computerChoice==='剪刀'){
        c='scissors';
    }else if (computerChoice==='石頭'){
        c='rock';
    }else if(computerChoice==='布'){
        c='paper';
    }


    if(winner==='player'){
        //Incr player score
        scoreboard.player++;
        //Show modal result
        result.innerHTML=`
        <h1 class="text-win">恭喜你贏了!</h1>
        <i class="fas fa-hand-${c} fa-10x"></i>
        <p>電腦出了 <strong>${computerChoice}</strong>...</p>
        `;
    }else if(winner==='comp'){
        //Incr comp score
        scoreboard.computer++;
        //Show modal result
        result.innerHTML=`
        <h1 class="text-lose">嗚嗚你輸了...</h1>
        <i class="fas fa-hand-${c} fa-10x"></i>
        <p>電腦出了 <strong>${computerChoice}</strong>！</p>
        `;
    } else{
        //DRAW
        result.innerHTML=`
        <h1>沒輸沒贏。</h1>
        <i class="fas fa-hand-${c} fa-10x"></i>
        <p>電腦也出了 <strong>${computerChoice}</strong>!</p>
        `;
    }
    //SHOW SCORE
    score.innerHTML= `
    <p>玩家: ${scoreboard.player}</p>
    <p>電腦: ${scoreboard.computer}</p>`;

    //歸納完後秀modal
    modal.style.display=' block';

}


//Get winner
function getWinner(p, c){
    if(p===c){
        return 'draw';
    }else if(p==='石頭'){
        if(c==='剪刀'){return 'player';}
        if(c==='布'){return 'comp';}
    }else if(p==='剪刀'){
        if(c==='布'){return 'player';}
        if(c==='石頭'){return 'comp';}
    }else{ // p===paper
        if(c==='石頭'){return 'player';}
        if(c==='剪刀'){return 'comp';}
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
        <p>玩家: 0</p>
        <p>電腦: 0</p>
        `;
    }
}





//Event Listener
choices.forEach(ch => ch.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', clearScore);
window.addEventListener('touchstart', clearModal);