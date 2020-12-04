
var rollCount = 0;
var playerOneTotal = 0;
var playerTwoTotal = 0;
var playerOneRoundTotal = 0;
var playerTwoRoundTotal = 0;

function rollDice() {
    // Roll the dice
    var randomDie1 = Math.floor(Math.random() * 6) + 1; 
    var randomDie2 = Math.floor(Math.random() * 6) + 1; 
    var randomDie3 = Math.floor(Math.random() * 6) + 1; 
    var randomDie4 = Math.floor(Math.random() * 6) + 1; 

    //Output the dice roll
    document.getElementById('dice1').setAttribute('src', 'images/inverted-dice-' + randomDie1 + '.svg');
    document.getElementById('dice2').setAttribute('src', 'images/inverted-dice-' + randomDie2 + '.svg');
    document.getElementById('dice3').setAttribute('src', 'images/inverted-dice-' + randomDie3 + '.svg');
    document.getElementById('dice4').setAttribute('src', 'images/inverted-dice-' + randomDie4 + '.svg');

    //Calculate Player 1 Round Score
    playerOneRoundTotal = calculateScore( randomDie1, randomDie2);
    console.log("Player 1 Score:" + roundScore);

    //Calculate Player 2 Round Score
    playerTwoRoundTotal = calculateScore( randomDie3, randomDie4);
    console.log("Player 2 Score:" + roundScore);

    return (playerOneRoundTotal, playerTwoRoundTotal);
}

// Calculate score function
function calculateScore( value1, value2 ) {

    if ( value1 == 1 || value2 == 1) {
        return roundScore = 0;
    } else {
        if ( value1 == value2 ) {
            return roundScore = ( value1 + value2 ) * 2;
        } else {
            return roundScore = value1 + value2;
        }
    }
}

document.getElementById('buttonRoll').addEventListener('click', function() {
    rollCount++;
    if ( rollCount <= 3) {
        rollDice();
        playerOneTotal = playerOneTotal + playerOneRoundTotal;
        playerTwoTotal = playerTwoTotal + playerTwoRoundTotal;

        document.getElementById('playerOneRound').innerText = playerOneRoundTotal;
        document.getElementById('playerTwoRound').innerText = playerTwoRoundTotal;
        document.getElementById('playerOneTotal').innerText = playerOneTotal;
        document.getElementById('playerTwoTotal').innerText = playerTwoTotal;
    } else {
        alert('Round complete');
    }
});

