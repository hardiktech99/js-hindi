const randomNumber = parseInt(Math.random() * 100 + 1);

const submit =  document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".Guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".loworHi");
const StartOver = document.querySelector(".resultParas");

const p = document.createElement("p")

let preGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener("click" , function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuss(guess)
    })
}

function validateGuss (guess){
     if(isNaN(guess)){
        alert("Please Enter a Valid Number")
     } else if (guess < 1){
        alert("Please Enter a Number more than 1")
     }
     else if (guess > 100){
        alert("Please Enter a Number less than 100")
     }else{
        preGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number Was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
     }
}

function checkGuess (guess){
    if(guess === randomNumber){
        displayMessage(`You guessted it right`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage("Number is Tooo low")
    }else if(guess > randomNumber){
        displayMessage("Number is Tooo High")
    }
}

function displayGuess(guess){
    userInput.value = ""
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ""
    userInput.setAttribute("disabled" , "")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    StartOver.appendChild(p)
    playGame = false
}

function newGame(){
    const newGameButton =  document.querySelector("#newGame")
    newGameButton.addEventListener("click" , function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        preGuess = []
        guessSlot.innerHTML = ""
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute("disabled")
        StartOver.removeChild(p)
        playGame = true
    })
}

 