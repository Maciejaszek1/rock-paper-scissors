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

function oneRound(choice, pcChoice){
    
    let a = ""
    
    console.log(choice)
    console.log(pcChoice)

    if (choice == pcChoice){
        a = "Tie!"
    } else if (choice == "rock" && pcChoice == "scissors" || choice == "paper" && pcChoice == "rock" || choice == "scissors" && pcChoice == "paper"){
        a = "Player WINS!"
    } else {
        a = "The Machine WINS!"
    }

    return a
}

let choice = prompt()
let pcChoice = getComputerChoice()

console.log(oneRound(choice,pcChoice))
