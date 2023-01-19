
//PC DECISION MAKING//
function getComputerChoice(){

    let pcChoice = Math.floor(Math.random() * 3);

    if (pcChoice == 0){
        pcChoice = "rock";
        pcPanel = document.getElementById('pcRock');
        pcPanel.classList.add('pcChoice');
    } else if (pcChoice == 1) {
        pcChoice = "paper";
        pcPanel = document.getElementById('pcPaper');
        pcPanel.classList.add('pcChoice');
    } else if (pcChoice == 2) {
        pcChoice = "scissors";
        pcPanel = document.getElementById('pcScissors');
        pcPanel.classList.add('pcChoice');
    }

    return pcChoice;
}

function rmChoices(){
    pcPanel.classList.remove('pcChoice');
    rock.classList.remove('playerChoice');
    paper.classList.remove('playerChoice');
    scissors.classList.remove('playerChoice');
}

//Displays score and winner onto adequate divs
function displayOutcome(winner, score){
    const scoreContainer = document.querySelector('.score');
    const winnerContainer = document.querySelector('.winner');
    
    const scoreContent = document.createElement('div');
    scoreContent.classList.add('scoreText');
    scoreContent.textContent = score;

    const winnerContent = document.createElement('div');
    winnerContent.classList.add('winnerText');
    winnerContent.textContent = winner;

    scoreContainer.appendChild(scoreContent);
    winnerContainer.appendChild(winnerContent);
}

//Clears refreshes display
function clearOutcome(){
    document.querySelector('.scoreText').remove();
    document.querySelector('.winnerText').remove();
}

//PLAYING ONE ROUND//
function oneRound(choice){
    let pcChoice = getComputerChoice().toLowerCase();
    
    if (choice == pcChoice){
        return "Tie!";

    } else if (
        (choice == "rock" && pcChoice == "scissors") ||
        (choice == "paper" && pcChoice == "rock") ||
        (choice == "scissors" && pcChoice == "paper")
        ){
        countPlayer ++;
        return "Player WINS!";

    } else {
        countPC ++;
        return "The Machine WINS!";
    }
}

function blockButtons(){
    rock.disabled = "true";
    paper.disabled = "true";
    scissors.disabled = "true";
}

function unlockButtons(){
    rock.removeAttribute('disabled');
    paper.removeAttribute('disabled');
    scissors.removeAttribute('disabled');
}


function ultimateWinner(score){
    if(countPlayer > countPC){
        displayOutcome("PLAYER WON THE GAME", score)
    } else {
        displayOutcome("PC WON THE GAME", score)
    }
}

function game(){
    clearOutcome();
    const outcome = oneRound(this.id);
    this.classList.add('playerChoice');

    let score = countPlayer + " : " + countPC;

    if(countPlayer < 5 && countPC < 5){
        displayOutcome(outcome, score);
        
        setTimeout(rmChoices, 300);
    } else {
        blockButtons();
        setTimeout(rmChoices, 300);
        ultimateWinner(score);
    }
}

function restartGame(){
    countPC = 0;
    countPlayer = 0;
    clearOutcome();
    setTimeout(rmChoices, 100);
    displayOutcome("Choose rock, paper, or scissors to start.", countPC + " : " + countPC);
    unlockButtons();
}


//TEST//
let countPC = 0;
let countPlayer = 0;
let pcPanel = "";


const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const restartButton = document.getElementById('restart');

rock.addEventListener('click',game);
paper.addEventListener('click',game);
scissors.addEventListener('click',game);
restartButton.addEventListener('click',restartGame);