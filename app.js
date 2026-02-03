let userScore = 0;
let computerScore = 0;

const userScorepara = document.querySelector("#user-score");
const computerScorepara = document.querySelector("#computer-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame = () => {
    msg.innerText = "It's a draw!";
    msg.style.color = "brown";
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${computerChoice}`;
        msg.style.color = "green";
    } else {
        computerScore++;
        computerScorepara.innerText = computerScore;
        msg.innerText = `Computer wins! ${computerChoice} beats ${userChoice}`;
        msg.style.color = "red";
    }
};

const playGame = (userChoice) => {
    const computerChoice = genComputerChoice();
    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            userWin = computerChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userWin = computerChoice === 'scissors' ? false : true;
        } else {
            userWin = computerChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
