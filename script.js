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
    return choice;    
}

function getHumanChoice() {
    var userInput = prompt("Rock, paper or scissors?");
    userInput = userInput.toLowerCase();
    
    while ((userInput != "rock") && (userInput != "paper") && (userInput != "scissors")) {
        userInput = prompt("Invalid input, try again. Rock, paper or scissors?");
        userInput = userInput.toLowerCase();       
    }
    return userInput;
}


// function playGame(){

//     console.log("Final scores - You: " + humanScore + " Computer: " + computerScore);
// }

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", function() {
    playRound("rock",getComputerChoice());
});
paper.addEventListener("click", function() {
    playRound("paper",getComputerChoice());
});
scissors.addEventListener("click", function() {
    playRound("scissors",getComputerChoice());
});

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock")
    )
        {
            humanScore += 1;
            console.log("You win!");
        }
    else if (
        (humanChoice == "scissors" && computerChoice == "rock") ||
        (humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "scissors")
    )
        {
            computerScore += 1;
            console.log("You lose!");
        }

    else {
        console.log("Draw, next round!");
    }  
}

