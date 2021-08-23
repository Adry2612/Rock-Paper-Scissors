document.addEventListener('DOMContentLoaded', function(){

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
}

function playAgain(){
    // Select the board and hide it.
    let board = document.querySelector('.game')
    board.style.display = "flex";

    // Select the game decision and show it.
    let match = document.querySelector('.match')
    match.style.display = 'none'
}