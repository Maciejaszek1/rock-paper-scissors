
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

//PLAYING ONE ROUND//
function oneRound(){

    let countPC = 0;
    let countPlayer = 0;
    const choice = this.id;
    const pcChoice = getComputerChoice().toLowerCase();

    console.log(choice);
    console.log(pcChoice);

    if (choice == pcChoice){
        whoWon = "Tie!";

    } else if (choice == "rock" && pcChoice == "scissors" ||
        choice == "paper" && pcChoice == "rock" ||
        choice == "scissors" && pcChoice == "paper"){
        
            countPlayer++;
            whoWon = "Player WINS!";

    } else {
        countPC++;
        whoWon = "The Machine WINS!";
    }
    console.log(whoWon +"\n"+ countPlayer + " : " + countPC);
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
        }

        console.log(countPlayer + " : " + countPC);
    }

}


//TEST//
//document.getElementById('rock').addEventListener('click', oneRound);
const divs = document.querySelectorAll('button');

function logText() {
  console.log(this.id);

}

divs.forEach(div => div.addEventListener('click', oneRound,{
  capture: false,
}));
