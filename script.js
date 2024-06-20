
var userInput;
var humanScore = 0;
var computerScore = 0;

function getComputerChoice(){
    var value = (Math.random()*3);
    var choice;

    if (value<= 1){
        choice = "rock";
    }
    else if (value <= 2){
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    
    console.log(choice);
    
}

getComputerChoice();

function getHumanChoice() {
    userInput = prompt("Rock, paper or scissors?");
    userInput = userInput.toLowerCase();
    
    while ((userInput != "rock") && (userInput != "paper") && (userInput != "scissors")) {
        userInput = prompt("Invalid input, try again. Rock, paper or scissors?");
        userInput = userInput.toLowerCase();       
    }

}