//Melee Ranged Magic is a rock paper scissors clone based on the combat triange in the popular MMORPG Runescape.
//Melee beats Ranged. Ranged beats Magic. Magic beats Melee.

//Variables
let playerSelection = "Melee"; //Set to Melee for testing purposes. Change to "" later.
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

function game(){

    initializeGame();

    while (playerScore < winningScore && computerScore < winningScore){
        computerSelection = getComputerSelection();
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

        //Play the round and display the results in the console.
        console.log(playRound(playerSelection, computerSelection));

        //Determine outcomes
        //Player wins with 3 points.
        if (playerScore == winningScore)
        {
            playerWins();
            break;
        }
        //Else computer wins with 3 points.
        else if (computerScore == winningScore)
        {
            computerWins();
            break;
        }

        //Increment the round variable
        round++;
    }
 
}

//Game outcome functions
function playerWins(){
    console.log("The player wins the game! Final score: Player " + playerScore + ", Computer " + computerScore + ".")
}

function computerWins(){
    console.log("The Computer wins the game! Final score: Player " + playerScore + ", Computer " + computerScore + ".")
}

function gameTie(){
    console.log("It is a tie game! Final score: Player " + playerScore + ", Computer " + computerScore + ".")
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
function playRound(playerSelection, computerSelection){
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    //Player wins
    if (attacks[playerSelection].strong === computerSelection)
    {
        playerScore ++;
        return capitalize(playerSelection) + " is strong to " + capitalize(computerSelection) + ". You win!"
    }
    //Player loses
    if (attacks[playerSelection].weak === computerSelection)
    {
        computerScore++;
        return capitalize(playerSelection) + " is weak to " + capitalize(computerSelection) + ". You lose!"
    }
    //Tie
    else 
    {
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