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
            resultText.textContent = "You win!";
            results.appendChild(resultText);
        }
    else if (
        (humanChoice == "scissors" && computerChoice == "rock") ||
        (humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "scissors")
    )
        {
            computerScore += 1;
            resultText.textContent = "You lose!";
            results.appendChild(resultText);
        }

    else {
        resultText.textContent = "Draw. Next Round!";
        results.appendChild(resultText);
    }  
    if( (humanScore != 5) && (computerScore != 5)) {
    runningScore.textContent = "Your score (" + humanScore + " - " + computerScore + ") computer score.";
    results.appendChild(runningScore);
    }
    else if (humanScore == 5){
        runningScore.textContent = "Your score (" + humanScore + " - " + computerScore + ") computer score. YOU WIN!";
        results.appendChild(runningScore);
    }
    else if (computerScore ==5){
        runningScore.textContent = "Your score (" + humanScore + " - " + computerScore + ") computer score. YOU LOSE!";
        results.appendChild(runningScore);
    }
    
}

const results = document.querySelector("#results");
const resultText = document.createElement("div");
const runningScore = document.createElement("div");

