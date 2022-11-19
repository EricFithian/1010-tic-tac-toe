// console.log("Hello World!");

// I have to setup whose turn it is
// Next I have to make it so that when I click a box, it updates the HTML and it changes the person's turn. 
// I want to see if one player has 3 in a row

// Declare all of my global variables at the top. This includes not only what I'm defining as a new variable, like player, but also things like the squares that I'm grabbing to have access to them.

// const squares = document.querySelectorAll('.square');
const squares = document.getElementsByClassName('square');
// console.log(squares);
const startX = document.querySelector('.startX');
const startO = document.querySelector('.startO');
// console.log(startX)
// console.log(startO)
const xWinsTag = document.querySelector('.xWins');
const oWinsTag = document.querySelector('.oWins');
const drawsTag = document.querySelector('.draws');
// console.log(xWinsTag);
// console.log(oWinsTag);
let player;
// console.log(player);
// let player2 = 'O';
let gamesXWon = 0;
let gamesOWon = 0;
let draws = 0;


// Write my functions
function changeTurns (num) {
    if(squares[num].innerText === '' && player) {
        squares[num].innerText = player;
        if(player === 'X') {
            squares[num].classList.add('xSquare')
            player = 'O';
        } else {
            squares[num].classList.add('oSquare')
            player = 'X';
        }
        checkWinner();
        draw();
    }
}

// const changeTurns = (num) => {
//     if(squares[num].innerText === '' && player) {
//         squares[num].innerText = player;
//         if(player === 'X') {
//             squares[num].classList.add('xSquare')
//             player = 'O';
//         } else {
//             squares[num].classList.add('oSquare')
//             player = 'X';
//         }
//         checkWinner();
//         draw();
//     }
// }

// const changeTurns = function (num) {
//     if(squares[num].innerText === '' && player) {
//         squares[num].innerText = player;
//         if(player === 'X') {
//             squares[num].classList.add('xSquare')
//             player = 'O';
//         } else {
//             squares[num].classList.add('oSquare')
//             player = 'X';
//         }
//         checkWinner();
//         draw();
//     }
// }

function clearBoard() {
    for(let i = 0; i < squares.length; i++) {
        squares[i].innerText = '';
        squares[i].classList.remove('xSquare');
        squares[i].classList.remove('oSquare');
    }
    player = '';
}

function draw() {
    if(squares[0].innerText && squares[1].innerText && squares[2].innerText && squares[3].innerText && squares[4].innerText && squares[5].innerText && squares[6].innerText && squares[7].innerText && squares[8].innerText) {
        console.log("It's a draw");
        clearBoard();
        draws++;
        drawsTag.innerHTML = `Draws: ${draws}`
    }
}

function checkWinner() {
    const winningCombos = [
        [squares[0], squares[1], squares[2]],
        [squares[3], squares[4], squares[5]],
        [squares[6], squares[7], squares[8]],
        [squares[0], squares[3], squares[6]],
        [squares[1], squares[4], squares[7]],
        [squares[2], squares[5], squares[8]],
        [squares[0], squares[4], squares[8]],
        [squares[2], squares[4], squares[6]],
    ];

    winningCombos.forEach(combo => {
        // console.log(combo);
        if(combo[0].innerText === 'X' && combo[1].innerText === 'X' && combo[2].innerText === 'X') {
            console.log("X is the winner");
            clearBoard();
            gamesXWon++;
            xWinsTag.innerText = `X Wins: ${gamesXWon}`
        } else if(combo[0].innerText === 'O' && combo[1].innerText === 'O' && combo[2].innerText === 'O') {
            console.log("O is the winner");
            clearBoard();
            gamesOWon++;
            oWinsTag.innerText = `O Wins: ${gamesOWon}`
        }
    })
    // // Combinations to win: 0, 1 & 2, 3, 4 & 5, 6, 7 & 8, 0, 3 & 6, 1, 4, & 7, 2, 5 & 8, 0, 4 & 8 and 2, 4 & 6
    // if(squares[0].innerText === 'X' && squares[1].innerText === 'X' && squares[2].innerText === 'X' || squares[3].innerText === 'X' && squares[4].innerText === 'X' && squares[5].innerText === 'X' || squares[6].innerText === 'X' && squares[7].innerText === 'X' && squares[8].innerText === 'X') {
    //     console.log("X is the winner")
    // }
    // else if(squares[0].innerText === 'O' && squares[1].innerText === 'O' && squares[2].innerText === 'O' || squares[3].innerText === 'O' && squares[4].innerText === 'O' && squares[5].innerText === 'O' || squares[6].innerText === 'O' && squares[7].innerText === 'O' && squares[8].innerText === 'O') {
    //     console.log("O is the winner")
    // }
}


// Add in my event listeners
for(let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
        changeTurns(i);
    })
}

startX.addEventListener('click', () => {
    if(!player) player = 'X'
});

startO.addEventListener('click', () => {
    if(!player) player = 'O'
})