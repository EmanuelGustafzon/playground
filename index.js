const s = document.getElementById('s');
const r = document.getElementById('r');
const p = document.getElementById('p');
const winner = document.getElementById('winner')
let youScore = 0
let computerScore = 0
let countDown = 30



let downCounter = setInterval( () => {
    --countDown
    document.getElementById('counter').innerText=countDown
    if (countDown == 0) {
        if (computerScore > youScore){
            alert('looser')
            resetGame()
        } else if (youScore > computerScore) {
            alert('winner')
            resetGame()
        } else {
            alert('draw')
            resetGame()
        }
    }
    }, 1000)

const playGame = (e) => {

    const eTarget = e.target.id
    console.log(eTarget)

    const choices = ['s', 'r', 'p']
    const choice = choices[Math.floor(Math.random()*choices.length)];
    console.log(choice)

    document.getElementById('youChoose').innerText=e.target.id
    document.getElementById('computerChoose').innerText=choice


    if (eTarget == choice) {
        console.log('draw')
        winner.innerText='draw'
    } else if (e.target == s && choice == 'p') {
        console.log('you win')
        winner.innerText='winner'
        userScore()
    } else if (e.target == r && choice == 's') {
        console.log('you win')
        winner.innerText='winner'
        userScore()
    }  else if (e.target == p && choice == 'r') {
        console.log('you win')
        winner.innerText='winner'
        userScore()
    } else {
        console.log('lost')
        winner.innerText='looser'
        comScore()
    }
}

const userScore = () => {
    ++youScore
    document.getElementById('user').innerText=youScore
}
const comScore = () => {
    ++computerScore
    document.getElementById('computer').innerText=computerScore
}

const resetGame = () => {
    countDown = 30
    youScore = 0
    document.getElementById('user').innerText=youScore
    computerScore = 0
    document.getElementById('computer').innerText=computerScore

}

s.addEventListener('click',playGame, countDown )
r.addEventListener('click',playGame )
p.addEventListener('click',playGame )









