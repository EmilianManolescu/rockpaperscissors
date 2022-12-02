const robotChoiceDisplay = document.getElementById('robot-choice');
const humanChoiceDisplay = document.getElementById('human-choice');
const resultDisplay = document.getElementById('result');
const humanPointsDisplay = document.getElementById('human-points');
const robotPointsDisplay = document.getElementById('robot-points');
const possibleChoices = document.querySelectorAll('button');

let robotChoice
let humanChoice
let result
let humanPoints = 0
let robotPoints = 0

//Get the human choice and display it after the human picks a choice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(event) => {
    humanChoice = event.target.id
    humanChoiceDisplay.innerHTML = humanChoice
    generateRobotChoice()
    calculateResult()
    updatePoints()
    console.log(humanChoice)
}))

humanPointsDisplay.innerHTML = humanPoints
robotPointsDisplay.innerHTML = robotPoints

function updateHumanPoints() {
    humanPoints += 1
    humanPointsDisplay.innerHTML = humanPoints
}

function updateRobotPoints() {
    robotPoints += 1
    robotPointsDisplay.innerHTML = robotPoints
}

function updatePoints() {
    if (result === 'You won') {
        updateHumanPoints()
    }

    if (result === 'You lost') {
        updateRobotPoints()
    }
}

// Calculate robor choice and display it
function generateRobotChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    console.log(randomNumber)

    if ( randomNumber === 1) {
        robotChoice = 'rock'
    }

    if ( randomNumber === 2) {
        robotChoice = 'paper'
    }

    if ( randomNumber === 3) {
        robotChoice = 'scissors'
    }
    console.log(robotChoice)

    robotChoiceDisplay.innerHTML = robotChoice
}

function calculateResult() {
    if ( humanChoice === robotChoice ) {
        result = 'Tie'
    }
    
    if ( humanChoice === 'rock' && robotChoice === 'paper') {
        result = 'You lost'
        // updateRobotPoints() 
    }

    if ( humanChoice === 'rock' && robotChoice === 'scissors') {
        result = 'You won'
        // updateHumanPoints() 
    }

    if ( humanChoice === 'paper' && robotChoice === 'rock') {
        result = 'You won'
        // updateHumanPoints() 
    }

    if ( humanChoice === 'paper' && robotChoice === 'scissors') {
        result = 'You lost'
        // updateRobotPoints() 
    }

    if ( humanChoice === 'scissors' && robotChoice === 'rock') {
        result = 'You lost'
        // updateRobotPoints() 
    }

    if ( humanChoice === 'scissors' && robotChoice === 'paper') {
        result = 'You won'
        // updateHumanPoints() 
    }

    resultDisplay.innerHTML = result
}













