
const options =["rock" , "paper" , "scissors"]
let pScore = 0
let gScore = 0



function getComputerChoice(){
   const computerChoice = options[Math.floor(Math.random()*options.length)];
   console.log(computerChoice);
   return(computerChoice);

}


//function getHumanChoice(){
  //  let playerChoice = prompt("Pick Rock, Paper,or Scissors");
    // console.log(playerChoice);
     //return(playerChoice.toLowerCase());

//}
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
        pScore++  
    return("Player");
    
    }
    else{
        gScore++
       return("Computer");
       
    }

    

   


}


function playRound(playerChoice, computerChoice ){
    let humanScoreCounter = document.getElementById('pscore')
    let computerScoreCounter = document.getElementById('gscore')
    const result = checkWinner(playerChoice,computerChoice);

    if (result === 'Tie'){
        console.log("It's a Tie!")
    }
    else if (result === 'Player'){
        
       
        console.log(`You Win! ${playerChoice} beats ${computerChoice}`)
    }
    else if (result == 'Computer') {
        
       
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
       
    }

    document.getElementById('pscore').innerText=`Your Score: ${pScore}`;
    document.getElementById('gscore').innerText=`Computer Score:${gScore}`;
    

    if (pScore === 5){
        popResult.innerText= "YOU WIN!!!! :)";

    }
    else if(gScore === 5){
        popResult.innerText ="YOU LOSE :(";

    }

    
     function resetScore(){
        pScore = 0;
        gScore = 0;
        document.getElementById('pscore').innerText = `Your Score: ${pScore}`;
        document.getElementById('gscore').innerText= `Computer Score: ${gScore}`;
        
      }

      document.getElementById('clear').onclick = function hideMessage(){
        popResult.innerText =""
        resetScore();

      }

}



      
    
   


    
   
 
    
    
    
   





