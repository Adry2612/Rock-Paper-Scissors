document.addEventListener('DOMContentLoaded', function(){
    // Activar Lizard Spock.
    /*
    let title = document.querySelector('.title');
    title.addEventListener('click', lizardSpock(title));
    */

    // New game.
    let playAgain = document.querySelector('#newGame');
    playAgain.addEventListener('click', playAgain);

});

const pickHand = (hand) => {
    // Select the board and hide it.
    let board = document.querySelector('.game')
    board.style.display = "none";

    // Select the game decision and show it.
    let match = document.querySelector('.match')
    match.style.display = 'flex'

    // Print users hand.
    let user = document.querySelector('.user');
    user.appendChild(printHand(hand))

    // Generate random hand from computer.
    let hands = ['paper', 'scissors', 'rock']
    const randomHand = Math.floor(Math.random() * hands.length);

    // Print random hand.
    let computer = document.querySelector('.computer')
    computer.appendChild(printHand(hands[randomHand]));
}

function printHand(hand){
    let container = document.createElement("div");
    container.classList.add('container')
    let butt = document.createElement("div");
    butt.classList.add('button');
    let img = document.createElement("img");

    if (hand == 'paper'){
        container.classList.add('paper');
        img.src = "assets/icon-paper.svg";
        img.alt = "Paper";
    } else if(hand == 'scissors'){
        container.classList.add('scissors');
        img.src = "assets/icon-scissors.svg";
        img.alt = "Scissors";
    } else if(hand == 'rock'){
        container.classList.add('rock');
        img.src = "assets/icon-rock.svg";
        img.alt = "Rock";
    }
    
    butt.appendChild(img);
    container.appendChild(butt);

    return container;
}

function chooseWinner(){
    
}

function playAgain(event){
    event.preventDefault();
    
    // Select the board and hide it.
    let board = document.querySelector('.game')
    board.style.display = "flex";

    // Select the game decision and show it.
    let match = document.querySelector('.match')
    match.style.display = 'none'
}

/*
function lizardSpock(titulo){
    
    var lizard = document.createElement('span');
    lizard.innerHTML = 'LIZARD.'

    var spock = document.createElement('span');
    spock.innerHTML = 'SPOCK.'

    titulo.appendChild(lizard);
    titulo.appendChild(spock);
} */