# RoPaSc
Step 3:
prompt user for choice
turn to lower case
if rock paper or scissors is input, proceed
else error ask for another 

ended up using while loop

Step 4:
initialize humanScore and computerScore variable

Step 5:
playRound function-
if player and computer same choice return draw message
if player win
that is player = scissors   computer = paper
        player = rock       computer = scissors
        player = paper      computer = rock
add 1 to player score
if computer win
that is player = scissors   computer = rock
        player = rock       computer = paper
        player = paper      computer = scissors
add 1 to computer score

Step 6:
5 rounds
initialize counter and plus one counter after each game

last step:
put playRound into new playGame function
put scores into playGame function
repeat playRound 5 times in playGame function
console output final score.


Change console elements into DOM elements
Create dom element to put text content into
query select dom element so it can be acessed in playRound function
change the console elements to textContent elements

Use if statement to continue game
if neither score is 5, just show score
if one score is 5, say add that that player is winner
When either score reaches 5 add text content that announces winner