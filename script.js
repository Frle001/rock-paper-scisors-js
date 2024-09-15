console.log("Hello World")

const S="scissors";
const R="rock";
const P="paper";

function getComputerChoice(){
    let random = Math.random();
    if (random >= 0 && random < 0.33){
        return S
    } else if (random >= 0.33 && random < 0.66){
        return R
    } else {
        return P
    }
}

function getHumanChoice(){
    let answer = parseInt(prompt())
    if (answer === 1){
        return "scissors"
    } else if (answer === 2){
        return "rock"
    } else if (answer === 3){
        return "paper"
    } else {
        return "wrong number"
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;
    let rounds = 5;
    function playRound(humanChoice, computerChoice){
        if (humanChoice === "scissors" && computerChoice === "paper"){
            console.log("scissors beats paper good job")
            humanScore++;
        }else if(humanChoice === "scissors" && computerChoice === "rock"){
            console.log("rock beats scissors zou lose")
            computerScore++;
        } else if(humanChoice === "scissors" && computerChoice === "scissors"){
            console.log("Its a draw!")
        } else if(humanChoice === "rock" && computerChoice === "scissors"){
            console.log("rock beats scissors good job")
            humanScore++;
        } else if(humanChoice === "rock" && computerChoice === "paper"){
            console.log("paper beats rock zou lose")
            computerScore++;
        } else if(humanChoice === "rock" && computerChoice === "rock"){
            console.log("Its a draw!")
        } else if(humanChoice === "paper" && computerChoice === "rock"){
            console.log("paper beats rock good job")
            humanScore++;
        } else if(humanChoice === "paper" && computerChoice === "scissors"){
            console.log("scissors beats paper zou lose")
            computerScore++;
        } else if(humanChoice === "paper" && computerChoice === "paper"){
            console.log("Its a draw")
        }
    }
    while(roundsPlayed<rounds){
        playRound(getHumanChoice(), getComputerChoice());
        roundsPlayed++;
    }

    if (computerScore>humanScore){
        return "YOU LOST BETTER LUCK NEXT TIME"

    } else if(computerScore<humanScore){
        return "You Won IMPRESSIVE!"
    } else { return "Wow its a draw after all"}
}

console.log(playGame())


//console.log(getHumanChoice())
//console.log(getComputerChoice())