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


//Event Listener
choices.forEach(ch => ch.addEventListener('click', play));