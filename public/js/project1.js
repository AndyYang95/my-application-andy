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
    console.log(e.target.id);
}

//Event Listener
choices.forEach(ch => ch.addEventListener('click', play));