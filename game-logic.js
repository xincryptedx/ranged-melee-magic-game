//Melee Ranged Magic is a rock paper scissors clone based on the combat triange in the popular MMORPG Runescape.
//Melee beats Ranged. Ranged beats Magic. Magic beats Melee.

//Program Flow

//Variables
let playerSelection = "Melee"; //Set to Melee for testing purposes. Change to "" later.
let computerSelection = "";

//Object that defines selection outcomes
const attacks = {
    ranged : {weak: "melee", strong: "magic"},
    melee : {weak: "magic", strong: "ranged"},
    magic : {weak: "ranged", strong: "melee"}
}

//Player initiates a new game. Games consist of five rounds and are called early if either the player or
//computer reach three points.
function game(){
    let round = 1;          //Initialized to 1 since it is always at least round 1
    let playerScore = 0;    
    let computerScore = 0;

    //Get player and computer selections
    playerSelection = getPlayerSelection();
    computerSelection = getComputerSelection();

    //Play the round
    
    //Update score and round

    //Determine if new round is needed or if there is an overall winner
}

//Gets player function while giving current round and score
function getPlayerSelection(){
    //Display a message with current round and scores, and ask for player choice
    playerSelection = prompt("Round " + round + ". Score: Player " + playerScore + ", Computer " + computerScore + ". Choose attack style.")

    //Make sure playerSelection is valid. If not ask for new selection.
    playerSelection = playerSelection.toLowerCase();    //lowercase for comparison

    if (!attacks.hasOwnProperty(playerSelection))       //if the selection is not in the attacks object
    {

    }
}

//One round of comparing player and computer selections
function playRound(playerSelection, computerSelection){

    //Ensure selections are in lowercase for accurrate comparisons
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    //Player wins
    if (attacks[playerSelection].strong === computerSelection)
    {
        return capitalize(playerSelection) + " is strong to " + capitalize(computerSelection) + ". You win!"
    }
    //Player loses
    if (attacks[playerSelection].weak === computerSelection)
    {
        return capitalize(playerSelection) + " is weak to " + capitalize(computerSelection) + ". You lose!"
    }
    //Tie
    else 
    {
        return capitalize(playerSelection) + " and " + capitalize(computerSelection) + " are neutral to each other. Tie!"
    }
}

//After a new game has begun, the computer randomly decides its choice.
function getComputerSelection (){
    let choice = getRandomInt(1,3);

    switch(choice){                 //Return ranged, melee, or magic based on outcome
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
//Get a random int between 1 and 3
function getRandomInt (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//This capitalizes the first letter in a string. Useful for formatting selections for outcome messages.
function capitalize(text){
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

//The player is prompted to make their choice.

//The choices are compared against each other and the winner is decided.

//The scores are updated.

//If either player or computer has 3 points, the game is called and winner declared. The player is prompted
//to begin a new game if they wish.

//If neither player has 3 points yet, the next round starts with the computer randomly deciding its choice.