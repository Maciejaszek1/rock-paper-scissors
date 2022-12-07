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
    
    let b = choice
    let c = pcChoice
    let a = ""
    
    if (b == c){
        a = "Tie!"
    } else if (choice == "rock" && pcChoice == "scissors" || choice == "paper" && pcChoice == "rock" || choice == "scissors" && pcChoice == "paper"){
        a = "Player WINS!"
    } else {
        a = "The Machine WINS!"
    }

    return a
}

let choice = prompt()

console.log(choice)
console.log(getComputerChoice())
console.log(oneRound(choice,getComputerChoice))
