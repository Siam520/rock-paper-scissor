const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = `${userChoice} <img class="choice-img" src="${userChoice}.jfif" alt="${userChoice}">`;

    generateComputerChoice();
}));

function generateComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    computerChoice = choices[randomIndex];

    computerChoiceDisplay.innerHTML = `${computerChoice} <img class="choice-img" src="${computerChoice}.jfif" alt="${computerChoice}">`;

    getResult();
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'It\'s a draw!';
        resultDisplay.className = 'draw';

    } else if (
        (computerChoice === 'Rock' && userChoice === 'Paper') ||
        (computerChoice === 'Paper' && userChoice === 'Scissors') ||
        (computerChoice === 'Scissors' && userChoice === 'Rock')
    ) {
        result = 'You win!';
        resultDisplay.className = 'win';

    } else {
        result = 'You lose!';
        resultDisplay.className = 'lose';

    }

    resultDisplay.innerHTML = `${result}`;
}









