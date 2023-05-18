let playerScore = 0
let compScore = 0


const getComputerPlay = () => {
    const arrChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random()* arrChoices.length)
    return arrChoices[randomNum]
    
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === "rock"){
        return "Tie! You both picked rock"
    } else if (playerSelection === 'scissors' && computerSelection === "scissors"){
        return "Tie! You both picked scissors"
    } else if (playerSelection === 'paper' && computerSelection === "paper"){
        return "Tie! You both picked paper"
    }else if (playerSelection === 'rock' && computerSelection === "scissors"){
        playerScore ++
        return "You won! Rock crushes scissors"
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        compScore ++
        return "You lost! Paper covers rock"
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore ++
        return "You win! Scissors cuts paper"
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        compScore ++
        return "You lost! Rock crushes scissors"
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore ++
        return "You win! paper covers rock"
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        compScore ++
        return "You lost! scissors cuts paper"
    }

}


const game = () => {
    for(let i=0; i<5; i++) {
        const playerSelection = prompt('Choose what to throw', 'Rock, Paper, Scissors').toLowerCase()
        const computerSelection = getComputerPlay()
        playRound(playerSelection, computerSelection)

    }

    if (playerScore > compScore) {
        return 'You beat AI! Hope for humanity'
    } else if (playerScore < compScore){
        return 'The computer beat humans'
    } else{
        return 'Tight race! It\'s a tie!'
    }
}

console.log(game())
