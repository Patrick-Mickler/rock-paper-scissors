
const options =["rock" , "paper" , "scissors"]
let humanScore = 0
let computerScore = 0



function getComputerChoice(){
   const computerChoice = options[Math.floor(Math.random()*options.length)];
   console.log(computerChoice);
   return(computerChoice);

}


function getHumanChoice(){
    let playerChoice = prompt("Pick Rock, Paper,or Scissors");
     console.log(playerChoice);
     return(playerChoice.toLowerCase());

}
function checkWinner(playerChoice, computerChoice){
    
    if
    ( playerChoice === computerChoice)
    {
        return("Tie");
    }
    
    else if(
    (playerChoice == "rock" && computerChoice == "scissors" )||
    (playerChoice== "paper" && computerChoice == "rock")||
    (playerChoice == "scissors" && computerChoice == "paper")
    )
    {
        ++humanScore;
    return("Player");
    
    }
    else{
        ++computerScore;
       return("Computer");
       
    }
}


function playRound(playerChoice, computerChoice ){
  
  const result = checkWinner(playerChoice,computerChoice);
  console.log(`Your Score: ${humanScore}`);
  console.log(`Computer Score:${computerScore}`)
    if (result === 'Tie'){
        console.log("It's a Tie!")
    }
    else if (result === 'Player'){
        console.log(`You Win! ${playerChoice} beats ${computerChoice}`)
    }
    else if (result == 'Computer') {
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
       
    }

    
    
}



function playGame(){
     
    
    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
         
    }
    if (humanScore > computerScore) {
         console.log(`You Win The Game !!!😃`);

    }
    else if ( humanScore < computerScore) { 
        console.log ('Sorry You Lose The Game.😭' )
    }
    
}
playGame();