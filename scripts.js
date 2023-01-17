
//PC DECISION MAKING//
function getComputerChoice(){

    let pcChoice = Math.floor(Math.random() * 3)

    if (pcChoice == 0){
        pcChoice = "rock";
    } else if (pcChoice == 1) {
        pcChoice = "paper";
    } else if (pcChoice == 2) {
        pcChoice = "scissors";
    }

    return pcChoice;
}

//Displays score and winner onto adequate divs
function displayOutcome(winner){
    //const scoreContainer = document.querySelector('.score');
    const winnerContainer = document.querySelector('.winner');
    /*
    const scoreContent = document.createElement('div');
    scoreContent.classList.add('scoreText');
    scoreContent.textContent = score;
*/
    const winnerContent = document.createElement('div');
    winnerContent.classList.add('winnerContent');
    winnerContent.textContent = winner;

    //scoreContainer.appendChild(scoreContent);
    winnerContainer.appendChild(winnerContent);
}

function blockButtons(){
    document.getElementById('rock').disabled = "true";
    document.getElementById('paper').disabled = "true";
    document.getElementById('scissors').disabled = "true";
}

//PLAYING ONE ROUND//
function oneRound(){

    const choice = this.id;
    const pcChoice = getComputerChoice().toLowerCase();

    blockButtons();

    if (choice == pcChoice){
        whoWon = "Tie!";

    } else if (choice == "rock" && pcChoice == "scissors" ||
        choice == "paper" && pcChoice == "rock" ||
        choice == "scissors" && pcChoice == "paper"){
            whoWon = "Player WINS!";

    } else {
        whoWon = "The Machine WINS!";
    }

    return displayOutcome(whoWon);
}

//PLAYING FIVE ROUNDS//

function game() {
    
    let countPC = 0;
    let countPlayer = 0;
    

    
    while (countPC < 3 && countPlayer < 3) {
        let whoWon = oneRound();

        if (whoWon == "The Machine WINS!"){
            countPC++;
        } else if (whoWon == "Player WINS!") {
            countPlayer++;
        } else 

        return displayOutcome(whoWon, countPlayer + " : " + countPC);    
    }
}


//TEST//

const divs = document.querySelectorAll('button');

divs.forEach(div => div.addEventListener('click', oneRound,{
  capture: false,
}));