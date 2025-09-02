const board = document.getElementById("board");
const status = document.getElementById("status");
const restartButton = document.getElementById("restartButton");
const symbolChooser = document.getElementById("symbolChooser");

//  Ձայնային ֆայլեր (ձայնը պետք է լինի նույն թղթապանակում կամ համապատասխան path-ով)
const winSound = new Audio("sounds/win.mp3");
const loseSound = new Audio("sounds/lose.mp3");
const tieSound = new Audio("sounds/tie.mp3");
const clickSound = new Audio("sounds/click.mp3");

let boardState = Array(9).fill(null);
let userSymbol = null;
let aiSymbol = null;
let gameEnded = false;

//  Հաղթողի ստուգման ֆունկցիա
function checkWinnerSymbol() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return boardState[a]; // either "X" or "O"
        }
    }
    return null;
}

//  Խաղատախտակի ստեղծում
function createBoard() {
    board.innerHTML = "";
    boardState.forEach((cell, index) => {
        const div = document.createElement("div");
        div.classList.add("cell");
        div.textContent = cell;
        div.addEventListener("click", () => makeMove(index));
        board.appendChild(div);
    });
}

//  Օգտատիրոջ քայլը
async function makeMove(index) {
    if (!gameEnded && !boardState[index]) {
        boardState[index] = userSymbol;
        clickSound.play();
        createBoard();

        await new Promise(resolve => setTimeout(resolve, 50));

        const winner = checkWinnerSymbol();
        if (winner) {
            status.textContent = winner === userSymbol ? "You win!" : "RL player wins!";
            gameEnded = true;

            //  Նվագի համապատասխան ձայն
            if (winner === userSymbol) winSound.play();
            else loseSound.play();

            return;
        } else if (!boardState.includes(null)) {
            status.textContent = "It's a tie!";
            gameEnded = true;
            tieSound.play(); //  Ոչ-ոքի ձայն
            return;
        }

        await makeAIMove();
    }
}

//  AI խաղացողի քայլը
async function makeAIMove() {
    const response = await fetch("http://127.0.0.1:5000/move", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            state: boardState.map(cell => cell === userSymbol ? 1 : cell === aiSymbol ? -1 : 0)
        })
    });

    const data = await response.json();
    const { i, j } = data;
    boardState[i * 3 + j] = aiSymbol;
    createBoard();

    const winnerAfterAI = checkWinnerSymbol();
    if (winnerAfterAI) {
        status.textContent = winnerAfterAI === userSymbol ? "You win!" : "RL player wins!";
        gameEnded = true;

        //  Նվագի համապատասխան ձայն
        if (winnerAfterAI === userSymbol) winSound.play();
        else loseSound.play();

    } else if (!boardState.includes(null)) {
        status.textContent = "It's a tie!";
        gameEnded = true;
        tieSound.play(); //  Ոչ-ոքի ձայն
    } else {
        status.textContent = "Your turn";
    }
}

//  Ընտրել սիմվոլը
async function chooseSymbol(symbol) {
    clickSound.play();
    userSymbol = symbol;
    aiSymbol = symbol === "X" ? "O" : "X";

    await fetch("http://127.0.0.1:5000/set_symbol", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symbol: aiSymbol === "X" ? 1 : -1 })
    });

    symbolChooser.style.display = "none";
    board.style.display = "grid";
    restartButton.style.display = "inline-block";

    await resetGame();
}

//  Խաղի reset
async function resetGame() {
    boardState = Array(9).fill(null);
    gameEnded = false;
    status.textContent = "Your turn";
    createBoard();

    if (userSymbol === "O") {
        await makeAIMove();
    }
}

//  Ռեստարտի կոճակը
restartButton.addEventListener("click", () => {
    clickSound.play(); // 🔊 ռեստարտի ձայն
    board.style.display = "none";
    restartButton.style.display = "none";
    symbolChooser.style.display = "block";
});
