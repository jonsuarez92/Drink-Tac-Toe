let scoreX = 0;
let scoreO = 0;
let isDraw = false;

//dom text for game 

const paragraph = document.querySelector("#p1")
const paragraph2 = document.querySelector("#p2")
const paragraph3 = document.querySelector("#p3")
const xScore = document.getElementById("x-score")
const oScore = document.getElementById("o-score")

xScore.textContent = scoreX;
oScore.textContent = scoreO;

//remove text function

const removeText = () => {
 paragraph.textContent = '';
 paragraph2.textContent = ''; 
 paragraph3.textContent = '';
}




//dom eventlisyners for buttons to be functional




//functions for players in game

let isGameActive = false;

const start = () =>{
    isGameActive = true
    if(isGameActive === true){
        paragraph.textContent = 'Get ready to get wasted!'
    
}

}
const startBtn = document.getElementById("start")

startBtn.addEventListener('click', (evt) => {
    start()
})


//fix the variables and i and take out win

const score = () =>{

    if(playero.win === true ){
        for(let xWins = 0; xWins < 3; xWins++){
            console.log('playerX has won');
        }if(playerO.win === true){
            for(let oWins = 0; oWins < 3; oWins++){
                console.log('playerO has won');
            }
        }
    }
}
 
//things to fix
/* 


3.if board is full with no winner fix that both players 
drink and not just player o 
*/

// The game
const tiles = (document.querySelectorAll('.tile'));
let playerx = 'x';
let playero = 'o';
let turn = playerx;

const boardStatus = Array(tiles.length);
boardStatus.fill(null);
console.log(boardStatus);

//game text 
const gamePlay = document.getElementById('game-play');
const gameStatus = document.querySelector('game-status-text');
const xWin = document.getElementById('x-score')
const oWin = document.getElementById('o-score')

const winningConditions = [
    {plays:[0, 1, 2]},
    {plays:[3, 4, 5]},
    {plays:[6, 7, 8]},
    {plays:[0, 3, 6]},
    {plays:[1, 4, 7]},
    {plays:[2, 5, 8]},
    {plays:[0, 4, 8]},
    {plays:[2, 4, 6]},
  ];
  
  
function checkWinner(){
    console.log('placement')
    for(const winningCondition of winningConditions){
        // put game status on this line
        const plays = winningCondition.plays;
        console.log(winningCondition)
        const tile1 = boardStatus[plays[0]]
        const tile2 = boardStatus[plays[1]]
        const tile3 = boardStatus[plays[2]]
        if(tile1 != null && 
            tile1 === tile2 && 
            tile1 === tile3){
             console.log('found a winner')
             paragraph.textContent = 'Found a winner'
             endGame()
             // if (tile1 === playerx || playero){
               //  console.log(tile1); }
            }
    }
   // Draw i have to fix within my drink function
   const draw = boardStatus.every((tile) => tile !== null);
 
   if(draw){
    isDraw = true;
    boardStatus.fill(null)
    isGameActive = false; 
       console.log('draw, Both player take a shot!');
       paragraph3.textContent = 'Draw! Both players drink!'
   }
}

// taking turns X and O

tiles.forEach((tile) => tile.addEventListener("click", tileclick))
function tileclick(j){
    if(isGameActive){
    const tile = j.target;
     const tileNumber = tile.dataset.index;
     if(tile.innerText != ""){
         return;
     }
     if( turn === playerx){
         
         tile.innerText = playerx;
         boardStatus[tileNumber - 1] = playerx;
         console.log(boardStatus);
     } 
     else {
        tile.innerText = playero;
        boardStatus[tileNumber - 1] = playero;
        console.log(boardStatus);
        }
        } else {
        return
    }




 checkWinner();
 if(turn === playero ){
    turn = playerx;
 }
 else {
     turn = playero 
 }
 
}



function endGame(){
    if(turn === playerx){
        scoreX++
        xScore.textContent = scoreX;
        boardStatus.fill(null)
        isGameActive = false;
        console.log('x wins, player o takes a shot!')
        paragraph2.textContent = 'X wins! player O has to take shot!'}
        
if (turn === playero){
    scoreO++
    oScore.textContent = scoreO
    boardStatus.fill(null)
    isGameActive = false;
    console.log('o wins, player x takes a shot!')
    paragraph2.textContent = 'O wins! player X has to take shot!'
} 

}


//dom eventlisyners for  drink buttons to be functional

const DrinkBtn = document.getElementById("drink")

DrinkBtn.addEventListener('click', (evt) => {
    drink()
})
 
const drink = () =>{
    
    if (isDraw){
        console.log('it was a draw')
        paragraph3.textContent = 'Player O and Player X feeling tipsy'
        isDraw = false;
        
    }else if(turn === playerx){
paragraph3.textContent = 'Player X feeling tipsy'
    }
    else if (turn === playero){
        paragraph3.textContent = 'Player O feeling tipsy'
    }
}

const playBtn = document.getElementById('play')

playBtn.addEventListener('click', (evt) => {
tiles.forEach((tile)=> tile.innerText = "")
isGameActive = true;
})
 




  
  