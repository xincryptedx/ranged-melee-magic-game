//Melee Ranged Magic is a rock paper scissors clone based on the combat triange in the popular MMORPG Runescape.
//Melee beats Ranged. Ranged beats Magic. Magic beats Melee.

//Program Flow

//Variables
let playerSelection = "";
let computerSelection = "";

//Player initiates a new game. Games consist of five rounds and are called early if either the player or
//computer reach three points.

//After a new game has begun, the computer randomly decides its choice.
function getComputerSelection (){
    
}

function getRandomInt (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//The player is prompted to make their choice.

//The choices are compared against each other and the winner is decided.

//The scores are updated.

//If either player or computer has 3 points, the game is called and winner declared. The player is prompted
//to begin a new game if they wish.

//If neither player has 3 points yet, the next round starts with the computer randomly deciding its choice.