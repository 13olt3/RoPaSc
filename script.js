


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
