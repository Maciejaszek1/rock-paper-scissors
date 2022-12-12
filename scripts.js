
//PC DECISION MAKING//
function getComputerChoice(){

    let b = Math.floor(Math.random() * 3)

    if (b == 0){
        b = "rock"
    } else if (b == 1) {
        b = "paper"
    } else if (b == 2) {
        b = "scissors"
    }

    return b
}

//PLAYING ONE ROUND//
function oneRound(){

    let choice = prompt().toUpperCase()
    let pcChoice = getComputerChoice().toUpperCase()

    console.log(choice)
    console.log(pcChoice)

    if (choice == pcChoice){
        return "Tie!"
    } else if (choice == "rock" && pcChoice == "scissors" || choice == "paper" && pcChoice == "rock" || choice == "scissors" && pcChoice == "paper"){
        return "Player WINS!"
    } else {
        return "The Machine WINS!"
    }
}

//PLAYING FIVE ROUNDS//

function game() {
    let countPC = 0
    let countPlayer = 0
    let x = 0

    
    while (countPC < 3 && countPlayer < 3) {
        let whoW = oneRound()

        if (whoW == "The Machine WINS!"){
            countPC++
        } else if (whoW == "Player WINS!") {
            countPlayer++
        }

        console.log(countPlayer + " : " + countPC)
    }

    /*
    while(x<3){
        let a = oneRound()
        console.log(a)

        if(a == "Player WINS!" || a == "The Machine WINS!" || a == "Tie!"){
            x++
        }
        else {break}
    }*/
}


//TEST//

console.log(game())