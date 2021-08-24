document.addEventListener('DOMContentLoaded', function(){
    // Activar Lizard Spock.
    /*
    let title = document.querySelector('.title');
    title.addEventListener('click', lizardSpock(title));
    */
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

    chooseWinner(hand, hands[randomHand])
}

function printHand(hand){
    // Create the main buttons. 
    let container = document.createElement("div");
    container.classList.add('container')
    container.classList.add('result')
    let butt = document.createElement("div");
    butt.classList.add('button');
    let img = document.createElement("img");

    // We add the icon to the button in each case.
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
    
    // Append the icon and the button to the index.
    butt.appendChild(img);
    container.appendChild(butt);

    return container;
}

function chooseWinner(user, computer){
    let winner = 'tie';

    // Depending to the user choice, calculate the winner of the game. 
    switch (user){
        case 'paper':
            if (computer == 'rock'){
                winner = 'true';
            } else if(computer == 'scissors'){
                winner = 'false';
            } 

            break;
        case 'rock':
            if (computer == 'paper'){
                winner = 'false';
            } else if (computer == 'scissors'){
                winner = 'true';
            }
            break;

            case 'scissors':
                if (computer == 'rock'){
                    winner = 'false';
                } else if(computer == 'paper'){
                    winner = 'true';
                break;
            }
    }
    
    // Create the span with the result.
    let result = document.createElement("span");
    result.id = 'result';

    // Change the text depending of the result.
    if (winner === 'true'){
        result.innerHTML = 'You win!';
        document.querySelector('.player-score').innerHTML ++;
    } else if (winner === 'false'){
        result.innerHTML = 'You lose...';
    } else if (winner === 'tie'){
        result.innerHTML = 'It\'s a tie';
    }

    let decision = document.querySelector('.decision');
    decision.prepend(result);
}

function newGame(){
    // Select the board and hide it.
    let board = document.querySelector('.game')
    board.style.display = "flex";

    // Select the game decision and show it.
    let match = document.querySelector('.match')
    match.style.display = 'none'

    // Each time the game is reset we delete everything created before.
    let container = document.querySelectorAll('.result');
    let decision = document.querySelector('#result').remove()

    container.forEach(element => {
        element.remove()
    });
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