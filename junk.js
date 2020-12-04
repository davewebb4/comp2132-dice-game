

const die1 = {value: 1, src: "images/inverted-dice-1.svg"};
const die2 = {value: 2, src: "images/inverted-dice-2.svg"};
const die3 = {value: 3, src: "images/inverted-dice-3.svg"};
const die4 = {value: 4, src: "images/inverted-dice-4.svg"};
const die5 = {value: 5, src: "images/inverted-dice-5.svg"};
const die6 = {value: 6, src: "images/inverted-dice-6.svg"};

var p1RollScore = 0;
var p2RollScore = 0;

function rollDice() {
    
    //Set Player 1 Die 1
    var playerOneDieOne = Math.floor(Math.random() * 6) +1;
    var p1d1Output = document.getElementById('playerOneDieOne');
    p1d1Output.setAttribute('src', dieValue(playerOneDieOne));
    //Set Player 1 Die 2
    var playerOneDieTwo = Math.floor(Math.random() * 6) +1;
    var p1d2Output = document.getElementById('playerOneDieTwo');
    p1d2Output.setAttribute('src', dieValue(playerOneDieTwo));
    //Set Player 1 Roll Score
    p1RollScore = calculateScore(playerOneDieOne, playerOneDieTwo);

    //Set Player 2 Die 1
    var playerTwoDieOne = Math.floor(Math.random() * 6) +1;
    var p2d1Output = document.getElementById('playerTwoDieOne');
    p2d1Output.setAttribute('src', dieValue(playerTwoDieOne));
    //Set Player 2 Die 2
    var playerTwoDieTwo = Math.floor(Math.random() * 6) +1;
    var p2d2Output = document.getElementById('playerTwoDieTwo');
    p2d2Output.setAttribute('src', dieValue(playerTwoDieTwo));
    //Set Player 2 Roll Score
    p2RollScore = calculateScore( playerTwoDieOne, playerTwoDieTwo);

    console.log(playerOneDieOne, playerOneDieTwo, playerTwoDieOne, playerTwoDieTwo);
    
    return (p1RollScore, p2RollScore);
}

function dieValue(value) {
    switch (value) {
        case 1:
            return dieOutput = die1.src;
            break;
        case 2:
            return dieOutput = die2.src;
            break;        
        case 3:
            return dieOutput = die3.src;
            break;        
        case 4:
            return dieOutput = die4.src;
            break;        
        case 5:
            return dieOutput = die5.src;
            break;        
        case 6:
            return dieOutput = die6.src;
            break;
        default:
            break;
    }

}
function calculateScore( value1, value2) {
    var score = 0;
    return score = value1 +value2;
}
rollDice();
console.log(p1RollScore, p2RollScore);


/*
GAME RULES:

-The game hase 2 player, playing in rounds

-In each turn, the playernrolls a dice as amny times as he wishes. Each result gets added to his ROUND score.

-BUT, if a plaer rolls a 1, all his scores get erased. After that, its the next player's turn.

-The player can choose to "HOLD", which means that the round score gets added to his GLOBAL score. After that, its the other players turn

-The first player to reach 100 points on GLOBAL score wins

*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

//Hide the dice
document.querySelector('.dice').style.display = "none";


//Click roll dice button

document.querySelector(".rollDice").addEventListener('click', function () {

    //1.Generate random number                                    
    var dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);

    //2.Display the result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = "block";
    diceDOM.src = dice + ".png";



    //3. Update score IF the rolled number was NOT a 1
    if (dice !== 1) {
        //Add score
        roundScore += dice;
        document.querySelector(".current-score-" + activePlayer).textContent = roundScore;

    } else {
        //Next player
        nextPlayer();

    }


});

function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('.current-score-' + activePlayer).textContent = 0;

    document.querySelector(".player-panel-1").classList.toggle('current-player');

    document.querySelector(".player-panel-2").classList.toggle('current-player');

    //Hide the dice
    document.querySelector('.dice').style.display = "none";
}

document.querySelector(".Hold").addEventListener('click', function () {

    //Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    //Update the UI
    document.querySelector('.player-score-' + activePlayer).textContent = scores[activePlayer];


    //Check if player won the game


    //Next player

    nextPlayer();
});
