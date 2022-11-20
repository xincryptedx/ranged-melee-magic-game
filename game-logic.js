//Melee Ranged Magic is a rock paper scissors clone based on the combat triange in the popular MMORPG Runescape.
//Melee beats Ranged. Ranged beats Magic. Magic beats Melee.

//Variables
let playerSelection = "";
let computerSelection = "";

let round = 1;                 //Initialized to 1 since it is always at least round 1
let playerScore = 0;    
let computerScore = 0;

const winningScore = 5;

//Object that defines attack selection outcomes
const attacks = {
    ranged : {weak: "melee", strong: "magic"},
    melee : {weak: "magic", strong: "ranged"},
    magic : {weak: "ranged", strong: "melee"}
}

//Results elements
const outcomeText = document.querySelector(".outcome");
const roundText = document.querySelector(".round");
const playerScoreText = document.querySelector(".playerScore");
const computerScoreText = document.querySelector(".computerScore");

//Events
const buttons = document.querySelectorAll("#btn");

buttons.forEach((button) => {button.addEventListener('click', () => {
                                console.log(playRound(button.dataset.attack));
                                updateScoreDisplay();
                                compareScores();
})});

//This is called so display is initialized at page load
updateScoreDisplay();

function game(){

    initializeGame();

    while (playerScore < winningScore && computerScore < winningScore){
        playerSelection = getPlayerSelection();

        //Verify player selection
        let isValidInput = false;
        while (!isValidInput){
            isValidInput = verifyPlayerSelection(playerSelection);

            if (isValidInput)
            {
                break;
            }
            else playerSelection = getPlayerSelection();
        }

        console.log(playRound(playerSelection));

        compareScores();
    }
 
}

function updateScoreDisplay(){
    roundText.textContent = "Round: " + round;
    playerScoreText.textContent = "Player Score: " + playerScore;
    computerScoreText.textContent = "Computer Score: " + computerScore;
}

//Game outcome functions
function compareScores(){
    if (playerScore == winningScore)
    {
        playerWins();
    }
    else if (computerScore == winningScore)
    {
        computerWins();
    }
}

function playerWins(){
    console.log("The player wins the game! Final score: Player " + playerScore + ", Computer " + computerScore + ".")
    outcomeText.textContent += " The player wins the game!";
    initializeGame();
}

function computerWins(){
    console.log("The Computer wins the game! Final score: Player " + playerScore + ", Computer " + computerScore + ".")
    outcomeText.textContent += " The computer wins the game!";
    initializeGame();
}

function gameTie(){
    console.log("It is a tie game! Final score: Player " + playerScore + ", Computer " + computerScore + ".")
    initializeGame();
}

//Gets player function while giving current round and score
function getPlayerSelection(){
    return prompt("Round " + round + ". Score: Player " + playerScore + ", Computer " + computerScore + ". Choose attack style.");
}


function verifyPlayerSelection(selection){
    selection = selection.toLowerCase();            

    if (!attacks.hasOwnProperty(selection))       
    {
        alert("That is not a valid choice. Please choose Melee, Magic, or Ranged.");
        return false;
    }
    else
    {
        return true;                         
    }
}

function initializeGame(){
    round = 1;          
    playerScore = 0;    
    computerScore = 0;
}

//One round of comparing player and computer selections
function playRound(playerSelection){
    computerSelection = getComputerSelection();

    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    round++;

    //Player wins
    if (attacks[playerSelection].strong === computerSelection)
    {
        playerScore ++;
        outcomeText.textContent = capitalize(playerSelection) + "(Player) is strong to " + capitalize(computerSelection) + "(Computer). You win!"
        return capitalize(playerSelection) + " is strong to " + capitalize(computerSelection) + ". You win!"
    }
    //Player loses
    if (attacks[playerSelection].weak === computerSelection)
    {
        computerScore++;
        outcomeText.textContent = capitalize(playerSelection) + "(Player) is weak to " + capitalize(computerSelection) + "(Computer). You lose!"
        return capitalize(playerSelection) + " is weak to " + capitalize(computerSelection) + ". You lose!"
    }
    //Tie
    else 
    {
        outcomeText.textContent = capitalize(playerSelection) + "(Player) and " + capitalize(computerSelection) + "(Computer) are neutral to each other. Tie!"
        return capitalize(playerSelection) + " and " + capitalize(computerSelection) + " are neutral to each other. Tie!"
    }
}

function getComputerSelection (){
    let choice = getRandomInt(1,3);

    switch(choice){                 
        case 1:
            return "ranged";
        case 2:
            return "melee";
        case 3:
            return "magic";
        default:
            return "Computer selection error";
    }
}

function getRandomInt (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function capitalize(text){
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}